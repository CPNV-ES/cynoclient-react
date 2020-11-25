import {Client} from "../resource/Client.resource";
import {List} from "immutable";
import Axios, {AxiosResponse} from "axios";

export const ClientsRepository = {
    getClients: (): Promise<List<Client>> => Axios
        .get(`/api/clients`)
        .then(parseJsonArrayToClients)
}

function parseJsonArrayToClients(axiosResponse: AxiosResponse<any[]>): List<Client> {
    return List(axiosResponse.data.map(parseJsonToClient));
}

function parseJsonToClient(json: any): Client {
    return {
        ...json
    }
}
