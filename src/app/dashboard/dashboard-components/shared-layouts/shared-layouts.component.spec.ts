import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLayoutsComponent } from './shared-layouts.component';

describe('SharedLayoutsComponent', () => {
  let component: SharedLayoutsComponent;
  let fixture: ComponentFixture<SharedLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
