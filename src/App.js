import  React from "react"
import styled from "styled-components"
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import SlideBox from "./components/SlideBox";
import Models from "./components/Models"

import "./App.css"


function App() {
  return (
    <>
    <Header/>
    <SlideBox/>
    <Models/>
    </>
  );
}

export default App;
