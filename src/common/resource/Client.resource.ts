import {CommonResource} from "./Common.resource";
import {Locality} from "./Locality.resource";

export interface Client extends CommonResource {
    firstname: string,
    lastname: string,
    isFemale: boolean,
    email: string | null,
    phone: string,
    street: string,
    id_locality: number | null,
    locality: Locality | null,
}

