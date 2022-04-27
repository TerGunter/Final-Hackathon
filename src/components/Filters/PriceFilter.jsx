import React from "react";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";

const Filter = ({
  setPage,
  slider,
  setSlider,
  maxSliderValue,
  minSliderValue,
  handleReset,
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography color="text.secondary">Цена</Typography>
      <Slider
        sx={{ maxWidth: "350px" }}
        value={slider}
        onChange={(e, newValue) => {
          setSlider(newValue);
          setPage(1);
        }}
        valueLabelDisplay="auto"
        max={maxSliderValue}
        min={minSliderValue}
      />
      <br />
      <Button onClick={handleReset} variant="outlined">
        Сбросить
      </Button>
    </div>
  );
};

export default Filter;
