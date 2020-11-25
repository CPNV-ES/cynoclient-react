import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {Table, TableCell} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import {Client} from "../common/resource/Client.resource";

export function ClientsTable() {
	clients: Client[]

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Firstname</TableCell>
						<TableCell>Lastname</TableCell>
						<TableCell>Sex</TableCell>
						<TableCell>Phone</TableCell>
					</TableRow>
				</TableHead>
			</Table>
		</TableContainer>
	);
}
