import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3001/tasks';

  constructor(private http: HttpClient) { }

  getTasks(searchText: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?q=${searchText}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
  editTask(id:string,updatedTask:Task):Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${id}`,updatedTask);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
