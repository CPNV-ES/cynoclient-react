import {Client} from "../resource/Client.resource";
import {List} from "immutable";
import Axios from "axios";

export const ClientsRepository = {
    getClients: (): Promise<List<Client>> => Axios
        .get<Client[]>(`/api/clients?with[]=locality`)
        .then(res => List(res.data)),

    getClient: (id: number): Promise<Client | null> => Axios
        .get<Client>(`/api/clients/${id}?with[]=locality`)
        .then(res => res.data),

    postClient: (client: Client) => Axios
        .post(`/api/clients`, client),

    patchClient: (client: Client) => Axios
        .patch(`/api/clients/${client.id}`, client),

    deleteClient: (client: Client) => Axios
        .delete(`/api/clients/${client.id}`),
}
