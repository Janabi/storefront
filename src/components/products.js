import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Container, Grid} from '@material-ui/core';
import './components.scss';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const useStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  


function Product(props) {
    // const _getData = () =>{
    //   return props.get();
    // }

    const classes = useStyles();
    const classez = useStyle();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    
    console.log("props>>>", props.data)
    return(
        <>

            <Container>
              <h2 className="categories">Browse our Categories</h2>
            <Grid container spacing={4}>
                {props.data.myData.categories.map((person, idx)=> {
                    // return <li key={idx} onClick={() => props.data.categories(person.name)}>{person.name} : {person.displayName}</li>
                    return <Grid item xs={4} key={idx}>
                        <Paper className={classez.paper} onClick={() => props.data.getCategory(person.name)}>{person.name}</Paper>
                        </Grid>
                })}
            </Grid>

            <Grid className="active-title">
                <h1 className="title">{props.data.myData.activeCategory}</h1>
                <p className="description">Category Description Goes Here</p>
            </Grid>
            
            <Grid container spacing={4}>
            {props.data.myData.products.map((person, idx)=> {
                if(person.category === props.data.myData.activeCategory) {
                    return <Grid item xs={4} key={idx}><Card className={classes.root}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {person.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Price: {person.price}
                          , {person.inStock > 0 ? 'inStock:' + (person.inStock).toString(): <p className="warning">Out of Stock</p>}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {console.log("propzzzzz>>>>", props.data.cartItem)}
                      {person.inStock > 0 ? 
                        <Button size="small" color="primary" onClick={()=>props.data.add(person)}>
                          Add To Chart
                        </Button>
                        : ''
                      }
                      <Button size="small" color="primary" onClick={handleClickOpen}>
                        Show Details
                      </Button>
                      <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle id="alert-dialog-slide-title">{"item Description:"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">
                            {person.description}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Ok!
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </CardActions>
                  </Card>
                  </Grid>
                }
                return null;
            })}
            </Grid>

            </Container>
        
        </>
    )
}

export default Product;