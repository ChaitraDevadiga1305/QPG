import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRecordTableComponent } from './question-record-table.component';

describe('QuestionRecordTableComponent', () => {
  let component: QuestionRecordTableComponent;
  let fixture: ComponentFixture<QuestionRecordTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionRecordTableComponent]
    });
    fixture = TestBed.createComponent(QuestionRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
