import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "1rem",
    },
    signup: {
        marginTop: "2rem",
    },
    link: {
        color: "#3f50b5",
        marginLeft: "0.5rem",
    }
}));

const HomePage = () => {
    const classes = useStyles();
    const { oktaAuth, authState } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                if (!authState) {
                    // When user isn't authenticated, forget any user info
                    setUserInfo(null);
                } else {
                    let info = await oktaAuth.token.getUserInfo()
                    setUserInfo(info);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getCurrentUser();
    }, [authState, oktaAuth]);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={0}>
                    {
                        userInfo ?
                            <>
                                <Typography variant='h4' display="block" gutterBottom>
                                    Welcome!
                                </Typography>
                                <Typography variant='h6' display="block" gutterBottom>
                                    You Are Signed In With {userInfo.email}
                                </Typography>
                            </>
                            :
                            <>
                                <Typography variant='h4' display="block" gutterBottom>
                                    Welcome!
                                </Typography>
                                <Typography variant='h6' display="block" gutterBottom>
                                    Please Sign In
                                </Typography>
                            </>
                    }
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={1}>
                    <Typography variant='h6' display="block" gutterBottom>
                        This is a link to a protected route.
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        <Link to='/protected'>Protected</Link>
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} className={classes.signup}>
                <Typography variant="overline" display="block" gutterBottom>
                    Don't Have an Account?
                    <a className={classes.link} href="https://developer.okta.com/signup/">
                        Sign Up Here</a>
                </Typography>
            </Grid>
        </Grid>
    );
};
export default HomePage;