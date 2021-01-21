import {useDiseases} from "../../common/hook/Diseases.hook";
import {Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, Theme, createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {Disease} from "../../common/resource/Diseases.ressource";
import {useHistory} from "react-router-dom";
import {displayBool} from "../../common/utils/Data.utils";

export function DiseaseRow(disease: Disease, onClick: () => void) {
    const styles = useStyles();
    return (
        <TableRow hover key={disease.id} onClick={onClick} className={styles.fieldRow}>
            <TableCell className={styles.column}>{disease.noun}</TableCell>
            <TableCell className={styles.column}>{disease.symptoms}</TableCell>
            <TableCell className={styles.column}>{displayBool(disease.isVaccinable)}</TableCell>
            <TableCell className={styles.column}>{displayBool(disease.isZoonosis)}</TableCell>
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
                        <TableCell>Vaccinable?</TableCell>
                        <TableCell>Transmissible?</TableCell>
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        column: {
            whiteSpace: "pre-wrap",
            verticalAlign: "top"
        },
        fieldRow: {
            cursor: 'pointer',
        },
    })
);