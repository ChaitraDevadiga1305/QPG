import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCQQuestionsComponent } from './mcqquestions.component';

describe('MCQQuestionsComponent', () => {
  let component: MCQQuestionsComponent;
  let fixture: ComponentFixture<MCQQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MCQQuestionsComponent]
    });
    fixture = TestBed.createComponent(MCQQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
