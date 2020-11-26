import {useQuery} from "react-query";
import {List} from "immutable";
import {Dog} from "../resource/Dog.resource";
import {DogsRepository} from "../repository/Dogs.repository";

const DOG_CACHE_KEY = "dogs"

export function useDogs() {
	return useQuery<List<Dog>>(DOG_CACHE_KEY, () => DogsRepository.getDogs())
}
