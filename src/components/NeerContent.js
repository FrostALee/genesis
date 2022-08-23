import React from "react";
import styled from "styled-components";

import ContentImage01 from "../Img/genesis-kr-main-related-event-27-desktop-630x404-ko.webp"
import ContentImage02 from "../Img/genesis-kr-main-related-digital-services-28-desktop-630x404-ko.webp"
import ContentImage03 from "../Img/genesis-kr-main-related-members-29-desktop-630x404-ko.webp"


function NeerContent() {

    const NeerList = [
        {
            Title: '이벤트',
            Sub: '제네시스에서 진행중인 다양한 이벤트 정보를 전해 드립니다.',
            Photo: ContentImage01
        },
        {
            Title: '디지털 서비스',
            Sub: '제네시스의 디지털 서비스는 첨단 신기술로 당신과 차가 함께 하는 일상에 편리함을 한층 더해줍니다. ',
            Photo: ContentImage02
        },
        {
            Title: '멤버스',
            Sub: '제네시스 오너분들께만 주어지는 특별한 혜택과 이상적인 경험을 선사합니다.',
            Photo: ContentImage03
        },
    ]

    return(
        <>
        <NeerAllWrap>
            <TitleDiv>
                <NeerTitle>연관 컨텐츠</NeerTitle>
            </TitleDiv>
            <ContentWrap>
                {NeerList.map((list, idx) => {
                    return(
                    <ContentCardWrap key={idx}>
                     <CardTumbnail style={{backgroundImage:`url(${list.Photo})`}}/>
                     <CardTitle>{list.Title}</CardTitle>
                     <CardSubWrap>
                         <CardSub>{list.Sub}</CardSub>
                     </CardSubWrap>
                     <DetailWrap>
                        <DetailView>자세히 보기</DetailView><DetailArrow/>
                     </DetailWrap>
                    </ContentCardWrap>
                    )
                })}
            </ContentWrap>
        </NeerAllWrap>
        </>
    )

}

const NeerAllWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 120px 0px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const TitleDiv = styled.div`
    margin: 70px 0px 50px 0px;
`

const NeerTitle = styled.span`
    font-family: "genesis";
    font-size: 40px;
    font-weight: bolder;
    line-height: 30px;
`

const ContentWrap = styled.div`
    width: 100%;
    padding: 20px;
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const ContentCardWrap = styled.div`
    width: 513px;
    height: 494px;
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
`

const CardTumbnail = styled.div`
    width: 100%;
    height: 329px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const CardTitle = styled.span`
    font-family: "genesis";
    font-size: 23px;
    font-weight: bold;
    line-height: 30px;
`

const CardSubWrap = styled.div`
    width: 100%;
    height: 50px;
`

const CardSub = styled.span`
    font-family: "genesis";
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
`
const DetailWrap = styled.div`
    width: 110px;    
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const DetailView = styled.span`
    font-family: "genesis";
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
    border-bottom: 1.5px solid black;
`

const DetailArrow = styled.div`
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    border: 1.5px solid black;
    border-bottom: none;
    border-left: none;
`


export default NeerContent