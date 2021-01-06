import React from "react";
import {useParams} from "react-router-dom";
import {useDog, useEditDog} from "../../common/hook/Dogs.hook";
import {useDiseases} from "../../common/hook/Diseases.hook";
import {Field, Formik} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {Button, createStyles, Grid, Theme} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "formik-material-ui";
import {Disease} from "../../common/resource/Diseases.ressource";

export function DogDiseaseFormComponent() {
    const route = useParams<{ dogId: string }>();
    const {data: dog} = useDog(Number(route.dogId));
    const {data: diseases} = useDiseases();
    const [editDog] = useEditDog();
    const styles = useStyles();
    return (
        <Formik initialValues={{disease: null}}
                onSubmit={(values) => {
                    if (values.disease != null) {
                        // @ts-ignore
                        dog.noun = "Luna2"
                        // @ts-ignore
                        dog?.diseases.push(values.disease)
                        console.log(dog);
                        // @ts-ignore
                        return editDog(dog);
                    }
                }}>
            {({submitForm, isSubmitting, setFieldValue}) => (
                <div className={styles.wrapper}>
                    <form>
                        <Grid item xs={9} md={9} className={styles.fieldRow}>
                            <Autocomplete
                                options={diseases?.toJS() || [{noun: ""}] }
                                getOptionLabel={disease => `${disease.noun}`}
                                getOptionSelected={disease => disease}
                                defaultValue={ null }
                                renderInput={params => (
                                    <Field component={TextField} {...params} name="disease_temp" label="maladie"/>
                                )}
                                onChange={(event, value: Disease) => {
                                    setFieldValue("disease", value || null)
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} md={3} className={styles.fieldRow}>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}>
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </div>
            )}
        </Formik>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fieldRow: {
            paddingBottom: theme.spacing(2)
        },
        wrapper: {
            padding: theme.spacing(2),
            minWidth: 300,
        }
    })
);
