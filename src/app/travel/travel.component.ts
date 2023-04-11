import { Component, ViewChild } from '@angular/core';
import { StepTravelComponent } from './step-travel/step-travel.component';
import { StepPaiementComponent } from './step-paiement/step-paiement.component';
import { MatStepper } from '@angular/material/stepper';
import { Errors, Facture, Reservation } from '../core/models';
import { StepConfirmationComponent } from './step-confirmation/step-confirmation.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {

  @ViewChild("stepper", { static: false }) stepper: MatStepper;

  @ViewChild(StepTravelComponent) stepTravelComponent: StepTravelComponent;
  @ViewChild(StepPaiementComponent) stepPaiementComponent: StepPaiementComponent;
  @ViewChild(StepConfirmationComponent) stepConfirmationComponent: StepConfirmationComponent;

  private _errorsSubject: BehaviorSubject<Errors> = new BehaviorSubject({errors: {}});
  errors$: Observable<Errors> = this._errorsSubject.asObservable();

  goToStepPaiement(reservation: Reservation){
    this.stepPaiementComponent.reservation = reservation;
    this.stepper.next();
  }

  goToConfirmation(facture: Facture){
    this.stepConfirmationComponent.facture = facture;
    this.stepper.next();
  }

  returnToStepTravel(){
    this.stepper.previous();
  }


}
