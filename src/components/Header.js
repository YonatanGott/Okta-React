import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
    Button,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Box,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HomeIcon from '@material-ui/icons/Home';
import { useOktaAuth } from '@okta/okta-react';


const useStyles = makeStyles({

    page: {
        width: '100%',
    },
    appBar: {
        flexGrow: 1,
    },
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    box: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    homeButton: {
        marginRight: "0.4rem",
    },
    icon: {
        marginRight: "0.4rem",
    },
    pageTitle: {
        fontWeight: 500,
    },
})

export default function Header() {
    const classes = useStyles()
    const history = useHistory()
    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) return null;

    const login = async () => history.push('/login');

    const logout = async () => oktaAuth.signOut();

    const button = authState.isAuthenticated ?
        <Button className={classes.login} color="inherit" onClick={logout}><PersonOutlineIcon className={classes.icon} />Logout</Button> :
        <Button className={classes.login} color="inherit" onClick={login}><PersonIcon className={classes.icon} />Login</Button>;

    return (
        <div>
            {/* Navbar */}
            <AppBar
                position="sticky"
                className={classes.appBar}
                color="primary"
            >
                <Toolbar className={classes.navBar}>
                    <Box className={classes.box}>
                        <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu"
                            onClick={() => {
                                history.push("/");
                            }}>
                            <HomeIcon />
                        </IconButton>
                        <Typography className={classes.pageTitle} variant="h5">
                            Okta React
                        </Typography>
                    </Box>
                    <Box className={classes.box}>
                        {button}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}