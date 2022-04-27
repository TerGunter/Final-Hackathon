import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Typography } from "@mui/material";

const Filter = ({ category, setcategory, setPage, handleReset }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Категория</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
            setPage(1);
          }}
        >
          <FormControlLabel value="all" control={<Radio />} label="Все" />
          <FormControlLabel
            value="NoteBook"
            control={<Radio />}
            label="Ноутбуки"
          />
          <FormControlLabel
            value="SmartPhone"
            control={<Radio />}
            label="Смартфоны"
          />
          <FormControlLabel
            value="SmartWatch"
            control={<Radio />}
            label="Часы"
          />
          <FormControlLabel
            value="accessories"
            control={<Radio />}
            label="Аксессуары"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <Button onClick={handleReset} variant="outlined">
        Сбросить
      </Button>
    </div>
  );
};

export default Filter;
