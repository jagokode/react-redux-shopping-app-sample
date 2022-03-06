import Header from "./Header";
import Products from "./Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import "./Layout.css";

const Layout = () => {
  let total = 100;

  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Products />
      <div className="total-price">
        <h3>Total: ${total}</h3>
        <button className="orderBtn">Place Order</button>
      </div>
    </>
  );
};

export default Layout;
