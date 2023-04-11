import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemPanier, Trajet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _itemsPanierSubject: BehaviorSubject<List<ItemPanier>> = new BehaviorSubject<List<ItemPanier>>(List.of());
  itemsPanier$: Observable<List<ItemPanier>> = this._itemsPanierSubject.asObservable();

  addTrajet(trajet: Trajet){
    const items = this._itemsPanierSubject.getValue();
    let itemPanierIndex = items.findIndex((item: ItemPanier) => item.trajet.trajetId === trajet.trajetId);
    if (itemPanierIndex === -1) {
      this._itemsPanierSubject.next(items.push({trajet: trajet, quantity: 1, prixTotal: (trajet.isDiscount? trajet.discountPrice : trajet.price) || 0}));
    }
    else {
      const itemToUpdate = items.get(itemPanierIndex);
      if ( itemToUpdate ) {
        const itemUpdated = {
          ...itemToUpdate,
          quantite: itemToUpdate.quantity + 1,
          prixTotal: itemToUpdate.prixTotal + ((trajet.isDiscount? trajet.discountPrice : trajet.price) || 0)
        };
        this._itemsPanierSubject.next(items.set(itemPanierIndex, itemUpdated));
      }
    }
  }

  deleteTrajet(trajet: Trajet){
    const items: List<ItemPanier> = this._itemsPanierSubject.getValue();
    const itemToDeleteIndex = items.findIndex((item: ItemPanier) => item.trajet.trajetId === trajet.trajetId);
    if (itemToDeleteIndex !== -1) {
      const itemToDelete = items.get(itemToDeleteIndex);
      if ( itemToDelete && itemToDelete.quantity > 1 ) {
        const itemUpdated = {
          ...itemToDelete,
          quantite: itemToDelete.quantity - 1,
          prixTotal: itemToDelete.prixTotal - ((trajet.isDiscount ? trajet.discountPrice : trajet.price) || 0)
        };
        this._itemsPanierSubject.next(items.set(itemToDeleteIndex, itemUpdated));
      } else {
        this._itemsPanierSubject.next(items.delete(itemToDeleteIndex));
      }
    }
  }

  reset(){
    this._itemsPanierSubject.next(List());
  }
}
