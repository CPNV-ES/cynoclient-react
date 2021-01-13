import {useQuery, useQueryClient} from "react-query";
import {List} from "immutable";
import {Disease} from "../resource/Diseases.ressource";
import {DiseasesRepository} from "../repository/Diseases.repository";

const DISEASE_CACHE_KEY = "diseases";

export function useDiseases() {
    const queryClient = useQueryClient();

    return useQuery<List<Disease>>(
        DISEASE_CACHE_KEY,
        () => DiseasesRepository.getDiseases(), {
            onSuccess: diseases => {
                diseases.forEach(disease => {
                    queryClient.setQueryData([DISEASE_CACHE_KEY, disease.id], disease);
                })
            }
        }
    )
}

export function useDisease(id: number) {
    return useQuery<Disease | null>([DISEASE_CACHE_KEY, id],
        () => DiseasesRepository.getDisease(id));
}
