import React from 'react';
import {Button, createStyles, Grid, InputLabel, MenuItem, Theme} from "@material-ui/core";
import {Select, TextField} from 'formik-material-ui';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect, useHistory, useParams} from "react-router-dom";
import {useClient} from "../common/hook/Clients.hook";

export function FormComponent() {
    const history = useHistory();
    const route = useParams<{ clientId: string }>();
    const styles = useStyles();
    const {data: client} = useClient(Number(route.clientId))


    return (
        <Formik
            initialValues={{
                firstname: client ? client.firstname : '',
                lastname: client ? client.lastname : '',
                phone: client ? client.phone : '',
                email: client ? client.email : '',
                female: client ? client.isFemale.toString() : 'true',
                street: client ? client.street : '',
                locality: client ? client.id_locality : '', // TODO get to show full locality
            }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .min(2)
                    .max(120, 'Trop long!')
                    .required(),
                lastname: Yup.string()
                    .min(2)
                    .max(120, 'Trop long!')
                    .required(),
                email: Yup.string()
                    .email('email requis')
                    .required(),
                female: Yup.boolean()
                    .required(),
                phone: Yup.string()
                    .phone("IN")
                    .max(15, "Vérifiez votre numéro de téléphone")
                    .required(""),
                street: Yup.string()
                    .min(2)
                    .max(255, 'Trop long!')
                    .required("le numéro de téléphone doit contenir la région (+41, +33, ...)"),
                // locality: Yup.number()
                // .required('Required'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
            }}
        >
            {({submitForm, isSubmitting}) => (
                <div className={styles.wrapper}>
                    <h1 className={styles.fieldRow}>
                        Create Client
                    </h1>
                    <form>
                        <Grid container justify="center">
                            <Grid item xs={12} className={styles.fieldRow}>
                                <InputLabel>genre</InputLabel>
                                <Field
                                    component={Select}
                                    name="female"
                                    label="female">
                                    <MenuItem value="false">Homme</MenuItem>
                                    <MenuItem value="true">Femme</MenuItem>
                                </Field>
                            </Grid>
                            <Grid item xs={12} md={6} className={styles.fieldRow}>
                                <Field
                                    component={TextField}
                                    name="firstname"
                                    label="firstname"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} className={styles.fieldRow}>
                                <Field
                                    component={TextField}
                                    name="lastname"
                                    label="lastname"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} className={styles.fieldRow}>
                                <Field
                                    component={TextField}
                                    type="phone"
                                    name="phone"
                                    label="phone"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} className={styles.fieldRow}>
                                <Field
                                    component={TextField}
                                    type="email"
                                    name="email"
                                    label="email"
                                />

                            </Grid>
                            <Grid item xs={12} md={6} className={styles.fieldRow}>
                                <Field
                                    component={TextField}
                                    name="street"
                                    label="street"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} className={styles.fieldRow}>
                                <Field
                                    component={TextField}
                                    name="locality"
                                    label="locality"
                                />
                            </Grid>
                            <Grid item xs={12} className={styles.fieldRow}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}>
                                    Submit
                                </Button>
                            </Grid>
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
