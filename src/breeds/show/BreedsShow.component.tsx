import {Redirect, useParams} from "react-router-dom";
import {useBreed} from "../../common/hook/Breeds.hook";
import React from "react";
import {
    createStyles,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";

export function BreedsShowComponent() {
    const styles = useStyles();
    const {breedId} = useParams<{ breedId: string }>();
    const {data: breed} = useBreed(Number(breedId));

    if (!breed) {
        return <Redirect to={"/breeds"}/>
    }

    const generateMeasurementTableRow = (label: string, property: string) => {
        const untypedBreed = breed as any

        const getMeasurementBySex = (sex: string): string => {
            return untypedBreed[`min_${property}_${sex}`] + " - " + untypedBreed[`max_${property}_${sex}`]
        }

        return (
            <TableRow>
                <TableCell>{label}</TableCell>
                <TableCell>{getMeasurementBySex("male")}</TableCell>
                <TableCell>{getMeasurementBySex("female")}</TableCell>
            </TableRow>
        )
    }

    return (
        <Grid container direction={"column"} justify={"space-between"} spacing={10}>
            <Grid item>
                <Paper>
                    <Grid item container spacing={2}>
                        <Grid item container xs={12} sm={2}>
                            <Grid item>
                                <img src={breed.picture || ""} className={styles.picture}/>
                            </Grid>
                        </Grid>
                        <Grid container item direction={"column"} xs={12} sm={10}>
                            <Grid item><Typography variant={"h1"}>{breed.noun}</Typography></Grid>
                            <Grid item><a href={breed.link} target={"_blank"}>Details</a></Grid>
                            <Grid item><p>{breed.category?.noun}</p></Grid>
                        </Grid>
                        <Grid container item direction={"column"} xs={12} md={6}>
                            <Grid item><p>{breed.morphotype}</p></Grid>
                            <Grid item><p>{breed.classification}</p></Grid>
                            <Grid item><p>{breed.life_expectancy}</p></Grid>
                        </Grid>
                        <Grid container item xs={12} md={6}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell/>
                                        <TableCell>Male</TableCell>
                                        <TableCell>Female</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {generateMeasurementTableRow("Taille", "size")}
                                    {generateMeasurementTableRow("Poids", "weight")}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                <Paper>
                    <p>DOG LIST</p>
                </Paper>
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        picture:
            {
                width: "100%",
                backgroundColor: theme.palette.grey["100"]
            },
    })
);

