import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {Table, TableCell} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import {useClients} from "../../common/hook/Clients.hook";
import TableBody from "@material-ui/core/TableBody";
import {Client} from "../../common/resource/Client.resource";
import {displayClientSex} from "../../common/utils/Client.utils";
import {useHistory} from "react-router-dom";

export function ClientRow(client: Client, onClick: () => void) {
    return (
        <TableRow hover key={client.id} onClick={onClick}>
            <TableCell>{client.firstname}</TableCell>
            <TableCell>{client.lastname}</TableCell>
            <TableCell>{displayClientSex(client)}</TableCell>
            <TableCell>{client.phone}</TableCell>
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
                    {clients?.map((client) => ClientRow(
                        client,
                        () => history.push(`/clients/${client.id}/show`))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
