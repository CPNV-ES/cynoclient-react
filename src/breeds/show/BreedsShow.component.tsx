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
import {BiFemaleSign, BiMaleSign} from "react-icons/bi";
import {FaWeight, GiBodyHeight} from "react-icons/all";

export function BreedsShowComponent() {
    const styles = useStyles();
    const {breedId} = useParams<{ breedId: string }>();
    const {data: breed} = useBreed(Number(breedId));

    if (!breed) {
        return <Redirect to={"/breeds"}/>
    }

    const generateMeasurementTableRow = (label: JSX.Element, property: string, unit: string) => {
        const untypedBreed = breed as any

        const getMeasurementBySex = (sex: string): string => {
            return untypedBreed[`min_${property}_${sex}`] + " - " + untypedBreed[`max_${property}_${sex}`] + " " + unit
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
        <Paper className={styles.wrapper}>
            <Grid item container spacing={2}>
                <Grid item container xs={12} sm={2}>
                    <Grid item>
                        <img src={breed.picture || ""} alt={""} className={styles.picture}/>
                    </Grid>
                </Grid>
                <Grid container item direction={"column"} xs={12} sm={10}>
                    <Grid item><Typography variant={"h3"}>{breed.noun}</Typography></Grid>
                    <Grid item><a href={breed.link} target={"_blank"} rel="noreferrer">Details</a></Grid>
                    <Grid item><p>{breed.category?.noun}</p></Grid>
                </Grid>
                <Grid container item direction={"column"} xs={12} md={6}>
                    <Grid item><p><strong>Morphologie:</strong> {breed.morphotype}</p></Grid>
                    <Grid item><p><strong>Classification:</strong> {breed.classification}</p></Grid>
                    <Grid item><p><strong>Age:</strong> {breed.life_expectancy}</p></Grid>
                </Grid>
                <Grid container item xs={12} md={6}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell/>
                                <TableCell><BiMaleSign/></TableCell>
                                <TableCell><BiFemaleSign/></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {generateMeasurementTableRow(<GiBodyHeight/>, "size", "cm")}
                            {generateMeasurementTableRow(<FaWeight/>, "weight", "kg")}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Paper>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            marginTop: theme.spacing(2),
            padding: theme.spacing(2)
        },
        picture:
            {
                width: "100%",
                backgroundColor: theme.palette.grey["100"]
            },
    })
);

