import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMCQQuestionsComponent } from './create-mcqquestions.component';

describe('CreateMCQQuestionsComponent', () => {
  let component: CreateMCQQuestionsComponent;
  let fixture: ComponentFixture<CreateMCQQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMCQQuestionsComponent]
    });
    fixture = TestBed.createComponent(CreateMCQQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
