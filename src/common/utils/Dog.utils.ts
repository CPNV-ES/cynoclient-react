import {Dog} from "../resource/Dog.resource";

export function displayDogSex(dog: Dog): String {
	return dog.isFemale ? "Femelle" : "Mâle";
}
