import { Bus } from "./bus.model";

export interface Trajet {
    trajetId: number;
    bus: Bus;
    departureDate: number;
    seatsNumber: number;
    nbrPlaceRestante: number;
    price: number;
    isDiscount: boolean;
    discountPrice?: number;
}
