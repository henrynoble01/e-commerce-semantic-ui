import React from "react";
// import {
//   Typography,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
// } from "@material-ui/core";

import { Card, Image, Header, Button } from "semantic-ui-react";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  //   console.log(item);
  const classes = useStyles();
  return (
    <Card style={{ width: "100%" }}>
      <Image
        src={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <Card.Content className={classes.carcContent}>
        <Header as='h4'>{item.name}</Header>
        <Header as='h4'>{item.line_total.formatted_with_symbol}</Header>
      </Card.Content>
      <Card.Content className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type='button'
            size='small'
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            basic>
            -
          </Button>
          <Header>{item.quantity}</Header>
          <Button
            type='button'
            size='small'
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            basic>
            +
          </Button>
        </div>
        <Button
          compact
          type='button'
          onClick={() => onRemoveFromCart(item.id)}
          negative>
          Remove
        </Button>
      </Card.Content>
    </Card>
  );
};

export default CartItem;
