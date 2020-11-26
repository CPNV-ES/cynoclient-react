import React from "react";
import {Redirect, useParams} from "react-router-dom";
import {useClient} from "../../common/hook/Clients.hook";
import {Button, createStyles, Grid, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export function ClientsDetailComponent() {
    const styles = useStyles();
    const route = useParams<{ clientId: string }>();

    const {data: client} = useClient(Number(route.clientId));

    if (!client) {
        return <Redirect to={"/clients"}/>
    }

    return (
        <div className={styles.wrapper}>
        <Grid container justify={"center"}>
            <Grid item xs={12} md={9}>
                <p>{client.firstname} {client.lastname}</p>
            </Grid>

            <Grid container item direction={"row"} justify={"space-between"} xs={12} md={3}>
                <Grid item xs={6}>
                    <Button variant={"contained"} color={"primary"}>Modifier</Button>
                </Grid>

                <Grid item xs={6}>
                    <Button variant={"contained"} color={"secondary"}>Supprimer</Button>
                </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
                <p>{client.isFemale}</p>
            </Grid>

            <Grid item xs={12} md={4}>
                <p>{client.email}</p>
            </Grid>

            <Grid item xs={12} md={4}>
                <p>{client.phone}</p>
            </Grid>

            <Grid item xs={12} >
                <p>{client.street}</p>
            </Grid>
        </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            padding: theme.spacing(2),
            minWidth: 300,
        }
    })
);

