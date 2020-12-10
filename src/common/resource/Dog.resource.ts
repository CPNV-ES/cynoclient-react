import {CommonResource} from "./Common.resource";
import {Client} from "./Client.resource";

export interface Dog extends CommonResource {
    noun: string,
    isFemale: boolean,
    birthdate: string,
    isSterilized: boolean,
    isChemical: boolean,
    color: string,
    isDead: boolean,
    breed: number,
    crossbreed: number,
    client: Client,
}
