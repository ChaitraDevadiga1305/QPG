import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQPComponent } from './create-qp.component';

describe('CreateQPComponent', () => {
  let component: CreateQPComponent;
  let fixture: ComponentFixture<CreateQPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQPComponent]
    });
    fixture = TestBed.createComponent(CreateQPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
