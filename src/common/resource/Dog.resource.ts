import {CommonResource} from "./Common.resource";

export interface Dog extends CommonResource {
	noun: string,
	female: boolean,
	birthdate: string,
	sterilized: boolean,
	chemical: boolean,
	color: string,
	dead: boolean,
	id_client: number,
	breed: number,
	crossbreed: number,
}
