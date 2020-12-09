import {CommonResource} from "./Common.resource";

export interface Dog extends CommonResource {
    noun: string,
    isFemale: boolean,
    birthdate: string,
    isSterilized: boolean,
    isChemical: boolean,
    color: string,
    isDead: boolean,
    id_client: number,
    breed: number,
    crossbreed: number,
}
