import {CommonResource} from "./Common.resource";

export interface Dog extends CommonResource {
	id: number,
	noun: string,
	isFemale: boolean,
	birthdate: string,
	isSterilized: boolean,
	isChemical: boolean,
	color: string,
	isDead: boolean,
	id_client: number,
	breed: number,
	crossbreed: number,
}
