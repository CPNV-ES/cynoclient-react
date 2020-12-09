import {Client} from "../resource/Client.resource";
import {List} from "immutable";
import Axios from "axios";

export const ClientsRepository = {
    getClients: (): Promise<List<Client>> => Axios
        .get(`/api/clients`)
        .then(res => List(res.data)),

    getClient: (id: number): Promise<Client | null> => Axios
        .get(`/api/clients/${id}`)
        .then(res => res.data),
}
