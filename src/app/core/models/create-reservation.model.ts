import { List } from "immutable";
import { BilletDto } from "./billet-dto.model";

export interface CreateReservation {
    billets: List<BilletDto>;
    clientId: number;
}
