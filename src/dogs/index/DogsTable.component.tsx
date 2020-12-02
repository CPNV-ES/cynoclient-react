import {useDogs} from "../../common/hook/Dogs.hook";
import {Table, TableCell, TableContainer} from "@material-ui/core";
import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {Dog} from "../../common/resource/Dog.resource";
import {displayDogSex, dogAge} from "../../common/utils/Dog.utils";
import {displayBool} from "../../common/utils/Data.utils";

export function DogRow(dog: Dog) {
    return (
        <TableRow>
            <TableCell>{dog.noun}</TableCell>
            <TableCell>{displayDogSex(dog)}</TableCell>
            <TableCell>{displayBool(dog.isDead)}</TableCell>
            <TableCell>{dogAge(dog)}</TableCell>
            <TableCell>{dog.breed}</TableCell>
            <TableCell>{dog.crossbreed}</TableCell>
            <TableCell>{dog.id_client}</TableCell>
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
                        <TableCell>Mort ?</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Espèce</TableCell>
                        <TableCell>Croisement</TableCell>
                        <TableCell>Propiétaire</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dogs?.map((dog) => DogRow(dog))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
