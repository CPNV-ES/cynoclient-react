import {CommonResource} from "./Common.resource";

export interface Disease extends CommonResource {
    noun: string,
    description: string,
    symptoms: string,
    preventive: string,
    curative: string,
    isVaccinable: boolean,
    isZoonosis: boolean,
}