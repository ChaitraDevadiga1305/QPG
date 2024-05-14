import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMCQComponent } from './create-mcq.component';

describe('CreateMCQComponent', () => {
  let component: CreateMCQComponent;
  let fixture: ComponentFixture<CreateMCQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMCQComponent]
    });
    fixture = TestBed.createComponent(CreateMCQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
