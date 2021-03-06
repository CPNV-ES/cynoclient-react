import React from "react";
import {useParams} from "react-router-dom";
import {useDog, useEditDog} from "../../common/hook/Dogs.hook";
import {useDiseases} from "../../common/hook/Diseases.hook";
import {Field, Formik} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Grid, IconButton, Theme} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "formik-material-ui";
import {Disease} from "../../common/resource/Diseases.ressource";
import SendIcon from "@material-ui/icons/Send";

export function DogDiseaseFormComponent() {
    const route = useParams<{ dogId: string }>();
    const {data: dog} = useDog(Number(route.dogId));
    const {data: diseases} = useDiseases();
    const styles = useStyles();
    const {mutateAsync: editDog} = useEditDog()

    return (
        <Formik initialValues={{disease: null}}
                onSubmit={(values: { disease: Disease | null }) => {
                    if (values.disease != null && dog) {
                        dog.diseases.push(values.disease)
                        return editDog(dog);
                    }
                }}>
            {({submitForm, isSubmitting, setFieldValue}) => (
                <div className={styles.wrapper}>
                    <form>
                        <Grid item xs={9} md={9} className={styles.fieldRow}>
                            <Autocomplete
                                options={diseases?.toJS() || [{noun: ""}]}
                                getOptionLabel={disease => `${disease.noun}`}
                                getOptionSelected={disease => disease}
                                defaultValue={null}
                                renderInput={params => (
                                    <Field component={TextField} {...params} name="disease_temp" label="maladie"/>
                                )}
                                onChange={(event, value: Disease) => {
                                    setFieldValue("disease", value || null)
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} md={3} className={styles.fieldRow}>
                            <IconButton
                                className={styles.send}
                                disabled={isSubmitting}
                                onClick={submitForm}>
                                <SendIcon/>
                            </IconButton>
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
        },
        send: {
            backgroundColor: theme.palette.primary.main,
            "&:hover" : {
                backgroundColor: theme.palette.primary.dark,
            }
        }
    })
);
