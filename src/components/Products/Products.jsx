import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
// const products = [
//     {
//         id: 1,
//         name: 'Shoes',
//         description: 'Skate Shoes',
//         price: '$129.99'
//     },
//     {
//         id: 2,
//         name: 'Skateboard',
//         description: 'DGK Skateboard',
//         price: '$249.99'
//     },
//     {
//         id: 3,
//         name: 'Shirt',
//         description: 'Nike Shirt',
//         price: '$59.99'
//     }
// ]

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" pacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
