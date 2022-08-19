import React from "react";
import styled from "styled-components";

import G70Thumbnail from "../Img/ik-sb-22lc-gnb-thumnnail-list.webp";

function Card() {
  return (
    <>
      <CardBackground>
        <CardTitleWrap>
          <div>
            <ProductName>G70</ProductName>
          </div>
          <div>
            <ProductNick>SHOOTHING BRAKE</ProductNick>
          </div>
        </CardTitleWrap>
        <div>
          <ThumbNail></ThumbNail>
        </div>
        <div>
          <DetailViewBox>
            <DetailViewText>자세히 보기</DetailViewText>
          </DetailViewBox>
        </div>
      </CardBackground>
    </>
  );
}

const CardBackground = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 18px;

  border: 1px solid white;
  margin-top: 200px;
`;

const CardTitleWrap = styled.div`
    width: 300px;
    height: auto;
`

const ProductName = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.0667em;
  font-family: "genesis";
`;

const ProductNick = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 200;
  line-height: 1.0667em;
  font-family: "genesis";
`;

const DetailViewBox = styled.div`
  width: 270px;
  height: 38px;
  background-color: black;
  text-align: center;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 43px;
`;

const DetailViewText = styled.span`
  color: white;
  font-family: "genesis";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const ThumbNail = styled.div`
  background-image: url(${G70Thumbnail});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 267px;
  height: 101px;
  margin-top: 43px;
`;

export default Card;
