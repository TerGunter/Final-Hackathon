import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { notify, notifyError } from "../components/Toastify/Toastify";
import { API, PRODUCTS_LIMIT } from "../helpers/Const";

export const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  ObjForEdit: null,
  pageTotalCount: 1,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pageTotalCount: Math.ceil(
          action.payload.headers["x-total-count"] / PRODUCTS_LIMIT
        ),
      };
    case "OBJ_FOR_EDIT":
      return { ObjForEdit: action.payload.data };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
    try {
      let res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const saveAdded = async (obj) => {
    try {
      await axios.post(API, obj);
      notify("success", `Продукт ${obj.brand} был успешно добавлен!`);
      getProducts();
    } catch (err) {
      notifyError(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      notify("success", `Продукт был удален!`);
      getProducts();
    } catch (err) {
      notifyError(err);
    }
  };

  const idForEdit = async (id) => {
    try {
      let res = await axios.get(`${API}/${id}`);
      dispatch({
        type: "OBJ_FOR_EDIT",
        payload: res,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const saveEdited = async (obj) => {
    try {
      await axios.patch(`${API}/${obj.id}`, obj);
      notify("info", `Продукт ${obj.brand} был успешно обновлен`);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <productContext.Provider
      value={{
        products: state.products,
        ObjForEdit: state.ObjForEdit,
        pageTotalCount: state.pageTotalCount,
        saveAdded,
        getProducts,
        deleteProduct,
        idForEdit,
        saveEdited,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
