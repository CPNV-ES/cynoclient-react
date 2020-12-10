import {Client} from "../resource/Client.resource";
import {List} from "immutable";
import Axios from "axios";

export const ClientsRepository = {
    getClients: (): Promise<List<Client>> => Axios
        .get(`/api/clients`)
        .then(res => List(res.data)),

    getClient: (id: number): Promise<Client | null> => Axios
        .get(`/api/clients/${id}`)
        .then(res => res.data ? parseJsonToClient(res.data) : null),

    getClientWithLocality: (id: number): Promise<Client | null> => Axios
        .get(`/api/clients/${id}?with[]=locality`)
        .then(res => res.data ? parseJsonToClient(res.data) : null),

    postClient: (client: Client) => Axios
        .post(`/api/clients`, client),

    patchClient: (client: Client) => Axios
        .patch(`/api/clients/${client.id}`, client),
}

function parseJsonToClient(json: any): Client {
    return {
        ...json
    }
}
