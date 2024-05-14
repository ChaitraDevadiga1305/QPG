import { TestBed } from '@angular/core/testing';

import { MCQQuestionService } from './mcqquestion.service';

describe('MCQQuestionService', () => {
  let service: MCQQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCQQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
