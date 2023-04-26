import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDetailsComponent } from './patients-details.component';

describe('PatientsDetailsComponent', () => {
  let component: PatientsDetailsComponent;
  let fixture: ComponentFixture<PatientsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
