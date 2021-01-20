import {useMutation, useQuery, useQueryCache} from "react-query";
import {List} from "immutable";
import {ClientTakeService} from "../resource/ClientTakeService.resource";
import {ClientTakeServicesRepository} from "../repository/ClientTakeServicesRepository";

const CLIENT_TAKE_SERVICE_CACHE_KEY = "clientTakeService"

export function useClientTakeServices() {
    const cache = useQueryCache();

    return useQuery<List<ClientTakeService>>(
        CLIENT_TAKE_SERVICE_CACHE_KEY,
        () => ClientTakeServicesRepository.getClientTakeServices(),
        {
            onSuccess: (clientTakeService =>
                clientTakeService.forEach(clientTakeService =>
                    cache.setQueryData([CLIENT_TAKE_SERVICE_CACHE_KEY, clientTakeService.id], clientTakeService)))
        });
}

export function useClientTakeService(id: number) {
    return useQuery<ClientTakeService | null>([CLIENT_TAKE_SERVICE_CACHE_KEY, id],
        () => ClientTakeServicesRepository.getClientTakeService(id))
}

export function useEditClientTakeService(){
    const cache = useQueryCache();
    return useMutation(
        (clientTakeService: ClientTakeService) => ClientTakeServicesRepository.patchClientTakeService(clientTakeService),
        {
            onSuccess: () => {
                cache.invalidateQueries(CLIENT_TAKE_SERVICE_CACHE_KEY);
            },
        }
    )
}
