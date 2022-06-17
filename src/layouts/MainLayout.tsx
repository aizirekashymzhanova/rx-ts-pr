import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

import MyNavbar from "../components/Navbar/MyNavbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
