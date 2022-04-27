import React, { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContextProvider";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Accessories = () => {
  const { getProducts, products } = useProductContext();
  const [access, setAccess] = useState([]);
  const { params } = useParams();
  useEffect(() => {
    getProducts();
  }, [params]);

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    accessm();
  }, [products]);

  function accessm() {
    let newArr = products.filter((item) => {
      return item.category === "SmartPhone";
    });
    setAccess(newArr);
  }
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <br />
      <Grid container>
        {access && access.length > 0 ? (
          access.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Paper>
                <Card product={product} />
              </Paper>
            </Grid>
          ))
        ) : (
          <h1>No Products</h1>
        )}
      </Grid>
      <div style={{ textAlign: "center", margin: "50px 0" }}></div>
    </div>
  );
};

export default Accessories;
