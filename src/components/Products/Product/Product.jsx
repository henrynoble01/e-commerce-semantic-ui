import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import useStyles from "./styles";

const Product = ({ product, onAddtoCart }) => {
  const classes = useStyles();
  //   console.log(product);

  //   return <div>test</div>;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5' gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant='body2'
          color='textSecondary'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton
          aria-label='Add to cart'
          onClick={() => onAddtoCart(product.id, 1)}>
          <span>add</span>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
