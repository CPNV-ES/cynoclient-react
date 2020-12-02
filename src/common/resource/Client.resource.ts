import {CommonResource} from "./Common.resource";

export interface Client extends CommonResource {
    id: number,
    firstname: string,
    lastname: string,
    isFemale: boolean,
    email: string | null,
    phone: string,
    street: string,
    id_locality: number
}

