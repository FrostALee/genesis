import React from "react";
import styled from "styled-components";

import G70Thumbnail from "../Img/ik-sb-22lc-gnb-thumnnail-list.webp";
import G70Thumbnail02 from "../Img/genesis-kr-admin-model-list-thumbnail-g70-desktop-630x240-ko.webp"
import G80Thumbnail from "../Img/genesis-kr-admin-model-list-thumbnail-electrified-g80-desktop-630x240-ko.webp"
import G80Thumbnail02 from "../Img/genesis-kr-admin-model-list-thumbnail-g80-desktop-630x240-ko.webp"
import G90Thumbnail from "../Img/genesis-kr-admin-model-list-thumbnail-g90-desktop-630x240-ko.webp"
import GV60Thumbnail from "../Img/genesis-kr-admin-model-list-thumbnail-gv60-desktop-630x240-ko.webp"
import GV70Thumbnail from "../Img/genesis-kr-admin-model-list-thumbnail-electrified-gv70-desktop-630x240-ko.webp"
import GV70Thumbnail02 from "../Img/JK_GNB_Thumbnail.webp"
import GV80Thumbnail from "../Img/genesis-kr-admin-model-list-thumbnail-gv80-desktop-630x240-ko.webp"


function Card() {


    const ModelInfo = [
        { Name: 'G70',
          Nick: 'SHOOTING BRAKE',
          Photo: G70Thumbnail},

        { Name: 'G70',
          Nick: '',
          Photo: G70Thumbnail02},

        { Name: 'G80',
          Nick: 'ELECTRIFIED',
          Photo: G80Thumbnail},
          
        { Name: 'G80',
          Nick: '',
          Photo: G80Thumbnail02},
          
        { Name: 'G90',
          Nick: '',
          Photo: G90Thumbnail},

        { Name: 'GV60',
          Nick: '',
          Photo: GV60Thumbnail},

        { Name: 'GV70',
          Nick: 'ELECTRIFIED',
          Photo: GV70Thumbnail},

        { Name: 'GV70',
          Nick: '',
          Photo: GV70Thumbnail02},

        { Name: 'GV80',
          Nick: '',
          Photo: GV80Thumbnail},
    ]

  return (
    <AllCardWrap>
      {ModelInfo.map((list, idx) => {
          return(
      <CardBackground key={idx}>
        <CardTitleWrap>
          <div>
            <ProductName>{list.Name}</ProductName>
          </div>
          <div>
            <ProductNick>{list.Nick}</ProductNick>
          </div>
        </CardTitleWrap>
        <DetailDiv>
        <TumbnailDiv>
          <ThumbNail style={{backgroundImage:`url(${list.Photo})`}}/>
        </TumbnailDiv>
          <DetailViewBox>
            <DetailViewText>자세히 보기</DetailViewText>
          </DetailViewBox>
        </DetailDiv>
      </CardBackground>
        )
        })}  
    </AllCardWrap>
  );
}

const AllCardWrap = styled.div`
    display: flex;
    gap: 40px;
`

const CardBackground = styled.div`
  width: 447px;
  height: 429px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: #151515;

  :hover{
    transition: all 0.25s ease;
    background-color: #202020;
    transition-property: background-color;
    transition-timing-function: ease-in-out;
  }
`;

const CardTitleWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 330px;
    height: 50px;
    gap: 10px;
`

const ProductName = styled.span`
  color: white;
  font-size: 35px;
  font-weight: 300;
  line-height: 1.0667em;
  font-family: "genesis";
`;

const ProductNick = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 200;
  line-height: 1.0667em;
  font-family: "genesis";
`;

const DetailViewBox = styled.div`
  width: 350px;
  height: 55px;
  background-color: #141414;
  text-align: center;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 43px;
  padding: 5px;
  color: white;
  cursor: pointer;

  :hover{
      transition: background-color, color 0.25s ease-in-out;
      background-color: white;
      color: black;
  }
`;

const DetailViewText = styled.span`
  font-family: "genesis";
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
`;

const ThumbNail = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 367px;
  height: 139px;
  margin-top: 40px;
`;

const DetailDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    top: 0;

    :hover {
    transition: top 0.25s ease-in-out;
    top: -10px;
    }
`

const TumbnailDiv = styled.div`
    width: 100%;
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Card;
