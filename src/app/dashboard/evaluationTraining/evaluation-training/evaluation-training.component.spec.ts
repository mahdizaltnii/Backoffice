import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTrainingComponent } from './evaluation-training.component';

describe('EvaluationTrainingComponent', () => {
  let component: EvaluationTrainingComponent;
  let fixture: ComponentFixture<EvaluationTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
