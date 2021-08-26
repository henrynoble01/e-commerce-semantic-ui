import React from "react";

import { Card, Icon, Image, Header } from "semantic-ui-react";

import useStyles from "./styles";

const Product = ({ product, onAddtoCart }) => {
  const classes = useStyles();
  //   console.log(product);

  return (
    <Card className={classes.root}>
      <Image
        className={classes.media}
        src={product.media.source}
        title={product.name}
      />
      <Card.Content>
        <div className={classes.CardContent}>
          <Header as='h5'>{product.name}</Header>
          <Header as='h5'>{product.price.formatted_with_symbol}</Header>
        </div>
        <span
          dangerouslySetInnerHTML={{ __html: product.description }}
          size='tiny'
          color='grey'></span>
      </Card.Content>
      <Card.Content extra className={classes.CardActions}>
        <Icon
          name='add to cart'
          aria-label='Add to cart'
          size='large'
          onClick={() => onAddtoCart(product.id, 1)}
        />
      </Card.Content>
    </Card>
  );
};

export default Product;
