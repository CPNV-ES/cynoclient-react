import {useQuery} from "react-query";
import {List} from "immutable";
import {Service} from "../resource/Service.resource";
import {ServicesRepository} from "../repository/Services.repository";

const CACHE_KEY = "services";

export function useServices() {
    return useQuery<List<Service>>(
        CACHE_KEY,
        () => ServicesRepository.getServices()
    )
}

export function useService(id: number) {
    return useQuery<Service | null>([CACHE_KEY, id],
        () => ServicesRepository.getService(id));
}
