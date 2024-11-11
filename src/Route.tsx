import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./main-layout";
import Navbar from "./navbar";
import Cart from "./cart";
import Carts from "./carts";
import Footer from "./footer";
import SiteBar from "./site_bar";
import Login from "./login";
import LoginNav from "./loginNav";
import LoginPage from "./loginPage";
import LoginCode from "./loginCode";
import AuthContextProvider from "./context";
import Single from "./single";
import ProductDetails from "./single";
import { Switch } from "antd";

const Router = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}>
            <Route path="loginNavbar" element={<LoginNav />} />
            <Route path="loginPage" element={<LoginPage />} />
          </Route>
          <Route path="loginCode" element={<LoginCode />}>
            <Route path="loginNavbar" element={<LoginNav />} />
          </Route>
          
          <Route path="carts" element={<Carts />}/>
            <Route path="sitebar" element={<SiteBar />} />
           
            <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="navbar" element={<Navbar />} />
            <Route path="sitebar" element={<SiteBar />} />
            <Route path="cart" element={<Cart />} />
            <Route path="carts" element={<Carts />} />
            <Route path="footer" element={<Footer />} />

            {/* <Route path="/product/:id" element={<Single />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default Router;
