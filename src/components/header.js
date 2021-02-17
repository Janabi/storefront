import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import RotateLeftTwoToneIcon from '@material-ui/icons/RotateLeftTwoTone';

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

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log('inside useEfect');
    props.cart.get();
  }, ['']);
  
  console.log("propzzzzzzzzzz>>>>>>>>>>>>>>", props)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OUR Store
          </Typography>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Badge badgeContent={props.cart.cartItem.totalCarts} color="secondary">
              <ShoppingCartIcon />
            </Badge> 
          </Button>
          <RotateLeftTwoToneIcon onClick={()=>props.cart.reset()}/>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            
            {props.cart.cartItem.carts.map((item, index)=>
              <MenuItem key={index}>
                <Badge badgeContent={item.quantity} color="primary">
                  {item.name}
                </Badge> 
                <HighlightOffTwoToneIcon onClick={()=>props.cart.remove(item)}/>
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
