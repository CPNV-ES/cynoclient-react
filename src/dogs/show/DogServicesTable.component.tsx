import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {useParams} from "react-router-dom";
import {useDog} from "../../common/hook/Dogs.hook";
import {ClientTakeService} from "../../common/resource/ClientTakeService.resource";

function DogClientTakeServiceRow(service: ClientTakeService) {
    return (
        <TableRow hover key={service.id}>
            <TableCell>moment</TableCell>
            <TableCell>type</TableCell>
            <TableCell>duration</TableCell>
            <TableCell>{service.isPaid}</TableCell>
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
                    {dog?.clients_take_services?.map((clientTakeService) => DogClientTakeServiceRow(
                        clientTakeService
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
