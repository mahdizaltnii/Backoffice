import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAuthComponent } from './leave-auth.component';

describe('LeaveAuthComponent', () => {
  let component: LeaveAuthComponent;
  let fixture: ComponentFixture<LeaveAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
