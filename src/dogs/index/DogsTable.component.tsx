import {useDogs} from "../../common/hook/Dogs.hook";
import {Table, TableCell, TableContainer, TableHead, TableRow, TableBody} from "@material-ui/core";
import React from "react";
import {Dog} from "../../common/resource/Dog.resource";
import {displayDogSex, dogAge} from "../../common/utils/Dog.utils";
import {displayBool} from "../../common/utils/Data.utils";
import {useHistory} from "react-router-dom";
import {useClient} from "../../common/hook/Clients.hook";
import {clientFullName} from "../../common/utils/Client.utils";

export function DogRow(dog: Dog, onClick: () => void) {
    const history = useHistory();
    const {data: owner} = useClient(dog.id_client);

    // Infer event type from its usage
    const onClientClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        history.push(`clients/${dog.id_client}/show`);
    }

    return (
        <TableRow hover key={dog.id} onClick={onClick}>
            <TableCell>{dog.noun}</TableCell>
            <TableCell>{displayDogSex(dog)}</TableCell>
            <TableCell>{displayBool(dog.isDead)}</TableCell>
            <TableCell>{dogAge(dog)}</TableCell>
            <TableCell>{dog.breed}</TableCell>
            <TableCell>{dog.crossbreed}</TableCell>
            <TableCell onClick={onClientClick}>
                {clientFullName(owner)}
            </TableCell>
        </TableRow>
    );
}

export function DogsTable() {
    const history = useHistory();
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
