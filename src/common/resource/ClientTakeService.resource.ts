import {CommonResource} from "./Common.resource";
import {Service} from "./Service.resource";

export interface ClientTakeService extends CommonResource {
    service: Service,
    isPaid: boolean,
}
