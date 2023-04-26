import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSurveyComponent } from './hospital-survey.component';

describe('HospitalSurveyComponent', () => {
  let component: HospitalSurveyComponent;
  let fixture: ComponentFixture<HospitalSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
