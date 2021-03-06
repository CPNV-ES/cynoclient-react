import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link, Redirect, useHistory, useParams} from "react-router-dom";
import {useDog} from "../../common/hook/Dogs.hook";
import React, {useState} from "react";
import { Grid, IconButton, Paper} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from '@material-ui/icons/Add';
import {displayDogSex, displayDogSterilization, dogAge} from "../../common/utils/Dog.utils";
import {DogServicesTable} from "./DogServicesTable.component";
import {clientFullName} from "../../common/utils/Client.utils";
import {Client} from "../../common/resource/Client.resource";
import {Breed} from "../../common/resource/Breed.resource";
import {DogDiseaseFormComponent} from "./DogDiseaseForm.component";
import {DogDiseasesTable} from "./DogDiseasesTable.component";
import {AiOutlineArrowRight} from "react-icons/all";
import {IconContext} from "react-icons";

export function DogShowComponent() {
    const route = useParams<{ dogId: string }>();
    const {data: dog} = useDog(Number(route.dogId));
    const styles = useStyles();
    const history = useHistory();
    const [displayDiseaseForm, setDisplayDiseaseForm] = useState<boolean>(false);

    if (!dog) {
        return <Redirect to={"/dogs"}/>
    }

    const breed: Breed = dog.breed;
    const crossbreed: Breed = dog.crossbreed;
    const owner: Client = dog.client;

    return (
        <div className={styles.wrapper}>
            <Paper className={styles.paper}>
                <Grid container justify={"center"}>
                    <Grid item xs={12} md={9}>
                        <p>{dog.noun}, {displayDogSex(dog)}</p>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={3}>
                        <Grid item xs={6}>
                            <IconButton className={styles.edit}
                                        onClick={() => history.push(`/dogs/${dog?.id}/edit`)}><EditIcon/></IconButton>
                        </Grid>

                        <Grid item xs={6}>
                            <IconButton className={styles.delete} onClick={() => alert("NOT IMPLEMENTED")}><DeleteIcon/></IconButton>
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
                        <p>
                            Propriétaire : {clientFullName(owner)}&nbsp;
                            <Link to={`/clients/${owner.id}/show`}>
                                <IconContext.Provider value={{color: 'white', size: '1.2em'}} >
                                    <AiOutlineArrowRight/>
                                </IconContext.Provider>
                            </Link>
                        </p>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={12}>
                        <Grid item xs={9}>
                            <h2>Maladies</h2>
                            {displayDiseaseForm && <DogDiseaseFormComponent/>}
                        </Grid>

                        <Grid item xs={3}>
                            <IconButton className={styles.edit}
                                        onClick={() => setDisplayDiseaseForm(true)}><AddIcon/></IconButton>
                        </Grid>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={12}>
                        <DogDiseasesTable/>
                    </Grid>
                    <Grid container item direction={"row"} justify={"space-between"} xs={12} md={12}>
                        <Grid item xs={9}>
                            <h2>Services</h2>
                        </Grid>

                        <Grid item justify={"flex-end"} xs={3}>
                            {/*
                                Button to add service goes here
                            */}
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
        delete: {
            backgroundColor: theme.palette.error.main,
            "&:hover" : {
                backgroundColor: theme.palette.error.dark,
            }
        },
        edit: {
            marginRight: 20,
            backgroundColor: theme.palette.primary.main,
            "&:hover" : {
                backgroundColor: theme.palette.primary.dark,
            }
        }
    })
);
