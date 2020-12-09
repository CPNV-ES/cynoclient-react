import {useQuery} from "react-query";
import {List} from "immutable";
import {Breed} from "../resource/Breed.resource";
import {BreedsRepository} from "../repository/Breeds.repository";

const BREED_CACHE_KEY = "breeds";

export function useBreeds() {
    return useQuery<List<Breed>>(
        BREED_CACHE_KEY,
        () => BreedsRepository.getBreeds()
    )
}
