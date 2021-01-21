import {List} from "immutable";
import Axios from "axios";
import {ClientTakeService} from "../resource/ClientTakeService.resource";

export const ClientTakeServicesRepository = {
    getClientTakeServices: (): Promise<List<ClientTakeService>> => Axios
        .get<ClientTakeService[]>(`/api/clients_take_services?with[]=service`)
        .then(res => List(res.data)),

    getClientTakeService: (id: number): Promise<ClientTakeService | null> => Axios
        .get(`/api/clients_take_services/${id}?with[]=service`)
        .then(res => res.data),

    postClientTakeService: (clientTakeService: ClientTakeService) => Axios
        .post(`/api/clients_take_services`, clientTakeService),

    patchClientTakeService: (clientTakeService: ClientTakeService) => Axios
        .patch(`/api/clients_take_services/${clientTakeService.id}`, clientTakeService),
}
