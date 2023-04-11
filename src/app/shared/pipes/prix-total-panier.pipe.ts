import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'immutable';
import { ItemPanier } from '../../core/models';

@Pipe({
  name: 'prixTotalPanier'
})
export class PrixTotalPanierPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(items: List<ItemPanier>): string | null {
    return  this.currencyPipe.transform(
      items.reduce((total:number, item) => total + item.prixTotal, 0),
      'EUR');
  }

}
