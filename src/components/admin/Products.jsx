import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useProductContext } from "../../contexts/ProductContextProvider";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Products() {
  const { products, getProducts, deleteProduct, idForEdit } =
    useProductContext();
  const navigate = useNavigate();
  React.useEffect(() => {
    getProducts();
  }, []);
  return products && products.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="20%">Название</TableCell>
            <TableCell width="20%">Категория</TableCell>
            <TableCell width="20%">Цена</TableCell>
            <TableCell width="20%">Картинка</TableCell>
            <TableCell width="20%">Описание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell width="19%" component="th" scope="row">
                {row.brand}
              </TableCell>
              <TableCell width="15%">{row.category}</TableCell>
              <TableCell width="15%">{row.price}</TableCell>
              <TableCell width="15%">
                <img width="40px" src={row.image} alt="product/image" />
              </TableCell>
              <TableCell width="20%">{row.description}</TableCell>
              <TableCell width="8%">
                <EditIcon
                  onClick={() => {
                    idForEdit(row.id);
                    navigate("/edit");
                  }}
                />
              </TableCell>
              <TableCell width="8%">
                <HighlightOffRoundedIcon
                  onClick={() => deleteProduct(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <CircularProgress />
  );
}
