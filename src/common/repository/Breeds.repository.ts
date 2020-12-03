import {List} from "immutable";
import Axios from "axios";
import {Breed} from "../resource/Breed.resource";

export const BreedsRepository = {
    getBreeds: (): Promise<List<Breed>> => Axios
        .get(`/api/breeds`)
        .then(res => List(res.data)),
}
