import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import {useHistory} from 'react-router-dom';

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

                    <Button color={"inherit"} startIcon={<GroupIcon/>} onClick={() => history.push("/")}>
                        Home
                    </Button>
                    <Button color={"inherit"} startIcon={<GroupIcon/>} onClick={() => history.push("/clients/store")}>
                        Client
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
