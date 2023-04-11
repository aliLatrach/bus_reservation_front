import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { ItemPanier, Trajet } from '../../core/models';
import {ShoppingCartService} from "../../core/services";

@Component({
  selector: 'app-panier',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  items: List<ItemPanier>;
  items$: Observable<List<ItemPanier>>;

  constructor(private panierService: ShoppingCartService) { }

  ngOnInit(): void {
    this.items$ = this.panierService.itemsPanier$;
    this.items$.subscribe(
      (tickets) => {
        this.items = tickets;
      })
  }

  onDeleteItem(trajet: Trajet): void {
    this.panierService.deleteTrajet(trajet);
  }

  onAddItem(trajet: Trajet): void {
    this.panierService.addTrajet(trajet);
  }
}
