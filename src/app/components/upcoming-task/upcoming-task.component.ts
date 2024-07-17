import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-task',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './upcoming-task.component.html',
  styleUrl: './upcoming-task.component.css',
})
export class UpcomingTaskComponent implements OnInit {
  upcomingTasks: { title: string}[] = [
    
      { "title": "Doctor's Appointment"},
      { "title": "Team Meeting",},
      { "title": "Project Deadline", },
      { "title": "Friend's Wedding", }
  
  ];

  constructor() {}

  ngOnInit(): void {}
}
