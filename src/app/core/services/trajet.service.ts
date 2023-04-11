import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { map, Observable, of, tap } from 'rxjs';
import { Trajet } from '../models';
import { Bus } from '../models/bus.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  constructor(private apiService: ApiService) {}

  getAllByBusNumber(busNumber: number): Observable<List<Trajet>> {
    return this.apiService.get(`/bus/${busNumber.toString()}/trajets`)
      .pipe(map(trajets => List(trajets)));
  }

  getAllBus(): Observable<List<Bus>> {
    return this.apiService.get(`/bus`)
      .pipe(map(bus => List(bus)));
  }

}
