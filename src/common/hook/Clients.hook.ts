import {ClientsRepository} from "../repository/Clients.repository";
import {useQuery} from "react-query";
import {Client} from "../resource/Client.resource";
import {List} from "immutable";

const CLIENT_CACHE_KEY = "clients"

export function useClients() {
    return useQuery<List<Client>>(CLIENT_CACHE_KEY, () => ClientsRepository.getClients())
}
