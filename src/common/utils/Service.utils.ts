import {Service} from "../resource/Service.resource";


export function displayServiceDuration(service: Service): String {
	let duration = service.duration * 60;
	let result = "";
	const hour = Math.floor(duration/60);
	const minutes = Math.round(duration%60);

	if (hour > 0)
		result += hour+"h ";
	if (minutes > 0)
		result += minutes+"min";

	return result;
}
