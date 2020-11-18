import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';

export function NavigationComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cynoclient
          </Typography>

          <Button color={"inherit"} startIcon={<GroupIcon/>}>
            Exemple
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
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    modal: {
      position: "absolute",
      top: "20%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      outline: 0
    },
    modalContainer: {
      maxWidth: "40%"
    }
  }),
);
