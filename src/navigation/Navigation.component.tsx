import React, {PropsWithChildren, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    createStyles,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import {useHistory} from 'react-router-dom';
import PetsIcon from '@material-ui/icons/Pets';
import AdbIcon from '@material-ui/icons/Adb';
import MenuIcon from '@material-ui/icons/Menu';
import HealingIcon from '@material-ui/icons/Healing';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import {useDrawerTransitionChangeValue} from "../common/hook/Navigation.hook";

const drawerWidth = 240;

export function NavigationComponent(props: PropsWithChildren<any>) {
    const history = useHistory();
    const classes = useStyles();

    const [drawerTransitionValue, setDrawerTransitionValue] = useDrawerTransitionChangeValue();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navigationItem = (label: string, path: string, icon: JSX.Element) => (
        <ListItem button key={label} onClick={() => history.push(path)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label}/>
        </ListItem>
    )

    return (
        <div className={classes.root}>
            <AppBar color={"inherit"} position="fixed" className={clsx(classes.appBar, {
                [classes.appBarShift]: isDrawerOpen,
            })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={() => setIsDrawerOpen(true)}
                        edge="start"
                        className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cynoclient
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                id={'drawer'}
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={isDrawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onTransitionEnd={() => setDrawerTransitionValue(!drawerTransitionValue)}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {navigationItem("Clients", "/clients", <GroupIcon/>)}
                    {navigationItem("Races", "/breeds", <AdbIcon/>)}
                    {navigationItem("Chiens", "/dogs", <PetsIcon/>)}
                    {navigationItem("Maladies", "/diseases", <HealingIcon/>)}
                    {navigationItem("Services", "/services", <RoomServiceIcon/>)}
                </List>
            </Drawer>
            <main className={clsx(classes.content, {
                [classes.contentShift]: isDrawerOpen,
            })}>
                {props.children}
            </main>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            paddingTop: theme.spacing(9),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    }),
);
