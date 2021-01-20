import React, {useState} from "react";
import {Redirect, useHistory, useParams} from "react-router-dom";
import {useClient, useDeleteClient} from "../../common/hook/Clients.hook";
import {createStyles, Grid, IconButton, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {displayClientSex} from "../../common/utils/Client.utils";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Alert, AlertTitle} from "@material-ui/lab";

export function ClientsShowComponent() {
    const styles = useStyles();
    const route = useParams<{ clientId: string }>();
    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);
    const {mutateAsync: deleteClient} = useDeleteClient();

    const {data: client} = useClient(Number(route.clientId));

    if (!client) {
        return <Redirect to={"/clients"}/>
    }

    return (
        <div className={styles.wrapper}>
            {
                showAlert && (
                    <Alert  variant="outlined" severity="error">
                        <AlertTitle>Impossible d'effacer votre client</AlertTitle>
                        Celui-ci possède des chiens !
                    </Alert>
                )
            }
            <Paper className={styles.paper}>
                <Grid container justify={"center"}>
                    <Grid item xs={12} md={9}>
                        <p>{client.firstname} {client.lastname}</p>
                    </Grid>

                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={3}>
                        <Grid item xs={6}>
                        </Grid>
                        <Grid item xs={6}>
                            <IconButton className={styles.edit} onClick={() => history.push(`/clients/${client?.id}/edit`)} ><EditIcon/></IconButton>
                            <IconButton className={styles.delete} onClick={async () => {
                                try {
                                    await deleteClient(client)
                                }
                                catch (err){
                                    // <Alert severity="error">Votre client possède des chiens !</Alert>
                                    setShowAlert(true);
                                    // alert("Votre client possède des chiens !");
                                }
                            }} ><DeleteIcon/></IconButton>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>Sex: {displayClientSex(client)}</p>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>Email: {client.email}</p>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>Téléphone: {client.phone}</p>
                    </Grid>

                    <Grid item xs={12}>
                        <p>Rue: {client.street}</p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
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
        }
    })
);

