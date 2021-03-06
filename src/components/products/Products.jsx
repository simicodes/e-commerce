import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/752837/1.jpg?9501",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$10",
    image:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/752837/1.jpg?9501",
  },
];
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
