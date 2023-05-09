import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseCenterComponent } from './analyse-center.component';

describe('AnalyseCenterComponent', () => {
  let component: AnalyseCenterComponent;
  let fixture: ComponentFixture<AnalyseCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
