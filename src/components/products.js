import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Container, Grid} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
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
    const classes = useStyles();
    const classez = useStyle();
    console.log("props>>>", props.data.myData.products)
    return(
        <>
            <Container>
        
            <Grid container spacing={4}>
                {props.data.myData.categories.map((person, idx)=> {
                    // return <li key={idx} onClick={() => props.data.categories(person.name)}>{person.name} : {person.displayName}</li>
                    return <Grid item xs={4} key={idx}>
                        <Paper className={classez.paper} onClick={() => props.data.categories(person.name)}>{person.name}</Paper>
                        </Grid>
                })}
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
                          , inStock: {person.inStock}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Add To Chart
                      </Button>
                      <Button size="small" color="primary">
                        Show Details
                      </Button>
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