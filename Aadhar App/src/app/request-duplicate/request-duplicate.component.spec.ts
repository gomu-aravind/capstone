import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDuplicateComponent } from './request-duplicate.component';

describe('RequestDuplicateComponent', () => {
  let component: RequestDuplicateComponent;
  let fixture: ComponentFixture<RequestDuplicateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDuplicateComponent]
    });
    fixture = TestBed.createComponent(RequestDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
