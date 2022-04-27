import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import CircularProgress from "@mui/material/CircularProgress";

import { Button } from "@mui/material";
import ListCom from "../components/comments/ListCom";
import AddCom from "../components/comments/AddCom";

const Detail = () => {
  const { prodId } = useParams();
  const { idForEdit, ObjForEdit, getProducts } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    idForEdit(prodId);
  }, []);
  return (
    <div>
      <Button
        onClick={() => navigate("/shop")}
        style={{
          backgroundColor: "black",
          color: "white",
          marginTop: "10px",
          width: "300px",
        }}
      >
        Назад
      </Button>
      <div style={{ marginTop: "20px" }}>
        {ObjForEdit ? (
          <>
            <img width="320px" src={ObjForEdit.image} alt="" />
            <h2>{`${ObjForEdit.price}сом`}</h2>
            <h3>{ObjForEdit.brand}</h3>
            <p>{ObjForEdit.description}</p>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
      <ListCom />
      <AddCom />
    </div>
  );
};

export default Detail;
