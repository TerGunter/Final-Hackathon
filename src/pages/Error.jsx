import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found! </h2>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button variant="contained">Перейти на главную страницу</Button>
      </Link>
    </div>
  );
};

export default Error;
