import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointFullcalanderComponent } from './appoint-fullcalander.component';

describe('AppointFullcalanderComponent', () => {
  let component: AppointFullcalanderComponent;
  let fixture: ComponentFixture<AppointFullcalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointFullcalanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointFullcalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
