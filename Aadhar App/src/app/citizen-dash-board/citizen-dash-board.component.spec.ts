import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenDashBoardComponent } from './citizen-dash-board.component';

describe('CitizenDashBoardComponent', () => {
  let component: CitizenDashBoardComponent;
  let fixture: ComponentFixture<CitizenDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitizenDashBoardComponent]
    });
    fixture = TestBed.createComponent(CitizenDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
