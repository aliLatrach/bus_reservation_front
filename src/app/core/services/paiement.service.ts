import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture, MoyenPaiement } from '../models';
import { ApiService } from './api.service';
import { ReservationService } from './reservation.service';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private reservationService: ReservationService,
    private apiService: ApiService, 
    private datePipe: DatePipe) { }

  public payReservation(reservationId: number, moyenPaiement: MoyenPaiement): Observable<Facture> {
    const moyenPaiementDto = {
      cardNumber: moyenPaiement.cardNumber ? moyenPaiement.cardNumber  : '',
      expirationDate: moyenPaiement.expirationDate ? this.datePipe.transform(moyenPaiement.expirationDate, 'dd/MM/YYYY') : '',
      email: moyenPaiement.email ? moyenPaiement.email : ''
    }
    return this.apiService.post('/paiements', {reservationId: reservationId, moyenPaiement: moyenPaiementDto});
  }
}
