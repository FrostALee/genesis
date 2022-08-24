import React from "react";
import styled from "styled-components"

import GV80Thumbnail from "../Img/genesis-kr-admin-model-list-thumbnail-gv80-desktop-630x240-ko.webp"
import GV70Thumbnail from "../Img/JK_GNB_Thumbnail.webp"
import GV70Thumbnail02 from "../Img/genesis-kr-admin-model-list-thumbnail-electrified-gv70-desktop-630x240-ko.webp"

function ProductModal() {

    const CardData = [
        { Model: 'GV80',
          Photo: GV80Thumbnail
        },
        { Model: 'GV70',
          Photo: GV70Thumbnail
        },
        { Model: 'GV70',
          Photo: GV70Thumbnail02
        }
    ]

    return(
        <>
            <ProductModalWrap>
                <AbsoluteModal>
                    <LeftDiv>
                        <ModelSpanTitle>모델</ModelSpanTitle>
                        <ModelSpan>ALL</ModelSpan>
                        <ModelSpan>SEDAN</ModelSpan>
                        <ModelSpan>SUV</ModelSpan>
                    </LeftDiv>
                    <RightDiv>
                        {CardData.map((list, idx) => {
                            return(
                            <ModelCard key={idx}>
                                <TitleDiv>
                                    <TitleSpan>{list.Model}</TitleSpan>
                                </TitleDiv>
                                <Tunmbnail style={{backgroundImage:`url(${list.Photo})`}}/>
                                <DetailButton>
                                    <span>자세히 보기</span>
                                </DetailButton>
                                <QuickDivWrap>
                                    <QuickDiv>
                                        <QuickMenu>견적 내기</QuickMenu><QuickSnap></QuickSnap>
                                    </QuickDiv>
                                    <QuickDiv>
                                        <QuickMenu>시승 신청</QuickMenu><QuickSnap></QuickSnap>
                                    </QuickDiv>
                                </QuickDivWrap>
                            </ModelCard>
                            )
                        })}
                        
                    </RightDiv>
                </AbsoluteModal>
            </ProductModalWrap>
        </>
    )

}



const ProductModalWrap = styled.div`
    position: relative;
    width: 100%;
    z-index: 10;
    top: 40px;
    left: -440px;

`

const AbsoluteModal = styled.div`
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    gap: 240px;
    width: 1920px;
    padding: 150px;
    background-color: #171717;
`

const LeftDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    border-right: 0.5px solid #515151;
    padding: 15px 90px;
    gap: 30px;
`

const ModelSpanTitle = styled.span`
    color: white;
    font-family: "genesis";
    font-weight: 700;
    font-size: 25px;
`

const ModelSpan = styled.span`
    color: white;
    font-family: "genesis";
    cursor: pointer;
`

const RightDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
`

const ModelCard = styled.div`
    width: 310px;
    height: 392px;
    padding: 27px 30px 23px;
    /* border: 1px solid white; */
    gap: 40px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    :hover{
        transition: all 0.25s ease-in-out;
        background-color: #212121;
    }
`

const TitleDiv = styled.div`
    width: 100%;
`

const TitleSpan = styled.span`
    font-family: "genesis";
    color: white;
    font-size: 35px;
    font-weight: 500;

`

const Tunmbnail = styled.div`
    width: 100%;
    height: 120px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const DetailButton = styled.div`
    width: 100%;
    height: 50px;
    border: 1.5px solid white;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "genesis";
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    :hover{
        transition: all 0.25s ease-in-out;
        color: black;
        background-color: white;
    }
`

const QuickMenu = styled.span`
    color: white;
    font-family: "genesis";
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
`

const QuickSnap = styled.div`
    width: 8px;
    height: 8px;
    border: 1.5px solid white;
    transform: rotate(45deg);
    border-bottom: none;
    border-left: none;
`

const QuickDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
`

const QuickDivWrap = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;   
`

export default ProductModal