import {Client} from "../resource/Client.resource";

export function clientFullName(client : Client | null | undefined): String {
	// Check if null or undefined
	if (client == null) {
		return "";
	}
	return `${client.firstname} ${client.lastname}`;
}

export function displayClientSex(client: Client): String {
	return client.isFemale ? "Femme" : "Homme";
}
