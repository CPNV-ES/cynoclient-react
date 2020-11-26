import {Dog} from "../resource/Dog.resource";
import Axios, {AxiosResponse} from "axios";
import {List} from "immutable";

export const DogsRepository = {
	getDogs: (): Promise<List<Dog>> => Axios
		.get(`/api/dogs`)
		.then(parseJsonArrayToDogs)
}

function parseJsonArrayToDogs(axiosResponse: AxiosResponse<any[]>): List<Dog> {
	return List(axiosResponse.data.map(parseJsonToDog));
}

function parseJsonToDog(json: any): Dog {
	return {
		...json
	}
}
