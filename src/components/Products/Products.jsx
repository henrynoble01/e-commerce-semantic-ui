import React from "react";
// import { Grid } from "@material-ui/core";
import { Container, Grid } from "semantic-ui-react";
import { createMedia } from "@artsy/fresnel";
import Product from "./Product/Product";
import useStyles from "./styles";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

// const products = [
//   { id: 1, name: "John", description: "John", price: "$100" },
//   { id: 2, name: "mackbook", description: "hello", price: "$200" },
// ];

// const Products = ({ products, onAddtoCart }) => {
//   const classes = useStyles();
//   return (
//     <main className={classes.content}>
//       <div className={classes.toolbar} />
//       <Grid container justifyContent='center' spacing={4}>
//         {products.map((product) => (
//           <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//             <Product product={product} onAddtoCart={onAddtoCart} />
//           </Grid>
//         ))}
//       </Grid>
//     </main>
//   );
// };
const Products = ({ products, onAddtoCart }) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ maxWidth: 1536, margin: "0 auto" }}>
        <div className={classes.toolbar} />
        <Grid reversed='computer vertically' stackable columns='equal'>
          <Grid.Row>
            {products.map((product) => (
              <Grid.Column
                style={{ margin: "10px 0" }}
                key={product.id}
                tablet={8}
                mobile={16}
                computer={4}>
                <Product product={product} onAddtoCart={onAddtoCart} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default Products;
