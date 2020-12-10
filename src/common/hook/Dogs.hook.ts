import {useQuery, useQueryCache} from "react-query";
import {List} from "immutable";
import {Dog} from "../resource/Dog.resource";
import {DogsRepository} from "../repository/Dogs.repository";

const DOG_CACHE_KEY = "dogs"

export function useDogs() {
    const cache = useQueryCache();

    return useQuery<List<Dog>>(
        DOG_CACHE_KEY,
        () => DogsRepository.getDogs(),
        {
            onSuccess: (dogs =>
                dogs.forEach(dog =>
                    cache.setQueryData([DOG_CACHE_KEY, dog.id], dog)))
        });
}

export function useDog(id: number) {
    return useQuery<Dog | null>([DOG_CACHE_KEY, id],
        () => DogsRepository.getDog(id))
}
