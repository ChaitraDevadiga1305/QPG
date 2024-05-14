import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectiveQuestionsComponent } from './subjective-questions.component';

describe('SubjectiveQuestionsComponent', () => {
  let component: SubjectiveQuestionsComponent;
  let fixture: ComponentFixture<SubjectiveQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectiveQuestionsComponent]
    });
    fixture = TestBed.createComponent(SubjectiveQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
