import {useDiseases} from "../../common/hook/Diseases.hook";
import {Table, TableCell, TableContainer, TableHead, TableRow, TableBody} from "@material-ui/core";
import React from "react";
import {Disease} from "../../common/resource/Diseases.ressource";
import {displayBool} from "../../common/utils/Data.utils";
import {useHistory} from "react-router-dom";

export function DiseaseRow(disease: Disease, onClick: () => void) {
    const history = useHistory();

    return (
        <TableRow hover key={disease.id} onClick={onClick}>
            <TableCell>{disease.noun}</TableCell>
            <TableCell>{disease.description}</TableCell>
            <TableCell>{disease.symptoms}</TableCell>
            <TableCell>{disease.preventive}</TableCell>
            <TableCell>{disease.curative}</TableCell>
            <TableCell>{displayBool(disease.isVaccinable)}</TableCell>
            <TableCell>{displayBool(disease.isZoonosis)}</TableCell>
        </TableRow>
    );
}

export function DiseasesTable() {
    const history = useHistory();
    const {data: diseases} = useDiseases();
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Symptomes</TableCell>
                        <TableCell>Prevention</TableCell>
                        <TableCell>Soin</TableCell>
                        <TableCell>Vaccinable ?</TableCell>
                        <TableCell>Zoonose ?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {diseases?.map((disease) => DiseaseRow(
                        disease,
                        () => history.push(`/dogs/${disease.id}`))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
