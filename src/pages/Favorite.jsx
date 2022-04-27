import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClearIcon from "@mui/icons-material/Clear";

import { useFavorite } from "../contexts/FavoriteContextProvider";

const Favorite = () => {
  const { fav, getFav, deleteProdInFav } = useFavorite();

  useEffect(() => {
    getFav();
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1 style={{ color: "orange" }}>My Favorites</h1>
      <Grid container spacing={2}>
        {fav?.products.length > 0 ? (
          fav.products.map((elem) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={elem.item.id}>
              <Container>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "400px",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={elem.item.image}
                    alt={elem.item.brand}
                  />
                  {elem.item.brand}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body1"
                      color="black"
                      component="div"
                    >
                      {elem.item.description}
                    </Typography>
                    <br />
                    <Button
                      style={{ fontSize: "15px" }}
                      onClick={() => deleteProdInFav(elem.item.id)}
                    >
                      <ClearIcon color="inherit" />
                    </Button>
                    <Button
                      style={{ fontSize: "15px" }}
                      component={Link}
                      to={`/shop/detail/${elem.item.id}`}
                    >
                      <MoreHorizIcon />
                    </Button>
                  </CardContent>
                </Card>
              </Container>
            </Grid>
          ))
        ) : (
          <>
            <Grid item xs={12} sm={12} md={12}>
              <h2 style={{ color: "orange" }}>
                You don't have any favorite product yet!
              </h2>
              <br />
              <img
                width="30%"
                src="https://i.pinimg.com/originals/b1/a6/19/b1a619a619b33ef9a80cde169d741b50.gif"
                alt=""
              />
              <br />
              <Button
                component={Link}
                variant="outlined"
                color="warning"
                to="/shop"
                sx={{ margin: "10px" }}
              >
                Start Shopping
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Favorite;
