import { TableFooter } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './components.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root} className="sticky-footer">
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    &copy;OUR store 2021
                    </Typography>
                    <Typography>
                    mail: aaljanabi@rocketmail.com
                    </Typography>
                </Toolbar>
                </AppBar>
            </div>
        </>
    )
}