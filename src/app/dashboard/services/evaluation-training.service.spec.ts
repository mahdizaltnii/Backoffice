import { TestBed } from '@angular/core/testing';

import { EvaluationTrainingService } from './evaluation-training.service';

describe('EvaluationTrainingService', () => {
  let service: EvaluationTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
