import "./App.css";
import Toastify from "./components/Toastify/Toastify";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ComContextProvider from "./contexts/ComContextProvider";
import FavoriteContextProvider from "./contexts/FavoriteContextProvider";
import LikeContextProvider from "./contexts/LikeContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <FavoriteContextProvider>
          <ComContextProvider>
            <LikeContextProvider>
              <CartContextProvider>
                <ProductContextProvider>
                  <Toastify />
                  <MyRoutes />
                </ProductContextProvider>
              </CartContextProvider>
            </LikeContextProvider>
          </ComContextProvider>
        </FavoriteContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
