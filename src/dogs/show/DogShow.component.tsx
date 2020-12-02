import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link, Redirect, useHistory, useParams} from "react-router-dom";
import {useDog} from "../../common/hook/Dogs.hook";
import React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {displayDogSex, displayDogSterilization, dogAge} from "../../common/utils/Dog.utils";

export function DogShowComponent() {
    const styles = useStyles();
    const route = useParams<{ dogId: string }>();
    const history = useHistory();

    const {data: dog} = useDog(Number(route.dogId));

    if (!dog) {
        return <Redirect to={"/dogs"}/>
    }

    return (
        <div className={styles.wrapper}>
            <Paper className={styles.paper}>
                <Grid container justify={"center"}>
                    <Grid item xs={12} md={9}>
                        <p>{dog.noun}, {displayDogSex(dog)}</p>
                    </Grid>

                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={3}>
                        <Grid item xs={6}>
                            <Button variant={"contained"} color={"primary"}
                                    startIcon={<EditIcon/>}
                                    onClick={() => history.push(`/dogs/${dog?.id}/edit`)}>Modifier</Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button variant={"contained"} color={"secondary"}
                                    startIcon={<DeleteIcon/>}
                                    onClick={() => alert("NOT IMPLEMENTED")}>Supprimer</Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <p>{dog.birthdate} ({!dog.isDead ? `${dogAge(dog)} ans` : "mort"})</p>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <p>{displayDogSterilization(dog)}</p>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <p>{displayDogSterilization(dog)}</p>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>{dog.color}</p>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>Espèce : {dog.breed}</p>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>Croisement : {dog.crossbreed}</p>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <p>Propriétaire
                            : <Link to={`/clients/${dog.id_client}/show`}>
                                {dog.id_client}
                            </Link>
                        </p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            padding: theme.spacing(2),
            minWidth: 300,
        },
        paper: {
            padding: theme.spacing(2),
        },
    })
);
