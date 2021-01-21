import React from 'react';
import {createStyles, Grid, IconButton, InputLabel, MenuItem, Theme} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab';
import {Select, TextField} from 'formik-material-ui';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory, useParams} from "react-router-dom";
import {useClient, useCreateClient, useEditClient} from "../../common/hook/Clients.hook";
import {useLocalities} from "../../common/hook/Locality.hook";
import {Locality} from "../../common/resource/Locality.resource";
import {Client} from "../../common/resource/Client.resource";
import SendIcon from '@material-ui/icons/Send';

export function ClientFormComponent(props: { isEditing: boolean }) {

    const history = useHistory();
    const route = useParams<{ clientId?: string }>();
    const styles = useStyles();
    const {data: client} = useClient(Number(route.clientId || -1))
    const {mutateAsync: editClient} = useEditClient();
    const {mutateAsync: createClient} = useCreateClient();
    const {data: localities} = useLocalities();
    const defaultLocation = {zip: client?.locality?.zip || "", noun: client?.locality?.noun || ""};
    return (
        <Formik
            initialValues={{
                firstname: props.isEditing ? client?.firstname || '' : '',
                lastname: props.isEditing ? client?.lastname || '' : '',
                phone: props.isEditing ? client?.phone || '' : '',
                email: props.isEditing ? client?.email || '' : '',
                isFemale: props.isEditing ? Number(client?.isFemale) : 1,
                street: props.isEditing ? client?.street || '' : '',
                locality: props.isEditing ? client?.locality || null : null,
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
            onSubmit={(values) => {
                const id: number = props.isEditing ? (client?.id || -1) : NaN;
                const customClient: Client = {
                    id: id,
                    firstname: values.firstname,
                    lastname: values.lastname,
                    phone: values.phone,
                    email: values.email,
                    isFemale: Boolean(values.isFemale),
                    street: values.street,
                    locality: values.locality,
                }

                props.isEditing ? editClient(customClient) : createClient(customClient)
                history.push(`/`)
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
                                    <MenuItem value={0}>Homme</MenuItem>
                                    <MenuItem value={1}>Femme</MenuItem>
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
                                    getOptionSelected={option => option}
                                    defaultValue={ defaultLocation }
                                    renderInput={params => (
                                        <Field component={TextField} {...params} name="locality_temp" label="localité"/>
                                    )}
                                    onChange={(event, value: Locality) => {
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
                            <Grid item xs={12}>
                                <IconButton
                                    className={styles.send}
                                    disabled={isSubmitting}
                                    onClick={submitForm}>
                                    <SendIcon/>
                                </IconButton>
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
        },
        send: {
            backgroundColor: theme.palette.primary.main,
            "&:hover" : {
                backgroundColor: theme.palette.primary.dark,
            }
        }
    })
);
