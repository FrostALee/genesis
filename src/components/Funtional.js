import React from "react";
import styled from "styled-components";

import FunctionalImage01 from "../Img/genesis-kr-main-space-15-desktop-960x540-ko.webp"
import FunctionalImage02 from "../Img/genesis-kr-main-road-trip-16-desktop-960x540-ko.webp"
import EventImage from "../Img/genesis-kr-main-genesis-events-17-desktop-1920x960-ko.jpeg"

function Functional() {

    const FunctionalArr = [
        {
            Photo: FunctionalImage01,
            Title: '스페이스',
            Sub: '제네시스의 디자인과 고유한 감각을 반영한 현대적 공간으로 여러분을 초대합니다. 제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.'
        },
        {
            Photo: FunctionalImage02,
            Title: '로드트립',
            Sub: '제네시스와 내셔널지오그래픽 트래블러와 함께하는 서사적 여행, 제네시스 로드트립을 통해 자세한 정보를 확인하세요.'
        }
    ]

    return(
        <>
        <FunctionalAllWrap>
            <ProductFunctionalWrap>
            {FunctionalArr.map((list, idx) => {
                return(
                    <ProductFunctionalLeft key={idx} style={{backgroundImage:`url(${list.Photo})`}}>
                        <FunctionalTextBox>
                            <FunctionalTitle>{list.Title}</FunctionalTitle>
                            <FunctionalSubWrap>
                                <FunctionalSub>{list.Sub}</FunctionalSub>
                            </FunctionalSubWrap>
                                <FuntionalDetailWrap>
                                    <span>자세히 보기</span><ArrowDetail/>
                                </FuntionalDetailWrap>
                        </FunctionalTextBox>
                    </ProductFunctionalLeft>
                )
            })}
            </ProductFunctionalWrap>

            <EventWrap>
                <EventPhotoDiv>
                    <TextDiv>
                    <EventTitle>GENESIS EVENTS</EventTitle>
                    <EventSub>제네시스에서 진행중인 다양한 이벤트를 소개합니다.</EventSub>
                    </TextDiv>
                    <DetailButton>
                        <DetailView>이벤트 보기</DetailView>
                    </DetailButton>
                </EventPhotoDiv>
            </EventWrap>




        </FunctionalAllWrap>

        </>
    )
} 

const FunctionalAllWrap = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 200px;
    /* border: 1px solid white; */
`

const ProductFunctionalWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`

const ProductFunctionalLeft = styled.div`
    width: 1020px;
    height: 560px;
    position: relative;
    display: flex;
    background-color: rgb(0 0 0 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    ::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.50);
}
`


const FunctionalTextBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding-left: 80px;
    margin-top: -70px;
    /* border: 1px solid white; */
    position: relative;
    font-family: "genesis";
    gap: 50px;
`

const FunctionalTitle = styled.span`
    color: white;
    font-size: 65px;
    font-weight: 400;
    line-height: 21px;
`

const FunctionalSubWrap = styled.div`
    width: 560px;
    word-break: keep-all;
`

const FunctionalSub = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
`

const FuntionalDetailWrap = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
    width: 120px;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ArrowDetail = styled.div`
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    border: 1.5px solid white;
    border-bottom: none;
    border-left: none;
`

const EventWrap = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 280px;
    margin-bottom: 280px;
`

const EventPhotoDiv = styled.div`
    width: 100%;
    height: 960px;
    background-image: url(${EventImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

const TextDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    top: 370px;
    left: 150px;
    gap: 80px;
`

const EventTitle = styled.span`
    color: white;
    font-size: 70px;
    font-weight: 400;
    line-height: 30px;
    font-family: "genesis";
`

const EventSub = styled.span`
    color: white;
    font-size: 35px;
    font-weight: 400;
    line-height: 30px;
    font-family: "genesis";
`

const DetailButton = styled.div`
    width: 240px;
    height: 56px;
    border: 1px solid white;
    position: absolute;
    top: 590px;
    left: 150px;
    background-color: transparent;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover{
        transition: all 0.5s ease-in;
        background-color: white;
        color: black;
    }
`

const DetailView = styled.span`
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    font-family: "genesis";
`

export default Functional
