import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private pointsSubject = new BehaviorSubject<number>(0);
  points$ = this.pointsSubject.asObservable();

  addPoint(): void {
    this.pointsSubject.next(this.pointsSubject.value + 1);
  }

  getPoints(): number {
    return this.pointsSubject.value;
  }
}
