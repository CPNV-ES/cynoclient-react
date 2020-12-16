import {Locality} from "../resource/Locality.resource";
import {List} from "immutable";
import Axios, {AxiosResponse} from "axios";

export const LocalitiesRepository = {
    getLocalities: (): Promise<List<Locality>> => Axios
        .get(`/api/localities`)
        .then(parseJsonArrayToLocalities),

    getLocality: (id: number): Promise<Locality | null> => Axios
        .get(`/api/localities/${id}`)
        .then(res => res.data ? parseJsonToLocality(res.data) : null)
}

function parseJsonArrayToLocalities(axiosResponse: AxiosResponse<any[]>): List<Locality> {
    return List(axiosResponse.data.map(parseJsonToLocality));
}

function parseJsonToLocality(json: any): Locality {
    return {
        ...json
    }
}
