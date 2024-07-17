import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TimerRewardComponent } from './components/timer-reward/timer-reward.component';
import { UpcomingTaskComponent } from './components/upcoming-task/upcoming-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TaskListComponent,
    TimerRewardComponent,
    UpcomingTaskComponent,
    ToastrModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODO-APP';
}
