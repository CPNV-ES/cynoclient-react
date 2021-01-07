import {Dog} from "../resource/Dog.resource";
import Axios from "axios";
import {List} from "immutable";

export const DogsRepository = {
    getDogs: (): Promise<List<Dog>> => Axios
        .get<Dog[]>(`/api/dogs?with[]=client&with[]=breed&with[]=crossbreed`)
        .then(res => List(res.data)),

    getDog: (id: number): Promise<Dog | null> => Axios
        .get(`/api/dogs/${id}?with[]=client&with[]=breed&with[]=crossbreed`)
        .then(res => res.data),
}
