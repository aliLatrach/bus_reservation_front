import { Trajet } from "./trajet.model";

export interface ItemPanier {
    quantity: number;
    trajet: Trajet;
    prixTotal: number;
}
