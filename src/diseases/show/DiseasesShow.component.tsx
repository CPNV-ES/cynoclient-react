import {useDisease} from "../../common/hook/Diseases.hook";
import {createStyles, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {displayBool} from "../../common/utils/Data.utils";
import {Redirect, useParams} from "react-router-dom";

export function DiseaseShowComponent() {
    const styles = useStyles();
    const route = useParams<{ diseaseId: string }>();

    const {data: disease} = useDisease(Number(route.diseaseId));

    if (!disease) {
        return <Redirect to={"/diseases"}/>
    }

    return (
        <div className={styles.wrapper} key={disease.id}>
            <Paper className={styles.paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <b>{disease.noun}</b>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} className={styles.row}>
                        <Grid item xs={1}>Description :</Grid>
                        <Grid item xs>{disease.description}</Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} className={styles.row}>
                        <Grid item xs={1}>Symptômes :</Grid>
                        <Grid item xs>{disease.symptoms}</Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} className={styles.row}>
                        <Grid item xs={1}>Prévention :</Grid>
                        <Grid item xs>{disease.preventive}</Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} className={styles.row}>
                        <Grid item xs={1}>Soins :</Grid>
                        <Grid item xs>{disease.curative}</Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} className={styles.row}>
                        <Grid item xs={1}>Soins :</Grid>
                        <Grid item xs>{disease.curative}</Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} className={styles.row}>
                        <Grid item xs={1}>Vacinable ? :</Grid>
                        <Grid item xs>{displayBool(disease.isVaccinable)}</Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} className={styles.row}>
                        <Grid item xs={1}>Transmissible ? :</Grid>
                        <Grid item xs>{displayBool(disease.isZoonosis)}</Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            padding: theme.spacing(1),
            minWidth: 300,
        },
        paper: {
            padding: theme.spacing(2),
        },
        row: {
            padding: theme.spacing(1),
            whiteSpace: "pre-wrap"
        }
    })
);
