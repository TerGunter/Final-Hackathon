import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useProductContext } from "../../contexts/ProductContextProvider";

export default function Add() {
  const initValues = {
    brand: "",
    description: "",
    price: "",
    category: "",
    image: "",
  };
  const [inpValues, setInpValues] = React.useState(initValues);
  const { saveAdded } = useProductContext();

  const handleChange = (e) => {
    let obj = {
      ...inpValues,

      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSubmit = () => {
    if (
      !inpValues.brand ||
      !inpValues.description ||
      !inpValues.price ||
      !inpValues.category
    ) {
      alert("Заполните поля!");
    } else {
      let obj = {
        ...inpValues,
        price: +inpValues.price,
      };
      saveAdded(obj);
      setInpValues(initValues);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { minwidth: "320px" },
        // position: "fixed",
        // zIndex: 3,
      }}
    >
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.brand}
        name="brand"
        label={"Название"}
        id="margin-none"
        margin="dense"
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.description}
        name="description"
        label={"Описание"}
        id="margin-dense"
        margin="dense"
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.price}
        name="price"
        label={"Цена"}
        id="margin-normal"
        margin="dense"
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <Box sx={{ minWidth: "320px" }}>
        <FormControl sx={{ width: "320px" }}>
          <InputLabel id="demo-simple-select-label">Категория</InputLabel>
          <Select
            name="category"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inpValues.category}
            label="Категория"
            onChange={(e) => handleChange(e)}
            sx={{ backgroundColor: "#e0e0e0" }}
          >
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="NoteBook">
              Ноутбуки
            </MenuItem>
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="SmartPhone">
              Смартфоны
            </MenuItem>
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="SmartWatch">
              Часы
            </MenuItem>
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="accessories">
              Аксессуары
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.image}
        name="image"
        label={"Картинка"}
        id="margin-normal"
        margin="dense"
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <Button
        variant="contained"
        style={{ marginTop: "5px" }}
        onClick={() => handleSubmit()}
      >
        Add
      </Button>
    </Box>
  );
}
