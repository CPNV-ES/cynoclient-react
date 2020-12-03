import {Client} from "../resource/Client.resource";
import {List} from "immutable";
import Axios from "axios";

export const BreedsRepository = {
    getBreeds: (): Promise<List<Client>> => Axios
        .get(`/api/breeds`)
        .then(res => List(res.data)),
}
