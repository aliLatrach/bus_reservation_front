import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTravelComponent } from './step-travel.component';

describe('StepTravelComponent', () => {
  let component: StepTravelComponent;
  let fixture: ComponentFixture<StepTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
