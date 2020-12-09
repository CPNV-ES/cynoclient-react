import React, {useState} from 'react';
import {Button, createStyles, Grid, InputLabel, MenuItem, Theme} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab';
import {Select, TextField} from 'formik-material-ui';
import {Field, Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory, useParams} from "react-router-dom";
import {useClient, createClient} from "../common/hook/Clients.hook";
import {useLocalities} from "../common/hook/Locality.hook";
import {Locality} from "../common/resource/Locality.resource";

export function FormComponent() {
    const history = useHistory(); //use to navigate (like navigate on react-native)
    const route = useParams<{ clientId?: string }>();
    const styles = useStyles();
    const {data: client} = useClient(Number(route.clientId || -1))
    const {data: localities} = useLocalities();
    const [formdata, setFormdata] = useState({
        firstname: client ? client.firstname : '',
        lastname: client ? client.lastname : '',
        phone: client ? client.phone : '',
        email: client ? client.email : '',
        isFemale: client ? client.isFemale : true,
        street: client ? client.street : '',
        locality: client ? client.locality : null,
    });

    return (
        <Formik
            initialValues={formdata}
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
                isFemale: Yup.boolean()
                    .required(),
                phone: Yup.string()
                    .phone("IN")
                    .max(15, "Vérifiez votre numéro de téléphone")
                    .required(""),
                street: Yup.string()
                    .min(2)
                    .max(255, 'Trop long!')
                    .required("Veuillez entrer un nom et numéro de rue (example: Rue de Genève 77)"),
            })}
            onSubmit={(values, {setSubmitting}) => {
                createClient({
                    id: -1,
                    firstname: values.firstname,
                    lastname: values.lastname,
                    phone: values.phone,
                    email: values.email,
                    isFemale: values.isFemale,
                    street: values.street,
                    locality: values.locality,
                    id_locality: values.locality?.id || null
                })
                console.log(values)
                setSubmitting(false);
            }}
        >
            {({submitForm, isSubmitting,setFieldValue}) => (
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
                                    name="isFemale"
                                    label="Êtes-vous une femme?">
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
                                <Autocomplete
                                    options={localities?.toJS() || [{noun: ""}] }
                                    getOptionLabel={option => `${option.zip} ${option.noun}`}
                                    defaultValue={{zip: client?.locality?.zip, noun: client?.locality?.noun}}
                                    renderInput={params => (
                                        <Field component={TextField} {...params} name="locality_temp" label="localité"/>
                                    )}
                                    onChange={(event, value: Locality) => {
                                        console.log(value)
                                        setFieldValue("locality", value || null)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} className={styles.fieldRow}>
                                <Field
                                    component={TextField}
                                    name="street"
                                    label="Numéro et nom de rue"
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
