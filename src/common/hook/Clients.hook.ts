import {ClientsRepository} from "../repository/Clients.repository";
import {useQuery, useQueryCache} from "react-query";
import {Client} from "../resource/Client.resource";
import {List} from "immutable";

const CLIENT_CACHE_KEY = "clients"

export function useClients() {
    const cache = useQueryCache();

    return useQuery<List<Client>>(
        CLIENT_CACHE_KEY,
        () => ClientsRepository.getClients(),
        {
            onSuccess: (clients => {
                //Also add each client in the cache by their id to avoid refetching them when using useClient
                clients.forEach(client => {
                    cache.setQueryData([CLIENT_CACHE_KEY, client.id], client)
                })
            })
        }
    )
}

export function useClient(id: number) {
    return useQuery<Client | null>([CLIENT_CACHE_KEY, id],
        () => ClientsRepository.getClient(id))
}
