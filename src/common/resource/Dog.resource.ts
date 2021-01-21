import {CommonResource} from "./Common.resource";
import {Client} from "./Client.resource";
import {Breed} from "./Breed.resource";
import {Disease} from "./Diseases.ressource";
import {ClientTakeService} from "./ClientTakeService.resource";

export interface Dog extends CommonResource {
    noun: string,
    isFemale: boolean,
    birthdate: string,
    isSterilized: boolean,
    isChemical: boolean,
    color: string,
    isDead: boolean,
    breed: Breed,
    crossbreed: Breed,
    client: Client,
    diseases: Disease[],
    clients_take_services: ClientTakeService[],
}
