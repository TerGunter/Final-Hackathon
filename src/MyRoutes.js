import React from "react";
import { Route, Routes } from "react-router-dom";
import Accessories from "./pages/Accessories";
import SmartWatch from "./pages/SmartWatch";
import SmartPhone from "./pages/SmartPhone";
import NoteBook from "./pages/NoteBook";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Edit from "./components/admin/Edit";
import Error from "./pages/Error";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import RequireAuth from "./components/Auth/RequireAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyCart from "./pages/BuyCart";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/NoteBook" element={<NoteBook />} />
        <Route path="/SmartPhone" element={<SmartPhone />} />
        <Route path="/SmartWatch" element={<SmartWatch />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/shop/detail/:prodId" element={<Detail />} />

        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/buy" element={<BuyCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
