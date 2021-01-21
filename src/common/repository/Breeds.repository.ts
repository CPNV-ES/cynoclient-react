import {List} from "immutable";
import Axios from "axios";
import {Breed} from "../resource/Breed.resource";

export const BreedsRepository = {
    getBreeds: (): Promise<List<Breed>> => Axios
        .get<Breed[]>(`/api/breeds?with[]=category`)
        .then(res => List(res.data)),

    getBreed: (id: number): Promise<Breed | null> => Axios
        .get(`/api/breeds/${id}?with[]=category`)
        .then(res => res.data)
}
