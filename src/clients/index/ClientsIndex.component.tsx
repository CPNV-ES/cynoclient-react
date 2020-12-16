import React from "react";
import {ClientsTable} from "./ClientsTable.component";
import {Button, createStyles, Grid, Theme} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';
export function ClientsIndexComponent() {
    const history = useHistory();
    const styles = useStyles();
    return (
        <div>
            <h1>
                Clients <IconButton className={styles.createButton} onClick={() => history.push(`/clients/create`)} ><AddCircleOutlineIcon/></IconButton>
            </h1>
            <ClientsTable/>
        </div>
    );
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        createButton: {
            marginLeft: theme.spacing(2)
        },
    })
);

