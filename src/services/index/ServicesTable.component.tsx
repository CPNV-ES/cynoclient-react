import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {Table, TableCell} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import TableBody from "@material-ui/core/TableBody";
import {useServices} from "../../common/hook/Services.hook";
import {Service} from "../../common/resource/Service.resource";
import {displayServiceDuration} from "../../common/utils/Service.utils";

export function ServiceRow(service: Service) {
    return (
        <TableRow hover key={service.id}>
            <TableCell>{service.moment}</TableCell>
            <TableCell>{displayServiceDuration(service)}</TableCell>
            <TableCell>{service.type}</TableCell>
            <TableCell>{service.description ? service.description : "-"}</TableCell>
            <TableCell>{service.street ? service.street : "-"}</TableCell>
        </TableRow>
    );
}

export function ServicesTable() {
    const {data: services} = useServices();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Durée</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Adresse</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services?.map((service) => ServiceRow(service))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
