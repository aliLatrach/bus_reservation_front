import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { HeaderComponent, FooterComponent } from './layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { PrixTotalPanierPipe } from './pipes';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrixTotalPanierPipe,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, 
    MatToolbar, MatIcon, MatButton, 
    PrixTotalPanierPipe],
  providers: [CurrencyPipe, DatePipe]
})
export class SharedModule { }
