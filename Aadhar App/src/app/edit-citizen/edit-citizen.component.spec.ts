import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitizenComponent } from './edit-citizen.component';

describe('EditCitizenComponent', () => {
  let component: EditCitizenComponent;
  let fixture: ComponentFixture<EditCitizenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCitizenComponent]
    });
    fixture = TestBed.createComponent(EditCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
