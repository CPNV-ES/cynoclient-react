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
import {useHistory} from "react-router-dom";

export function ServiceRow(props: { service: Service, onClick: () => void }) {
    return (
        <TableRow hover onClick={props.onClick}>
            <TableCell>{props.service.moment}</TableCell>
            <TableCell>{displayServiceDuration(props.service)}</TableCell>
            <TableCell>{props.service.type}</TableCell>
            <TableCell>{props.service.description ? props.service.description : "-"}</TableCell>
            <TableCell>{props.service.street ? props.service.street : "-"}</TableCell>
        </TableRow>
    );
}

export function ServicesTable() {
    const {data: services} = useServices();
    const history = useHistory();

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
                    {services?.map((service: Service) => <ServiceRow key={service.id} service={service}
                                                                     onClick={() => history.push(`/services/${service.id}/show`)}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
