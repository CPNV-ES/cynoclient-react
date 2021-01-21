import {Dog} from "../resource/Dog.resource";
import moment from "moment";

export function displayDogSex(dog: Dog): String {
    return dog.isFemale ? "Femelle" : "Mâle";
}

export function displayDogSterilization(dog: Dog) {
    if (!dog.isSterilized) {
        return `Non stérilisé`
    }
    return `Stérilisé (${dog.isChemical ? "non " : ""}chimique)`
}

export function dogAge(dog: Dog): number | null {
    if (dog.isDead) {
        return null;
    }
    return moment().diff(dog.birthdate, "years");
}
