import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Redirect, useHistory, useParams} from "react-router-dom";
import {useDog} from "../../common/hook/Dogs.hook";
import React from "react";

export function DogShowComponent() {
	const styles = useStyles();
	const route = useParams<{ dogId: string }>();
	const history = useHistory();

	const {data: dog} = useDog(Number(route.dogId));

	if (!dog) {
		return <Redirect to={"/dogs"}/>
	}

	return (
		<div>{dog.noun}</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({})
);
