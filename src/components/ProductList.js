import React, { useContext } from "react";
import { Container, Grid } from "@material-ui/core";
import ItemCard from "./ItemCard";
import { ProductsContext } from "./../Context";

const ProductList = ({ products }) => {
  const con = useContext(ProductsContext);
  const CekDays = time => {
    if (con.state.deliveryDays === 0) {
      return 1;
    } else if (con.state.deliveryDays === "more") {
      return time > 30 ? 1 : 0;
    } else {
      return parseInt(time) <= con.state.deliveryDays ? 1 : 0;
    }
  };
  const CekFilteredData = fd => {
    if (con.state.furnitureStyles.length === 0) {
      return 1;
    } else {
      let check = false;
      for (let i = 0; i < con.state.furnitureStyles.length; i++) {
        check = fd.includes(con.state.furnitureStyles[i]);
        if (check === true) break;
      }
      return check;
    }
  };

  const filteredData = products.filter(
    product =>
      product.name.toLowerCase().includes(con.state.search.toLowerCase()) &&
      CekFilteredData(product.furniture_style) &&
      CekDays(product.delivery_time)
  );
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {products.length > 0 &&
            filteredData.map((product, i) => (
              <Grid item xs={12} md={6} key={i}>
                <ItemCard data={product} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductList;
