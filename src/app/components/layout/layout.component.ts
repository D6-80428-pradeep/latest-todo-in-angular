import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TimerRewardComponent } from '../timer-reward/timer-reward.component';
import { UpcomingTaskComponent } from '../upcoming-task/upcoming-task.component';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TaskListComponent,
    TimerRewardComponent,
    UpcomingTaskComponent,
    ToastrModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
