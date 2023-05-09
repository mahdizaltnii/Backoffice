import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseTypeComponent } from './analyse-type.component';

describe('AnalyseTypeComponent', () => {
  let component: AnalyseTypeComponent;
  let fixture: ComponentFixture<AnalyseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
