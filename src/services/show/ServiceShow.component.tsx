import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Redirect, useHistory, useParams} from "react-router-dom";
import React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDeleteService, useService} from "../../common/hook/Services.hook";
import {displayServiceDuration} from "../../common/utils/Service.utils";
import IconButton from "@material-ui/core/IconButton";

export function ServiceShowComponent() {
    const route = useParams<{ serviceId: string }>();
    const {data: service} = useService(Number(route.serviceId));
    const styles = useStyles();
    const history = useHistory();
    const [deleteService] = useDeleteService();

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
                            <IconButton className={styles.edit} onClick={() => history.push(`/services/${service?.id}/edit`)} ><EditIcon/></IconButton>
                        </Grid>
                        <Grid item xs={6}>
                            <IconButton className={styles.delete} onClick={async () => {await deleteService(service) }} ><DeleteIcon/></IconButton>
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
        delete: {
            backgroundColor: theme.palette.error.main,
            "&:hover" : {
                backgroundColor: theme.palette.error.dark,
            }
        },
        edit: {
            marginRight: 20,
            backgroundColor: theme.palette.primary.main,
            "&:hover" : {
                backgroundColor: theme.palette.primary.dark,
            }
        },
    })
);
