import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-timer-reward',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './timer-reward.component.html',
  styleUrl: './timer-reward.component.css',
})
export class TimerRewardComponent implements OnInit {
  points: number = 0;
  currentTime: Date;
  displayDate: Date;
  constructor(private pointsService: PointsService) {
    this.currentTime = new Date();
    this.displayDate = new Date();
  }
  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    this.pointsService.points$.subscribe((points) => {
      this.points = points;
    });
  }
  prevDay(): void {
    this.displayDate.setDate(this.displayDate.getDate() - 1);
    this.displayDate = new Date(this.displayDate);
  }

  nextDay(): void {
    this.displayDate.setDate(this.displayDate.getDate() + 1);
    this.displayDate = new Date(this.displayDate);
  }
}
