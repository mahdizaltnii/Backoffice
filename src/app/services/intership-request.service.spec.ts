import { TestBed } from '@angular/core/testing';

import { IntershipRequestService } from './intership-request.service';

describe('IntershipRequestService', () => {
  let service: IntershipRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntershipRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
