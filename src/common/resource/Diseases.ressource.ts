import {CommonResource} from "./Common.resource";
import {Dog} from "./Dog.resource"

export interface Disease extends CommonResource {
    noun: string,
    description: string,
    symptoms: string,
    preventive: string,
    curative: string,
    isVaccinable: boolean,
    isZoonosis: boolean,
    dogs: Dog[]
}