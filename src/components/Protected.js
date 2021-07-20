import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "1rem",
    },
}));

const Protected = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant='h4'>
                        Protected Area Only Accessible After Signing In
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )

}
export default Protected;