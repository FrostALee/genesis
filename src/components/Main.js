import React from "react";
import styled from "styled-components"

import SlideBox from "../components/SlideBox";
import Models from "../components/Models"
import RolePage from "../components/RolePage";
import Functional from "../components/Funtional";
import NeerContent from "../components/NeerContent";
import Footer from "../components/Footer";

function Main () {

    return(
        <>
        <SlideBox/>
        <Models/>
        <RolePage/>
        <Functional/>
        <NeerContent/>
        <Footer/>
        </>
    )

}

export default Main