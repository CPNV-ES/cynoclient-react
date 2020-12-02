import {Client} from "../resource/Client.resource";

export function displayClientSex(client: Client): String {
	return client.isFemale ? "Femme" : "Homme";
}
