import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler{

  constructor(private snackBar: MatSnackBar) {}

  handleError(error: any): void {
    if ( error instanceof ErrorEvent ) {
      this.snackBar.open(`${error.message}`, 'X', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: 'error-snackbar'});
    }
  }
}
