import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMCQsComponent } from './update-mcqs.component';

describe('UpdateMCQsComponent', () => {
  let component: UpdateMCQsComponent;
  let fixture: ComponentFixture<UpdateMCQsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMCQsComponent]
    });
    fixture = TestBed.createComponent(UpdateMCQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
