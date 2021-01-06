import {useDiseases} from "../../common/hook/Diseases.hook";
import {Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper} from "@material-ui/core";
import React from "react";
import {Disease} from "../../common/resource/Diseases.ressource";
import {useHistory} from "react-router-dom";

export function DiseaseRow(disease: Disease, onClick: () => void) {
    return (
        <TableRow hover key={disease.id} onClick={onClick}>
            <TableCell>{disease.noun}</TableCell>
            <TableCell>{disease.symptoms}</TableCell>
        </TableRow>
    );
}

export function DiseasesTable() {
    const history = useHistory();
    const {data: diseases} = useDiseases();
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom</TableCell>
                        <TableCell>Symptomes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {diseases?.map((disease) => DiseaseRow(
                        disease,
                        () => history.push(`/diseases/${disease.id}/show`))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
