import React from 'react';
import {Button, Grid, InputLabel, MenuItem} from "@material-ui/core";
import {TextField, Select} from 'formik-material-ui';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import "yup-phone";

export function FormComponent() {

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                female: "1",
                street: '',
                locality: ''
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
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({submitForm, isSubmitting}) => (
                <div style={{width: "100%", overflow: "hidden"}}>
                    <h1 style={{
                        textAlign: 'center',
                        paddingBottom: "5%",
                    }}
                    >
                        Create Client
                    </h1>
                    <form>
                        <Grid
                            container
                            spacing={5}
                            direction="row"
                            alignItems="center"
                            justify="center"
                        >
                            <Grid item xs={12} >
                                <InputLabel>genre</InputLabel>
                                <Field
                                    component={Select}
                                    name="female"
                                    label="female"
                                >
                                    <MenuItem value="0">Homme</MenuItem>
                                    <MenuItem value="1">Femme</MenuItem>
                                </Field>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    component={TextField}
                                    name="firstname"
                                    label="firstname"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Field
                                    component={TextField}
                                    name="lastname"
                                    label="lastname"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >

                                <Field
                                    component={TextField}
                                    type="phone"
                                    name="phone"
                                    label="phone"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    component={TextField}
                                    type="email"
                                    name="email"
                                    label="email"
                                />

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    component={TextField}
                                    name="street"
                                    label="street"
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >
                                <Field
                                    component={TextField}
                                    name="locality"
                                    label="locality"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
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
