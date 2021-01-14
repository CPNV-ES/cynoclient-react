import {useDisease} from "../../common/hook/Diseases.hook";
import {createStyles, Paper, Grid, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {displayBool} from "../../common/utils/Data.utils";
import {useHistory, useParams, Redirect} from "react-router-dom";

export function DiseaseShowComponent() {
    const styles = useStyles();
    const route = useParams<{ diseaseId: string }>();
    const history = useHistory();

    const {data: disease} = useDisease(Number(route.diseaseId));

    if (!disease) {
        return <Redirect to={"/diseases"}/>
    }

    return (
        <div className={styles.wrapper} key={disease.id}>
            <Paper className={styles.paper}>
                <Grid container>
                    <Grid item xs={12} >
                        <b>{disease.noun}</b>
                    </Grid>
                    <Grid container item xs={12} className={styles.row}>
                        <Grid item xs={1}><b>Vacinable ? :</b> </Grid>
                        <Grid item>{displayBool(disease.isVaccinable)}</Grid>
                    </Grid>
                    <Grid container item xs={12} className={styles.row}>
                        <Grid item xs={1}><b>Transmissible ? :</b> </Grid>
                        <Grid item>{displayBool(disease.isZoonosis)}</Grid>
                    </Grid>
                    <Grid container item alignContent="flex-start" xs={6} className={styles.row}>
                        <Grid item xs={12}><b>Description :</b> </Grid>
                        <Grid item>{disease.description}</Grid>
                    </Grid>
                    <Grid container item alignContent="flex-start" xs={6} className={styles.row}>
                        <Grid item xs={12}><b>Symptômes :</b> </Grid>
                        <Grid item>{disease.symptoms}</Grid>
                    </Grid>
                    <Grid container item alignContent="flex-start" xs={6} className={styles.row}>
                        <Grid item xs={12}><b>Prévention :</b> </Grid>
                        <Grid item>{disease.preventive}</Grid>
                    </Grid>
                    <Grid container item alignContent="flex-start" xs={6} className={styles.row}>
                        <Grid item xs={12}><b>Soins :</b> </Grid>
                        <Grid item>{disease.curative}</Grid>
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
            whiteSpace: "pre-wrap",
        }
    })
);
