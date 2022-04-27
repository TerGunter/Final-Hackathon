import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useProductContext } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const initValues = {
    brand: "",
    description: "",
    price: "",
    category: "",
    image: "",
  };
  const { ObjForEdit, saveEdited } = useProductContext();
  const [editValues, setEditValues] = useState(initValues);
  const navigate = useNavigate();

  useEffect(() => {
    if (ObjForEdit) {
      setEditValues(ObjForEdit);
    }
  }, [ObjForEdit]);

  const handleChange = (e) => {
    let obj = {
      ...editValues,
      [e.target.name]: e.target.value,
    };
    setEditValues(obj);
  };

  const handleSubmit = () => {
    if (
      !editValues.brand ||
      !editValues.description ||
      !editValues.price ||
      !editValues.category
    ) {
      alert("Заполните поля!");
    } else {
      saveEdited(editValues);
      setEditValues(initValues);
      navigate("/admin");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "400px" },
      }}
    >
      <TextField
        onChange={(e) => handleChange(e)}
        value={editValues.brand}
        name="brand"
        label={"Название"}
        id="margin-none"
        margin="dense"
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={editValues.description}
        name="description"
        label={"Описание"}
        id="margin-dense"
        margin="dense"
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={editValues.price}
        name="price"
        label={"Цена"}
        id="margin-normal"
        margin="dense"
      />
      <div style={{ width: "400px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Категория</InputLabel>
          <Select
            name="category"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={editValues.category}
            label="Категория"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="NoteBook">Ноутбуки</MenuItem>
            <MenuItem value="SmartPhone">Смартфоны</MenuItem>
            <MenuItem value="SmartWatch">Часы</MenuItem>
            <MenuItem value="brand">Фирма</MenuItem>
            <MenuItem value="accessories">Аксессуары</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField
        onChange={(e) => handleChange(e)}
        value={editValues.image}
        name="image"
        label={"Картинка"}
        id="margin-normal"
        margin="dense"
      />
      <Button
        variant="contained"
        style={{ marginTop: "5px" }}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </Box>
  );
};

export default Edit;
