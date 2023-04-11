import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPaiementComponent } from './step-paiement.component';

describe('StepPaiementComponent', () => {
  let component: StepPaiementComponent;
  let fixture: ComponentFixture<StepPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
