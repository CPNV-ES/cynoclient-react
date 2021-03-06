import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Theme,
    createStyles
} from "@material-ui/core";
import React from "react";
import {Dog} from "../../common/resource/Dog.resource";
import {useParams} from "react-router-dom";
import {useDisease} from "../../common/hook/Diseases.hook";
import {displayDogSex, dogAge} from "../../common/utils/Dog.utils";
import {displayBool} from "../../common/utils/Data.utils";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

function DiseaseDogsRow(dog: Dog, onClick: () => void) {
    const styles = useStyles();
    return (
        <TableRow hover key={dog.id} onClick={onClick} className={styles.fieldRow}>
            <TableCell><b>{dog.noun}</b></TableCell>
            <TableCell>{displayDogSex(dog)}</TableCell>
            <TableCell>{displayBool(dog.isDead)}</TableCell>
            <TableCell>{dogAge(dog)} ans</TableCell>
        </TableRow>
    );
}

export function DiseasesDogsTable() {
    const history = useHistory();
    const route = useParams<{ diseaseId: string }>();
    const {data: disease} = useDisease(Number(route.diseaseId));
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Nom</TableCell>
                        <TableCell>Sexe</TableCell>
                        <TableCell>Mort ?</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {disease?.dogs?.map((dog) => DiseaseDogsRow(
                        dog,
                        () => history.push(`/dogs/${dog.id}/show`)
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fieldRow: {
            cursor: 'pointer',
        },
    })
);