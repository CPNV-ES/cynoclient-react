import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import {useHistory} from 'react-router-dom';
import PetsIcon from '@material-ui/icons/Pets';
import AdbIcon from '@material-ui/icons/Adb';

export function NavigationComponent() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Cynoclient
                    </Typography>

                    <Button color={"inherit"} startIcon={<GroupIcon/>} onClick={() => history.push("/clients")}>
                        Clients
                    </Button>
                    <Button color={"inherit"} startIcon={<AdbIcon/>} onClick={() => history.push("/breeds")}>
                        Breeds
                    </Button>
                    <Button color={"inherit"} startIcon={<PetsIcon/>} onClick={() => history.push("/dogs")}>
                        Chiens
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        }
    }),
);
