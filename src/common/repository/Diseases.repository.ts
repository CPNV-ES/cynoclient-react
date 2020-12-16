import {List} from "immutable";
import Axios from "axios";
import {Disease} from "../resource/Diseases.ressource";

export const DiseasesRepository = {
    getDiseases: (): Promise<List<Disease>> => Axios
        .get<Disease[]>(`/api/diseases`)
        .then(res => List(res.data)),

    getDisease: (id: number): Promise<Disease | null> => Axios
        .get(`/api/diseases/${id}`)
        .then(res => res.data)
}