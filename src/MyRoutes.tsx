import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MyNavbar from "./components/Navbar/MyNavbar";
import Add from "../src/Admin/Add";
import Edit from "../src/Admin/Edit";
import List from "../src/Admin/List";
import Blog from "./components/Blog/BLog";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MainLayout from "./layouts/MainLayout";
import ProductList from "./components/ProdList/ProdList";
import Admin from "./Admin/Admin";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<List />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
          <Route path="/add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
