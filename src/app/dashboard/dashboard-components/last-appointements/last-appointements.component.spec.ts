import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAppointementsComponent } from './last-appointements.component';

describe('LastAppointementsComponent', () => {
  let component: LastAppointementsComponent;
  let fixture: ComponentFixture<LastAppointementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastAppointementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastAppointementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
