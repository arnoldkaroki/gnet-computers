import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/contact";
import HomePage from "./pages/Homepage";
import Login from "./pages/login";
import Privacy from "./pages/privacy";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import TermsOfService from "./pages/TermsOfService";
import TopHeader from "./components/top-header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { CartContext, CartProvider } from "./context/CartContext";
import ProductList from "./pages/ProductPage";
import AdminDashboard from "./pages/admin/AdminDashboard"; 
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement"; 
import UserPage from "./pages/admin/UserPage"; 
import SettingsPage from "./pages/admin/SettingsPage";
import AnalyticsPage from "./pages/admin/AnalyticsPage";

function App() {
  return (
    <CartContext>
      <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<ProductManagement />} /> 
              <Route path="/admin/orders" element={<OrderManagement />} /> 
              <Route path="/admin/users" element={<UserPage />} /> 
              <Route path="/admin/settings" element={<SettingsPage />} /> 
              <Route path="/admin/analytics" element={<AnalyticsPage />} />
            </Routes>
          </div>

          <div className="App">
            <TopHeader />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </div>

          <Footer />
        </Router>
      </CartProvider>
    </CartContext>
  );
}

export default App;