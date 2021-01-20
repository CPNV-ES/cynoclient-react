import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {useParams} from "react-router-dom";
import {useDog} from "../../common/hook/Dogs.hook";
import {ClientTakeService} from "../../common/resource/ClientTakeService.resource";
import {useClientTakeService} from "../../common/hook/ClientTakeServices.hook";

function DogClientTakeServiceRow(clientTakeServiceBase: ClientTakeService) {
    const {data: clientTakeService} = useClientTakeService(clientTakeServiceBase.id);

    return (
        <TableRow hover key={clientTakeServiceBase.id}>
            <TableCell>{clientTakeService?.service.moment}</TableCell>
            <TableCell>{clientTakeService?.service.type}</TableCell>
            <TableCell>{clientTakeService?.service.duration}</TableCell>
            <TableCell>{clientTakeService?.isPaid}</TableCell>
        </TableRow>
    );
}

export function DogServicesTable() {
    const route = useParams<{ dogId: string }>();
    const {data: dog} = useDog(Number(route.dogId));
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Durée</TableCell>
                        <TableCell>Payé</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dog?.clients_take_services?.map(
                        (clientTakeService) => DogClientTakeServiceRow(
                            clientTakeService
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
