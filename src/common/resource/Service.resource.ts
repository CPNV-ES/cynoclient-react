import {CommonResource} from "./Common.resource";

export interface Service extends CommonResource {
    id: number,
    moment: string,
    duration: number,
    type: string,
    description: string,
    street: string,
}
