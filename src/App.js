import { BrowserRouter as Router,Routes,Route } from "react-router";

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
import ProductList from "./pages/productlist";




function App() {
  return (
    <CartContext>
      <CartProvider>
      <Router>
      <div className="App">
        <TopHeader />
        <Navbar />
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/products" element={<ProductPage />} />
          <Route path="/" element={<ProductList />} /> 
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path= "/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/privacy" element={<Privacy />}/>
          <Route path="/terms" element={<TermsOfService />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
      </CartProvider>
    </CartContext>
  
      
  
  );
}

export default App;