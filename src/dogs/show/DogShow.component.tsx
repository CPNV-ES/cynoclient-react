import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link, Redirect, useHistory, useParams} from "react-router-dom";
import {useDog} from "../../common/hook/Dogs.hook";
import React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from '@material-ui/icons/Add';
import {displayDogSex, displayDogSterilization, dogAge} from "../../common/utils/Dog.utils";
import {DogServicesTable} from "./DogServicesTable.component";
import {useClient} from "../../common/hook/Clients.hook";
import {Dog} from "../../common/resource/Dog.resource";
import {clientFullName} from "../../common/utils/Client.utils";
import {useBreed} from "../../common/hook/Breeds.hook";

export function DogShowComponent() {
    const route = useParams<{ dogId: string }>();
    const {data: dog} = useDog(Number(route.dogId));
    if (!dog) {
        return <Redirect to={"/dogs"}/>
    }

    // workaround tu be able use useClient(dog.id_client), which requires a non-null dog
    return DogShowContentComponent(dog);
}

function DogShowContentComponent(dog: Dog) {
    const styles = useStyles();
    const history = useHistory();
    const {data: owner} = useClient(dog.id_client);
    const {data: breed} = useBreed(dog.breed);
    const {data: crossbreed} = useBreed(dog.crossbreed);

    // TODO display diseases list
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
                    <Grid item xs={12} md={4}>
                        <p>{dog.color}</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <p>Espèce : {breed?.noun}</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <p>Croisement : {crossbreed?.noun}</p>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <p>Propriétaire
                            : <Link to={`/clients/${dog.id_client}/show`}>
                                {clientFullName(owner)}
                            </Link>
                        </p>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={12}>
                        <Grid item xs={9}>
                            <h2>Maladies</h2>
                        </Grid>

                        <Grid item justify={"flex-end"} xs={3}>
                            <Button variant={"contained"} color={"primary"}
                                    startIcon={<AddIcon/>}
                                    onClick={() => alert("NOT IMPLEMENTED")}>Ajouter</Button>
                        </Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={12}>
                        <Grid item xs={9}>
                            <h2>Services</h2>
                        </Grid>

                        <Grid item justify={"flex-end"} xs={3}>
                            <Button variant={"contained"} color={"primary"}
                                    startIcon={<AddIcon/>}
                                    onClick={() => alert("NOT IMPLEMENTED")}>Ajouter</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <DogServicesTable/>
                        </Grid>
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
