import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProdInCart } = useCart();
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        {cart?.products.length > 0 ? (
          <>
            <br />
            <Typography variant="h4">
              Total price: {cart.totalPrice}сом
            </Typography>
            <br />
            <Link to="/buy" style={{ textDecoration: "none" }}>
              <Button variant="contained">
                BUY NOW FOR {cart.totalPrice} сом
              </Button>
            </Link>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Категория</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Бренд</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Картинка
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Цена
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Сумма
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Кол-во
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Удалить
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.products.map((elem) => (
                    <TableRow
                      key={elem.item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {elem.item.category}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {elem.item.brand}
                      </TableCell>
                      <TableCell align="right">
                        <img
                          width="40px"
                          src={elem.item.image}
                          alt={elem.item.category}
                        />
                      </TableCell>
                      <TableCell align="right">{elem.item.price}</TableCell>
                      <TableCell align="right">{elem.subPrice}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() =>
                            changeProductCount(elem.count + 1, elem.item.id)
                          }
                        >
                          <AddIcon />
                        </IconButton>
                        {elem.count}
                        <IconButton
                          onClick={() =>
                            changeProductCount(elem.count - 1, elem.item.id)
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => deleteProdInCart(elem.item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <img
              width="400px"
              src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
              alt=""
            />{" "}
            <br />
            <Button variant="contained" component={Link} to="/shop">
              Go Shopping
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
