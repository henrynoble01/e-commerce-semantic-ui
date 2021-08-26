import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";

import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position='fixed' className={classes.appbar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'>
            <img
              src='https://i.ibb.co/Qp1SXBw/commerce.png'
              alt='commerce.js'
              height='25px'
              className={classes.image}
            />
            commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='show cart items'
                color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
                  <span>Cart</span>
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
