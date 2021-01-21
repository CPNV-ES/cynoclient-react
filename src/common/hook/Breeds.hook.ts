import {useQuery, useQueryClient} from "react-query";
import {List} from "immutable";
import {Breed} from "../resource/Breed.resource";
import {BreedsRepository} from "../repository/Breeds.repository";

const BREED_CACHE_KEY = "breeds";

export function useBreeds() {
    const queryClient = useQueryClient();

    return useQuery<List<Breed>>(
        BREED_CACHE_KEY,
        () => BreedsRepository.getBreeds(), {
            onSuccess: breeds => {
                breeds.forEach(breed => {
                    queryClient.setQueryData([BREED_CACHE_KEY, breed.id], breed);
                })
            }
        }
    )
}

export function useBreed(id: number) {
    return useQuery<Breed | null>([BREED_CACHE_KEY, id],
        () => BreedsRepository.getBreed(id));
}
