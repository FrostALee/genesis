import  React from "react"
import styled from "styled-components"
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import SlideBox from "./components/SlideBox";
import Models from "./components/Models"
import RolePage from "./components/RolePage";
import Functional from "./components/Funtional";
import NeerContent from "./components/NeerContent";
import Footer from "./components/Footer";
import BrandModal from "./components/BrandModal";
import ProductModal from "./components/ProductModal";
import Brand from "./components/Brand";
import Main from "./components/Main";

import "./App.css"


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/brand" element={<Brand/>}></Route>
    </Routes>
    </>
  );
}

export default App;
