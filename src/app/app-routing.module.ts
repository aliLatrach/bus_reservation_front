import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { TravelComponent } from './travel';
import {ReservationComponent} from "./reservation/reservation.component";

const routes: Routes = [
  { path: '', redirectTo: '/travel', pathMatch: 'full' },
  { path: 'home', redirectTo: '/travel', pathMatch: 'full' },
  { path: 'travel', component: TravelComponent },
  { path: 'reservation', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
