import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Redirect, useHistory, useParams} from "react-router-dom";
import React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {useService} from "../../common/hook/Services.hook";
import {displayServiceDuration} from "../../common/utils/Service.utils";

export function ServiceShowComponent() {
    const route = useParams<{ serviceId: string }>();
    const {data: service} = useService(Number(route.serviceId));
    const styles = useStyles();
    const history = useHistory();

    if (!service) {
        return <Redirect to={"/services"}/>
    }

    return (
        <div className={styles.wrapper}>
            <Paper className={styles.paper}>
                <Grid container justify={"center"}>
                    <Grid item xs={12} md={9}>
                        <p>{service.type} d'une durée de {displayServiceDuration(service)} le {service.moment}</p>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={3}>
                        <Grid item xs={6}>
                            <Button variant={"contained"} color={"primary"}
                                    startIcon={<EditIcon/>}
                                    onClick={() => history.push(`/services/${service?.id}/edit`)}>Modifier</Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button variant={"contained"} color={"secondary"}
                                    startIcon={<DeleteIcon/>}
                                    onClick={() => alert("NOT IMPLEMENTED")}>Supprimer</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p>Description : {service.description ? service.description : "-"}</p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p>Adresse : {service.street ? service.street : "-"}</p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            padding: theme.spacing(2),
            minWidth: 300,
        },
        paper: {
            padding: theme.spacing(2),
        },
    })
);
