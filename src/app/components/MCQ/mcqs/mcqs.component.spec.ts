import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCQsComponent } from './mcqs.component';

describe('MCQsComponent', () => {
  let component: MCQsComponent;
  let fixture: ComponentFixture<MCQsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MCQsComponent]
    });
    fixture = TestBed.createComponent(MCQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
