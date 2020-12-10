import {CommonResource} from "./Common.resource";
import {Locality} from "./Locality.resource";

export interface Client extends CommonResource {
    id: number,
    firstname: string,
    lastname: string,
    isFemale: boolean,
    email: string | null,
    phone: string,
    street: string,
    locality: Locality | null,
}

