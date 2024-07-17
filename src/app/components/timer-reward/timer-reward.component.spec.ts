import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRewardComponent } from './timer-reward.component';

describe('TimerRewardComponent', () => {
  let component: TimerRewardComponent;
  let fixture: ComponentFixture<TimerRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerRewardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimerRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
