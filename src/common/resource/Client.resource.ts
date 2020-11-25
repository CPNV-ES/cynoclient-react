import {CommonResource} from "./Common.resource";

export interface Client extends CommonResource {
    firstname: string,
    lastname: string,
    female: 0,
    email: string | null,
    phone: string,
    street: string,
    id_locality: number
}

