import {ClientsRepository} from "../repository/Clients.repository";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {Client} from "../resource/Client.resource";
import {List} from "immutable";

const CLIENT_CACHE_KEY = "clients"

export function useClients() {
    const queryClient = useQueryClient();

    return useQuery<List<Client>>(
        CLIENT_CACHE_KEY,
        () => ClientsRepository.getClients(),
        {
            onSuccess: (clients => {
                //Also add each client in the cache by their id to avoid refetching them when using useClient
                clients.forEach(client => {
                    queryClient.setQueryData([CLIENT_CACHE_KEY, client.id], client)
                })
            })
        }
    )
}

export function useClient(id: number) {
    return useQuery<Client | null>([CLIENT_CACHE_KEY, id],
        () => ClientsRepository.getClient(id))
}

export function useCreateClient() {
    const queryClient = useQueryClient();
    return useMutation(
        (client: Client) => ClientsRepository.postClient(client),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries(CLIENT_CACHE_KEY);
            },
        }
    )
}

export function useEditClient() {
    const queryClient = useQueryClient();
    return useMutation(
        (client: Client) => ClientsRepository.patchClient(client),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries(CLIENT_CACHE_KEY);
            },
        }
    )
}

export function useDeleteClient() {
    const queryClient = useQueryClient();
    return useMutation(
        (client: Client) => ClientsRepository.deleteClient(client),
        {
            onSuccess: async (_, client: Client) => {
                await queryClient.invalidateQueries(CLIENT_CACHE_KEY);
            },
        }
    )
}
