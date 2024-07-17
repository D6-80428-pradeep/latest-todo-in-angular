import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { PointsService } from '../../services/points.service';
import { SearchService } from '../../services/SearchService';
import Swal from 'sweetalert2';

declare var bootstrap: any;

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  newTaskTitle: string = '';
  editTaskTitle: string = '';
  currentEditTask: Task | null = null;
  searchText: string = '';

  constructor(
    private taskService: TaskService,
    private pointsService: PointsService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.loadTasks();
    // this.searchService.currentSearchText.subscribe((text) => {
    //   this.searchText = text;
    //   this.loadTasks();
    // });
  }

  loadTasks(): void {
    this.taskService.getTasks(this.searchText).subscribe((tasks) => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  generateNewId(): string {
    if (this.tasks.length > 0) {
      const maxId = Math.max(...this.tasks.map((task) => parseInt(task.id, 10)));
      return (maxId + 1).toString();
    } else {
      return '1';
    }
  }

  addTask(): void {
    const newTask: Task = {
      id: this.generateNewId(),
      title: this.newTaskTitle,
      date: new Date().toISOString().split('T')[0],
      completed: false,
    };
    this.taskService.addTask(newTask).subscribe((task) => {
      this.tasks.push(task);
     
    });
    this.newTaskTitle = '';
    Swal.fire({
      title: 'Task Added!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  markAsCompleted(task: Task): void {
    Swal.fire({
      title: 'Mark as Completed?',
      text: `Are you sure you want to mark '${task.title}' as completed?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Mark as Completed',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        task.completed = true;
        this.taskService.updateTask(task).subscribe(() => {
          Swal.fire('Completed!', `'${task.title}' has been marked as completed.`, 'success');
          this.loadTasks();
          this.pointsService.addPoint();
        });
      }
    });
  }

  updateTask(updatedTask: Task): void {
    this.taskService.updateTask(updatedTask).subscribe((task) => {
      this.tasks = this.tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
      
    });
  }

  openEditModal(task: Task): void {
    this.currentEditTask = task;
    this.editTaskTitle = task.title;
    const modalElement = document.getElementById('editTaskModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  saveTask(): void {
    if (this.currentEditTask) {
      this.currentEditTask.title = this.editTaskTitle;
      this.taskService.updateTask(this.currentEditTask).subscribe((updatedTask) => {
        this.tasks = this.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
        this.currentEditTask = null;
        const modalElement = document.getElementById('editTaskModal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
        }
       
      });
    }
  }

  deleteTask(id: string): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      Swal.fire({
        title: 'Delete Task?',
        text: `Are you sure you want to delete '${task.title}'?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          this.taskService.deleteTask(id).subscribe(() => {
            this.tasks = this.tasks.filter((task) => task.id !== id);
            this.filteredTasks = this.filteredTasks.filter((task) => task.id !== id);
            Swal.fire('Deleted!', `'${task.title}' has been deleted.`, 'success');
          });
        }
      });
    }
  }

  filterTasks(event: Event): void {

    // console.log((event.target as HTMLInputElement).value);

    
    this.tasks = this.filteredTasks.filter((task) =>
      task.title.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())

    );
    

  }
}
