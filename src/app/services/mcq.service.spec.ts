import { TestBed } from '@angular/core/testing';

import { MCQService } from './mcq.service';

describe('MCQService', () => {
  let service: MCQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
