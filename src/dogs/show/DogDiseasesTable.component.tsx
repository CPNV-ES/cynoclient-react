import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {Disease} from "../../common/resource/Diseases.ressource";
import {useParams} from "react-router-dom";
import {useDog} from "../../common/hook/Dogs.hook";

function DogDiseaseRow(disease: Disease) {
    return (
        <TableRow hover key={disease.id}>
            <TableCell>{disease.noun}</TableCell>
        </TableRow>
    );
}

export function DogDiseasesTable() {
    const route = useParams<{ dogId: string }>();
    const {data: dog} = useDog(Number(route.dogId));
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {dog?.diseases?.map((disease) => DogDiseaseRow(
                        disease
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
