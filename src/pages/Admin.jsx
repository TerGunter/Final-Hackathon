import { Box } from "@mui/material";
import React from "react";
import { useState } from "react-router-dom";
import Products from "../components/admin/Products";
import image from "../images/11-117105_down-arrow-png-image-background-arrow-down-icon.png";
import image2 from "../images/qw.png";
import Add from "../components/admin/Add";

const Admin = () => {
  const [downModal, setDownModal] = React.useState(true);
  const [upModal, setUpModal] = React.useState(false);
  const [addModal, setAddModal] = React.useState(false);
  return (
    <div>
      <h1>Администратор</h1>
      <h5>Добавить новый продукт</h5>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {downModal && (
          <img
            width="100px"
            src={image}
            alt=""
            onClick={() => {
              setUpModal(true);
              setDownModal(false);
              setAddModal(true);
            }}
          />
        )}
        {upModal && (
          <img
            width="100px"
            src={image2}
            alt=""
            onClick={() => {
              setDownModal(true);
              setUpModal(false);
              setAddModal(false);
            }}
          />
        )}
        {addModal && <Add />}
        <Products />
      </Box>
    </div>
  );
};

export default Admin;
