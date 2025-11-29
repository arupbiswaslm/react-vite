import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";

import { ShoppingCart } from "lucide-react"; // Icon

// Small Navbar Component
const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <Link to="/">My Shop</Link>
      <Link to="/cart">
        <ShoppingCart /> <span>({cart.length})</span>
      </Link>
    </nav>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
