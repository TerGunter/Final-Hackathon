import React, { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContextProvider";
import Paper from "@mui/material/Paper";
import { Grid, Pagination } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "./Card";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS_LIMIT } from "../helpers/Const";
import Filter from "./Filters/Filter";
import PriceFilter from "./Filters/PriceFilter";
import CircularProgress from "@mui/material/CircularProgress";

const maxSliderValue = 5000;
const minSliderValue = 1;

const ProdList = () => {
  const { getProducts, products, pageTotalCount } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  const [category, setcategory] = useState(
    searchParams.get("category") || "all"
  );
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const [slider, setSlider] = useState(
    +searchParams.get("price_gte") || minSliderValue
  );

  const paramsWithType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      category: category,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };
  const paramsNoType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("category")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [page, category, slider]);

  const handleReset = () => {
    setcategory("all");
    setSlider(minSliderValue);
    setSearchParams({
      _page: page,
      _limit: PRODUCTS_LIMIT,
      price_gte: minSliderValue,
      q: "",
    });
    if (modal) showFilter();
    if (modal2) showFilter2();
  };

  function showFilter() {
    modal ? setModal(false) : setModal(true);
  }
  function showFilter2() {
    modal2 ? setModal2(false) : setModal2(true);
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
      <Typography sx={{ minWidth: "320px", display: { xs: "flex" } }}>
        <Button
          style={{ width: "50%" }}
          variant="outlined"
          onClick={showFilter}
        >
          Фильтр
        </Button>
        <Button
          style={{ width: "50%" }}
          variant="outlined"
          onClick={showFilter2}
        >
          Фильтр по цене
        </Button>
      </Typography>
      {modal ? (
        <Filter
          handleReset={handleReset}
          setPage={setPage}
          category={category}
          setcategory={setcategory}
        />
      ) : null}
      {modal2 ? (
        <PriceFilter
          handleReset={handleReset}
          setPage={setPage}
          slider={slider}
          setSlider={setSlider}
          maxSliderValue={maxSliderValue}
          minSliderValue={minSliderValue}
        />
      ) : null}

      <br />
      <Grid container>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Paper>
                <Card product={product} />
              </Paper>
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Pagination
          count={pageTotalCount}
          color="secondary"
          sx={{ display: "inline-block" }}
          onChange={(event, pageVal) => setPage(pageVal)}
          page={page}
        />
      </div>
    </div>
  );
};

export default ProdList;
