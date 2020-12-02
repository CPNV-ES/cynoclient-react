import {Client} from "../resource/Client.resource";
import {List} from "immutable";
import Axios, {AxiosResponse} from "axios";

export const ClientsRepository = {
    getClients: (): Promise<List<Client>> => Axios
        .get(`/api/clients`)
        .then(parseJsonArrayToClients),

    getClient: (id: number): Promise<Client | null> => Axios
        .get(`/api/clients/${id}`)
        .then(res => res.data ? parseJsonToClient(res.data) : null)
}

function parseJsonArrayToClients(axiosResponse: AxiosResponse<any[]>): List<Client> {
    return List(axiosResponse.data.map(parseJsonToClient));
}

function parseJsonToClient(json: any): Client {
    return {
        ...json
    }
}
