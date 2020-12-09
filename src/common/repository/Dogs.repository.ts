import {Dog} from "../resource/Dog.resource";
import Axios from "axios";
import {List} from "immutable";

export const DogsRepository = {
    getDogs: (): Promise<List<Dog>> => Axios
        .get(`/api/dogs`)
        .then(res => List(res.data)),

    getDog: (id: number): Promise<Dog | null> => Axios
        .get(`/api/dogs/${id}`)
}
