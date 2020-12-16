import {List} from "immutable";
import Axios from "axios";
import {Service} from "../resource/Service.resource";

export const ServicesRepository = {
    getServices: (): Promise<List<Service>> => Axios
        .get(`/api/services`)
        .then(res => List(res.data)),
}
