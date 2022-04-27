import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import {
  Link,
  Link as RouterLink,
  NavLink,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import image from "../../images/logo.png";
import { useEffect } from "react";

import "./Navbar.css";
import LiveSearch from "../LiveSearch";
import { useCart } from "../../contexts/CartContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useFavorite } from "../../contexts/FavoriteContextProvider";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { getCartLength, cartLength } = useCart();
  React.useEffect(() => {
    getCartLength();
  }, []);

  const { currentUser, logOutUser } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser?.isLogged && (
        <MenuItem
          className="mobile-link"
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Log Out
        </MenuItem>
      )}
      {currentUser?.isLogged && (
        <MenuItem className="mobile-link" onClick={handleMenuClose}>
          {currentUser?.user}
        </MenuItem>
      )}
      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/register" className="mobile-link">
            Register
          </NavLink>
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/login" className="mobile-link">
            Login
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*===> here is my items */}
      <MenuItem>
        <LiveSearch />
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <InfoIcon />
        </IconButton>
        <NavLink to="/" className="mobile-link">
          <p>Главное</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <InfoIcon />
        </IconButton>
        <NavLink to="/shop" className="mobile-link">
          <p>Все товары</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <InfoIcon />
        </IconButton>
        <NavLink to="/NoteBook" className="mobile-link">
          <p>Ноутбуки</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <InfoIcon />
        </IconButton>
        <NavLink to="/SmartPhone" className="mobile-link">
          <p>Смартфоны</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <InfoIcon />
        </IconButton>
        <NavLink to="/SmartWatch" className="mobile-link">
          <p>Часы</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <InfoIcon />
        </IconButton>
        <NavLink to="/accessories" className="mobile-link">
          <p>Аксессуары</p>
        </NavLink>
      </MenuItem>
      {currentUser?.isAdmin && (
        <NavLink to="/admin" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <InfoIcon />
          </IconButton>
          <p>Admin</p>
        </NavLink>
      )}

      {/* end of my items */}

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [inpSearch, setInpSearch] = React.useState(searchParams.get("q") || "");
  const { fav } = useFavorite();

  useEffect(() => {
    let currentParams = Object.fromEntries([...searchParams]);
    if (location.pathname === "/") {
      setSearchParams({
        ...currentParams,
        _page: 1,
        q: inpSearch,
      });
    }
  }, [inpSearch]);

  function B() {
    if (fav) {
      return fav.products.length;
    } else {
      return 0;
    }
  }
  return (
    <Box sx={{ position: "sticky", top: 0, right: 0, left: 0, zIndex: 2 }}>
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <Typography
            className="mui-link"
            variant="h6"
            noWrap
            to="/"
            component={RouterLink}
            sx={{ display: { sm: "block" }, width: { lg: "50px", xl: "80px" } }}
          >
            <img width="80px" src={image} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/shop"
            >
              Все товары
            </Button>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/NoteBook"
            >
              Ноутбуки
            </Button>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/SmartPhone"
            >
              Смартфоны
            </Button>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/SmartWatch"
            >
              Часы
            </Button>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/accessories"
            >
              Аксессуары
            </Button>
            {currentUser?.isAdmin && (
              <Button
                className="btn"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                }}
                component={NavLink}
                to="/admin  "
              >
                Админ
              </Button>
            )}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <LiveSearch />
            <Link to="/cart" style={{ color: "white" }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={+cartLength} color="error">
                  <ShoppingCartIcon style={{ color: "black" }} />
                </Badge>
              </IconButton>
            </Link>

            <Link to="/favorite">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={B()} color="error">
                  <BookmarkIcon style={{ color: "black" }} />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle style={{ color: "black" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
