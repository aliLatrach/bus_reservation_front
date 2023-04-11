import { Component, Output, EventEmitter } from '@angular/core';
import { Facture } from 'src/app/core/models';

@Component({
  selector: 'app-step-confirmation',
  templateUrl: './step-confirmation.component.html',
  styleUrls: ['./step-confirmation.component.scss']
})
export class StepConfirmationComponent  {

  @Output() reset = new EventEmitter();

  facture: Facture;

  onResetStepper() {
    this.reset.emit();
  }
}
