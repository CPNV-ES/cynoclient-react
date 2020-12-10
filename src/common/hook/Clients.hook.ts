import {ClientsRepository} from "../repository/Clients.repository";
import {useMutation, useQuery, useQueryCache} from "react-query";
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

export function useClientWithLocality(id: number) {
    return useQuery<Client | null>([CLIENT_CACHE_KEY, id],
        () => ClientsRepository.getClientWithLocality(id))
}

export function useCreateClient(){
    const cache = useQueryCache();
    return useMutation(
        (client: Client) => ClientsRepository.postClient(client),
        {
            onSuccess: () => {
                cache.invalidateQueries(CLIENT_CACHE_KEY);
            },
        }
    )
}
export function useEditClient(){
    const cache = useQueryCache();
    return useMutation(
        (client: Client) => ClientsRepository.patchClient(client),
        {
            onSuccess: () => {
                cache.invalidateQueries(CLIENT_CACHE_KEY);
            },
        }
    )
}