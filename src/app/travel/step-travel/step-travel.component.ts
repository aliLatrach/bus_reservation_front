import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { List } from 'immutable';
import { Subscription } from 'rxjs';
import { Trajet, Bus, Reservation } from '../../core/models';
import {TrajetService, ReservationService, ShoppingCartService} from '../../core/services';

@Component({
  selector: 'app-step-travel',
  templateUrl: './step-travel.component.html',
  styleUrls: ['./step-travel.component.scss']
})
export class StepTravelComponent implements OnInit, OnDestroy {

  busList: List<Bus>;
  trajets: List<Trajet>;

  travelFormGroup: FormGroup;
  disableValiderPanierButton: boolean;
  subscriptions = new Subscription();

  @Output()
  onNextStep = new EventEmitter();

  constructor(private _formBuilder: FormBuilder,
    private panierService: ShoppingCartService,
    private trajetService: TrajetService,
    private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.travelFormGroup = this._formBuilder.group({
      travelCtrl: ['',]
    })
    this.subscriptions.add(this.panierService.itemsPanier$.subscribe(items => {
      this.disableValiderPanierButton = items.isEmpty();
    }));
    this.subscriptions.add(this.trajetService.getAllBus().subscribe(
      busList => this.busList = busList));
  }

  public onAddTrajet(trajet: Trajet) {
    this.panierService.addTrajet(trajet);
  }

  public onChangeBusSelection(busNumber: number): void {
    this.subscriptions.add(
        this.trajetService.getAllByBusNumber(busNumber).subscribe({
          next: (trajets: List<Trajet>) => {
            this.trajets = trajets;
          }}));
  }

  public onValidate(): void {
    this.disableValiderPanierButton = true;
    this.subscriptions.add(this.reservationService.create().subscribe(
      (reservation: Reservation) => {
        this.onNextStep.emit(reservation);
        this.panierService.reset();
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
