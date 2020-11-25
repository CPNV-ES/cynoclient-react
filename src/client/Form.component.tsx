import React from 'react';
import {Button, Grid, InputLabel, MenuItem} from "@material-ui/core";
import {TextField, Select} from 'formik-material-ui';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import "yup-phone";

export function FormComponent() {

    return (
        <div>
            <h1>Create Client</h1>
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
                        .max(100, 'Too Long!')
                        .required(),
                    lastname: Yup.string()
                        .min(2)
                        .max(100, 'Too Long!')
                        .required(),
                    email: Yup.string()
                        .email('Invalid email')
                        .required(),
                    female: Yup.boolean()
                        .required(),
                    phone: Yup.string()
                        .phone("IN")
                        .max(15, "Verify your phone number")
                        .required(),
                    street: Yup.string()
                        .min(2)
                        .max(255, 'Too Long!')
                        .required(),
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
                    <form>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Field
                                    component={TextField}
                                    name="firstname"
                                    label="firstname"
                                />
                                <Field
                                    component={TextField}
                                    name="lastname"
                                    label="lastname"
                                />
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
                            <Grid item>
                                <Field
                                    component={TextField}
                                    type="phone"
                                    name="phone"
                                    label="phone"
                                />
                            </Grid>
                            <Grid item>
                                <Field
                                    component={TextField}
                                    type="email"
                                    name="email"
                                    label="email"
                                />
                            </Grid>
                            <Grid item>
                                <Field
                                    component={TextField}
                                    name="street"
                                    label="street"
                                />
                                <Field
                                    component={TextField}
                                    name="locality"
                                    label="locality"
                                />
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Submit
                            </Button>

                        </Grid>
                    </form>
                )}
            </Formik>
        </div>

    );
}
