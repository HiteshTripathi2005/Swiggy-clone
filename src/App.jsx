import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import RestaurantPage from "./pages/RestaurantPage";
import UnderDevelopment from "./pages/UnderDevelopment";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/making" element={<UnderDevelopment />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
