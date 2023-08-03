import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenLoginComponent } from './citizen-login.component';

describe('CitizenLoginComponent', () => {
  let component: CitizenLoginComponent;
  let fixture: ComponentFixture<CitizenLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitizenLoginComponent]
    });
    fixture = TestBed.createComponent(CitizenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
