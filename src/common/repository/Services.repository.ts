import {List} from "immutable";
import Axios from "axios";
import {Service} from "../resource/Service.resource";

export const ServicesRepository = {
    getServices: (): Promise<List<Service>> => Axios
        .get<Service[]>(`/api/services`)
        .then(res => List(res.data)),
    getService: (id: number): Promise<Service | null> => Axios
        .get<Service | null>(`/api/services/${id}`)
        .then(res => res.data),
}
