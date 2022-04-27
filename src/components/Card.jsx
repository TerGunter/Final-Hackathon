import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useCart } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";
import "./Card.css";
import { useLikeContext } from "../contexts/LikeContextProvider";
import { useAuth } from "../contexts/AuthContextProvider";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Container } from "@mui/material";
import { useFavorite } from "../contexts/FavoriteContextProvider";

export default function OrderForm({ product }) {
  const { currentUser, logOutUser } = useAuth();
  const { addDelToCart, isProdInCart } = useCart();
  const [inCart, setInCart] = React.useState(isProdInCart(product.id));
  const { addDelToFav, isProdInFav } = useFavorite();
  const [inFav, setInFav] = React.useState(isProdInFav(product.id));
  const { addLike, delLike, getLike, likes, allLikes } = useLikeContext();
  const isLikedF = () =>
    likes.some((like) => {
      return like.itemId === product.id;
    });
  const [disabled, setDisabled] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(isLikedF());

  React.useEffect(() => {
    getLike();
  }, []);
  React.useEffect(() => {
    setIsLiked(isLikedF());
  }, [likes]);

  const handleSubmitLike = () => {
    let forDelId = likes.find((item) => item.itemId === product.id);
    let obj = {
      user: currentUser.user,
      itemId: product.id,
    };
    let checkProdIsLiked = likes.some((item) => {
      return obj.itemId === item.itemId;
    });
    if (checkProdIsLiked && forDelId) {
      delLike(forDelId.id);
    } else {
      addLike(obj);
    }
  };
  let prodLikes = allLikes.filter((elem) => {
    return elem.itemId === product.id;
  });

  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: "10px",
        marginLeft: "20px",
      }}
    >
      <Link to={`/shop/detail/${product.id}`}>
        <CardMedia
          component="img"
          height="300px"
          image={product.image}
          alt="shoes"
          className="zoom"
        />
      </Link>
      <CardContent>
        <Typography
          variant="h5"
          color="text.black"
          style={{ fontFamily: "inherit" }}
        >
          {product.brand}
        </Typography>
        <Typography
          variant="h6"
          color="#263238"
          style={{ fontFamily: "inherit" }}
        >
          {`${product.price} $`}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: "inherit" }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          style={{ color: isLiked ? "red" : "black" }}
          onClick={() => {
            setDisabled(true);
            handleSubmitLike();
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <p style={{ fontSize: "15px" }}>{prodLikes.length}</p>
        <IconButton
          color={inCart ? "secondary" : "inherit"}
          onClick={() => {
            addDelToCart(product);
            setInCart(isProdInCart(product.id));
          }}
        >
          <LocalMallIcon />
        </IconButton>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {`Артикул: ${product.id + 1000}`}
          </Typography>
          <IconButton
            style={{ color: inFav ? "#d500f9" : "black" }}
            onClick={() => {
              addDelToFav(product);
              setInFav(isProdInFav(product.id));
            }}
          >
            <BookmarkIcon />
          </IconButton>
        </Container>
      </CardActions>
      <Collapse timeout="auto" unmountOnExit></Collapse>
    </Card>
  );
}
