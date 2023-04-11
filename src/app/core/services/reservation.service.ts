import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Observable, switchMap, take } from 'rxjs';
import { CreateReservation, Reservation } from '../models';
import { BilletDto } from '../models/billet-dto.model';
import { ApiService } from './api.service';
import {ShoppingCartService} from "./shopping-cart.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private _clientId = 1;

  constructor(private apiService: ApiService,
    private panierService: ShoppingCartService) { }

  public create(): Observable<Reservation> {
    let createReseravation: CreateReservation = {
      billets: List<BilletDto>(),
      clientId: this._clientId
    }
    return this.panierService.itemsPanier$.pipe(
      take(1),
        switchMap((items) => {
          createReseravation.billets = items.map(item => {
            return {
              quantity: item.quantity,
              trajetId: item.trajet.trajetId
            }
          });
          return this.apiService.post('/reservations', createReseravation);
        }))
  }

  public delete(reservation: Reservation): Observable<string> {
    return this.apiService.delete(`/reservations/${reservation.reservationId}`);
  }

}
