import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { Regsiter } from "./pages/login/Register";
import { Account } from "./pages/account/Account";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="App">
      {isLoggedIn && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Regsiter />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      {!isLoggedIn && <Login />}
      <ToastContainer />
    </div>
  );
}

export default App;
