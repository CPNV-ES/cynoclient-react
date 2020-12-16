import React from "react";
import {Backdrop, CircularProgress} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export function LoaderComponent() {
    const styles = useStyles();

    return (
        <div className={styles.wrapper}>
            <Backdrop open={true}>
                <CircularProgress size={80}/>
            </Backdrop>
        </div>
    )
}

const useStyles = makeStyles(theme => {
    return {
        wrapper: {
            flex: 1,
            justifyContent: "center",
            marginTop: theme.spacing(6),
        }
    }
})
