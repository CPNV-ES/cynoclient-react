import {useDogs} from "../../common/hook/Dogs.hook";
import {Table, TableCell, TableContainer} from "@material-ui/core";
import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {Dog} from "../../common/resource/Dog.resource";
import {displayDogSex} from "../../common/utils/Dog.utils";

export function DogRow(dog: Dog) {
	return (
		<TableRow>
			<TableCell>{dog.noun}</TableCell>
			<TableCell>{displayDogSex(dog)}</TableCell>
			<TableCell>{dog.color}</TableCell>
		</TableRow>
	);
}

export function DogsTable() {
	const {data: dogs} = useDogs();
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Nom</TableCell>
						<TableCell>Sexe</TableCell>
						<TableCell>Couleur</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dogs?.map((dog) => DogRow(dog))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
