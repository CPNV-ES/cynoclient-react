import {LocalitiesRepository} from "../repository/Localities.repository";
import {useQuery, useQueryCache} from "react-query";
import {Locality} from "../resource/Locality.resource";
import {List} from "immutable";

const LOCALITY_CACHE_KEY = "localities"

export function useLocalities() {
    const cache = useQueryCache();

    return useQuery<List<Locality>>(
        LOCALITY_CACHE_KEY,
        () => LocalitiesRepository.getLocalities(),
        {
            onSuccess: (localities => {
                // add each locality on the cache by their id, now eah useLocality(id) use first the cache and if not found call the api
                localities.forEach(locality => {
                    cache.setQueryData([LOCALITY_CACHE_KEY, locality.id], locality)
                })
            })
        }
    )
}

export function useLocality(id: number) {
    return useQuery<Locality | null>([LOCALITY_CACHE_KEY, id],
        () => LocalitiesRepository.getLocality(id))
}
