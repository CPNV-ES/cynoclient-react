import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {createStyles, Table, TableCell, Theme} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import {useClients} from "../../common/hook/Clients.hook";
import TableBody from "@material-ui/core/TableBody";
import {Client} from "../../common/resource/Client.resource";
import {displayClientSex} from "../../common/utils/Client.utils";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

export function ClientRow(props:{client: Client, onClick: () => void}) {
    const styles = useStyles();
    return (
        <TableRow hover onClick={props.onClick} className={styles.fieldRow}>
            <TableCell>{props.client.firstname}</TableCell>
            <TableCell>{props.client.lastname}</TableCell>
            <TableCell>{displayClientSex(props.client)}</TableCell>
            <TableCell>{props.client.phone}</TableCell>
        </TableRow>
    );
}

export function ClientsTable() {
    const history = useHistory();
    const {data: clients} = useClients();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Prénom</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Sexe</TableCell>
                        <TableCell>Téléphone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients?.map((client) => <ClientRow client={client} onClick={() => history.push(`/clients/${client.id}/show`)} key={client.id} /> )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fieldRow: {
            cursor: 'pointer',
        },
    })
);
