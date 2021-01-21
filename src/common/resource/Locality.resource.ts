import {CommonResource} from "./Common.resource";

export interface Locality extends CommonResource {
    noun: string,
    zip: number,
    zip_complement: number,
    toponym: string,
    department: string,
    language: string,
}

