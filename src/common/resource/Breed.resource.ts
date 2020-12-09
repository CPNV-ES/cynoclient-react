import {CommonResource} from "./Common.resource";

export interface Breed extends CommonResource {
    link: string,
    picture: string | null,
    noun: string,
    id_category: number,
    morphotype: string,
    classification: string,
    min_size_female: number,
    max_size_female: number,
    min_size_male: number,
    max_size_male: number,
    min_weight_female: number,
    max_weight_female: number,
    min_weight_male: number,
    max_weight_male: number,
    life_expectancy: number
}
