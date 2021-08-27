import React from "react";
// import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Grid, Header, Button, Container } from "semantic-ui-react";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  //   const isEmpty = !cart.line_items.length;
  const classes = useStyles();

  const EmptyCart = () => (
    <Header as='h3'>
      You have no items in your cart,
      <Link to='/' className={classes.link}>
        start adding some
      </Link>
      !
    </Header>
  );

  const FilledCart = () => (
    <>
      <Grid stackable reversed='mobile vertically' spacing={3}>
        <Grid.Row columns={4}>
          {cart.line_items.map((item) => (
            <Grid.Column item mobile={16} tablet={8} computer={4} key={item.id}>
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
      <div className={classes.cardDetails}>
        <Header as='h4'>Subtotal: {cart.subtotal.formatted_with_symbol}</Header>
        <Button
          className={classes.emptyButton}
          size='large'
          type='button'
          variant='contained'
          secondary
          onClick={handleEmptyCart}>
          Empty cart
        </Button>
        <Button
          className={classes.checkoutButton}
          size='large'
          type='button'
          variant='contained'
          primary
          component={Link}
          to='/checkout'>
          Checkout
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) return "loading....";

  return (
    // <Container>
    <div style={{ maxWidth: 1536 }}>
      <div className='classes.toolbar' />
      <Header className={classes.title} as='h3'>
        Your shoping cart
      </Header>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
