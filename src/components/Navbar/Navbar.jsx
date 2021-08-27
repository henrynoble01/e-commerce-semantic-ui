import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Badge,
//   Menu,
//   MenuItem,
//   Typography,
// } from "@material-ui/core";

import { Menu, Image, Icon, Header, Label } from "semantic-ui-react";

import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <Menu fixed='top' className={classes.appbar}>
        {/* <Toolbar> */}
        <Header as={Link} to='/' size='medium' className={classes.title}>
          <Image
            src='https://i.ibb.co/Qp1SXBw/commerce.png'
            alt='commerce.js'
            height='25px'
            className={classes.image}
          />
          commerce.js
        </Header>

        <Menu.Menu position='right' className={classes.grow} />
        {location.pathname === "/" && (
          <Menu.Item as={Link} to='/cart' name='shoppingcart'>
            <Icon size='large' color='grey' name='shopping cart' />
            <Label
              color='red'
              circular
              floating
              style={{ top: 0, left: "90%" }}>
              {totalItems}
            </Label>
          </Menu.Item>
        )}
        {/* </Menu.Menu> */}
        {/* </Toolbar> */}
      </Menu>
    </>
  );
};

export default Navbar;
