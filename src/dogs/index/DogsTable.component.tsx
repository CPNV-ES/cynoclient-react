import {useDogs} from "../../common/hook/Dogs.hook";
import {Table, TableCell, TableContainer, TableHead, TableRow, TableBody} from "@material-ui/core";
import React from "react";
import {Dog} from "../../common/resource/Dog.resource";
import {displayDogSex, dogAge} from "../../common/utils/Dog.utils";
import {displayBool} from "../../common/utils/Data.utils";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";

export function DogRow(dog: Dog, onClick: () => void) {
    return (
		<TableRow hover key={dog.id} onClick={onClick}>
            <TableCell>{dog.noun}</TableCell>
            <TableCell>{displayDogSex(dog)}</TableCell>
            <TableCell>{displayBool(dog.isDead)}</TableCell>
            <TableCell>{dogAge(dog)}</TableCell>
            <TableCell>{dog.breed}</TableCell>
            <TableCell>{dog.crossbreed}</TableCell>
            <TableCell>
                <Link to={`clients/${dog.id_client}/show`}>
                    {dog.id_client}
                </Link>
            </TableCell>
        </TableRow>
    );
}

export function DogsTable() {
    const {data: dogs} = useDogs();
	const {data: dogs} = useDogs();
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom</TableCell>
                        <TableCell>Sexe</TableCell>
                        <TableCell>Mort ?</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Espèce</TableCell>
                        <TableCell>Croisement</TableCell>
                        <TableCell>Propiétaire</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
					{dogs?.map((dog) => DogRow(
						dog,
						() => history.push(`/dogs/${dog.id}`))
					)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
