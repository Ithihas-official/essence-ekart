import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Home,
  HomeTemplate,
  Products,
  SingleProduct,
} from "./pages";
import { AuthWrapper, ErrorPage } from "./components";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <AuthWrapper>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="checkout" element={<PrivateRoute><Checkout /> </PrivateRoute>} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AuthWrapper>
    </>
  );
}

export default App;
