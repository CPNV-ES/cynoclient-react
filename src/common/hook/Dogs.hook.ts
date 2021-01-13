import {useQuery, useQueryClient, useMutation} from "react-query";
import {List} from "immutable";
import {Dog} from "../resource/Dog.resource";
import {DogsRepository} from "../repository/Dogs.repository";

const DOG_CACHE_KEY = "dogs"

export function useDogs() {
    const queryClient = useQueryClient();

    return useQuery<List<Dog>>(
        DOG_CACHE_KEY,
        () => DogsRepository.getDogs(),
        {
            onSuccess: (dogs =>
                dogs.forEach(dog =>
                    queryClient.setQueryData([DOG_CACHE_KEY, dog.id], dog)))
        });
}

export function useDog(id: number) {
    return useQuery<Dog | null>([DOG_CACHE_KEY, id],
        () => DogsRepository.getDog(id))
}

export function useEditDog(){
    const queryClient = useQueryClient();
    return useMutation(
        (dog: Dog) => DogsRepository.patchDog(dog),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(DOG_CACHE_KEY);
            },
        }
    )
}
