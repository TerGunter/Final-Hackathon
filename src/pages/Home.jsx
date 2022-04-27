import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="images-selector">
        <Link to="/NoteBook">
          <label for="duck" class="img-card img1"></label>
        </Link>
        <Link to="/SmartPhone">
          <label for="dog" class="img-card img2"></label>
        </Link>
        <Link to="/SmartWatch">
          <label for="cat" class="img-card img3"></label>
        </Link>
        <Link to="/accessories">
          <label for="cow" class="img-card img4"></label>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              width: "300px",
              textDecoration: "none",
            }}
          >
            Начать покупки
            <ArrowRightIcon />
          </Button>
        </Link>
        <h1 style={{ marginBottom: "0", fontFamily: "inherit" }}>
          Качественные товары по выгодной цене
        </h1>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <p
            style={{
              minWidth: "320px",
              fontFamily: "sans-serif",
              lineHeight: "2",
              fontFamily: "inherit",
            }}
          >
            Присоединяйтесь к Huawei Market в невероятном путешествии, где вас
            ждет новый мир чудес в нашей коллекции умных устройств последнего
            поколения. Первый фирменный магазин умных устройств в Кыргызстане.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
