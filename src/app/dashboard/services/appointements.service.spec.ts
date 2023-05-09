import { TestBed } from '@angular/core/testing';

import { AppointementsService } from './appointements.service';

describe('AppointementsService', () => {
  let service: AppointementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
