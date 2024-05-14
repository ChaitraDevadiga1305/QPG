import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCQPreviewComponent } from './mcqpreview.component';

describe('MCQPreviewComponent', () => {
  let component: MCQPreviewComponent;
  let fixture: ComponentFixture<MCQPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MCQPreviewComponent]
    });
    fixture = TestBed.createComponent(MCQPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
