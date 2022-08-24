import React from "react";
import styled from "styled-components"

import SpaceMovie from "../Img/KakaoTalk_Video_2022-08-24-19-13-27.mp4"
import CityBackPhoto from "../Img/w-genesis-kr-the-brand-vision-and-mission-04-1920x960_re.webp"
import DrivePhoto from "../Img/w-genesis-kr-the-brand-our-way-04-1920x960_re.webp"
import FuturePhoto from "../Img/w-genesis-kr-the-brand-genesis-design-05-1920x960_re.webp"
import DesignMovie from "../Img/KakaoTalk_Video_2022-08-24-20-46-33.mp4"
import GlanceDesign from "../Img/genesis-kr-the-brand-tab-crestgrill_m.webp"
import LineUp from "../Img/genesis-kr-the-brand-lineup-10-desktop-1920x960-ko.webp"

import Footer from "./Footer";

function Brand() {


    return(
        <>
            <BrandWrap>
                <BrandTop autoPlay loop muted preload="none">
                    <VideoSource src={SpaceMovie} type="video/mp4"></VideoSource>
                </BrandTop>
                <ShadowDiv>
                    <TitleBox>
                        <TitleSpan>GENESIS</TitleSpan>
                        <SubSpan>제네시스라는 이름에는 열망의 창조,</SubSpan>
                        <SubSpan>새로운 시작과 긍정적인 변화를 향한 우리의 염원이</SubSpan>
                        <SubSpan> 담겨 있습니다.</SubSpan>
                    </TitleBox>
                </ShadowDiv>
                <CityBack>
                    <PhotoTextWrap>
                        <TitleText>OUR VISION AND MISSION</TitleText>
                        <ConTextWrap>
                            <ConText>우리는 자신만의 취향과 안목을 가진 사람들을 위해 최상의</ConText>
                            <ConText>자동차를 만들고, 그를 통해 삶의 긍정적인 변화를 만들어내는</ConText>
                            <ConText>것을 목표로 하고 있습니다.</ConText>
                        </ConTextWrap>
                    </PhotoTextWrap>
                </CityBack>
                <DriveBack>
                    <PhotoTextWrap02>
                        <TitleText>OUR WAY</TitleText>
                        <ConTextWrap>
                            <ConText>새로운 길을 끊임없이, 그렇지만 사려 깊은 방식으로 탐험하는</ConText>
                            <ConText>것이 진정으로 매력적인 것을 만들어내는 우리만의 방식입니다.</ConText>
                        </ConTextWrap>
                    </PhotoTextWrap02>
                </DriveBack>
                <FutureBack>
                    <PhotoTextWrap02>
                        <TitleText>DESIGN</TitleText>
                        <SpecialText>Athletic elegance</SpecialText>
                        <ConTextWrap>
                            <ConText02>대담하고, 진보적이면서 가장 한국적, 이 세가지 키워드가 제네시스 디자인을 정의합니다. 마치 고급</ConText02>
                            <ConText02>식당의 쉐프처럼 역동성과 우아함을 재료로, 각 모델에 알맞는 기품있는 디자인을 선보입니다.</ConText02>
                        </ConTextWrap>
                    </PhotoTextWrap02>
                </FutureBack>
                <DesignVideoWrap>
                    <AnotherTextWrap>
                        <GlanceSub>Genesis Design</GlanceSub>
                    </AnotherTextWrap>
                <DesignTop autoPlay loop muted preload="none" controls>
                    <VideoSource src={DesignMovie} type="video/mp4"></VideoSource>
                </DesignTop>
                <PlayButton>
                    <PlayTriangle></PlayTriangle>
                </PlayButton>
                </DesignVideoWrap>
                <GlanceWrap>
                    <GlanceTextWrap>
                        <GlanceTitle>At a Glance</GlanceTitle>
                        <GlanceSub>Genesis Design</GlanceSub>
                    </GlanceTextWrap>
                    <Glance/>
                    <GlanceInfoWrap>
                        <InfoBox>
                            <InfoText>CREST GRILLE</InfoText>
                        </InfoBox>
                        <InfoBox>
                            <InfoText>QUAD LAMPS</InfoText>
                        </InfoBox>
                        <InfoBox>
                            <InfoText>PARABOLIC LINE</InfoText>
                        </InfoBox>
                        <InfoBox>
                            <InfoText>BEAUTY OF WHITE SPACE</InfoText>
                        </InfoBox>
                    </GlanceInfoWrap>
                    <InfoText>명가의 휘장에서 영감을 받은 제네시스 엠블럼은 크레스트 그릴로 진화하여 럭셔리에 대한 진정성을 나타냅니다.</InfoText>
                </GlanceWrap>
                <YoutubeFrame>
                    <YoutubeTitleWrap>
                        <YoutubeTitle> Talking Design with </YoutubeTitle>
                        <YoutubeTitle> Genesis CCO Luc Donckerwolke </YoutubeTitle>
                    </YoutubeTitleWrap>
                    <YoutubeContent frameBorder={0} src={"https://www.youtube.com/embed/HyZcly54V90?controls=1&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&wmode=transparent&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.genesis.com&widgetid=1"}/>
                </YoutubeFrame>
                <GenesisLineUpWrap>
                    <PhotoTextWrap03>
                        <TitleText>MODELS & LINE-UP</TitleText>
                        <ConTextWrap>
                            <ConText>우리는 다양하고 개성 있는 상품들을 만들고 있습니다.</ConText>
                            <ConText>제네시스의 차량들은 브랜드와 고객을 이어주는 매개체이며,</ConText>
                            <ConText>개인과 세상을 이어주는 연결고리입니다.</ConText>
                        </ConTextWrap>
                    </PhotoTextWrap03>
                </GenesisLineUpWrap>
            </BrandWrap>
            <FooterWrap>
            <Footer></Footer>
            </FooterWrap>
        </>
    )

}

const BrandWrap = styled.div`
    width: 100%;
    position: relative;
`

const ShadowDiv = styled.div`
    width: 100%;
    height: 900px;
    position: absolute;
    top: 68px;
    z-index: 2;
    /* border: 1px solid white; */
    background-color: rgba( 0, 0, 0, 0.5 );
    box-shadow: inset 0 0 100px #111;
`

const BrandTop = styled.video`
    width: 100%;
    height: 900px;
    /* border: 1px solid white; */
    position: absolute;
    object-fit: cover;
    top: 68px;
    left: 0px;
    z-index: -3;
`

const VideoSource = styled.source`
    width: 100%;
    height: 100%;
    /* border: 1px solid white; */
`

const TitleBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-left: 320px;
    margin-top: 80px;
`

const TitleSpan = styled.span`
    color: white;
    font-size: 80px;
    font-weight: 700;
    font-family: "genesis";
`

const SubSpan = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 500;
    font-family: "genesis";
`

const CityBack = styled.div`
    width: 100%;
    height: 900px;
    background-image: url(${CityBackPhoto});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 1300px;
`

const DriveBack = styled.div`
    width: 100%;
    height: 900px;
    background-image: url(${DrivePhoto});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 2600px;
`

const FutureBack = styled.div`
    width: 100%;
    height: 900px;
    background-image: url(${FuturePhoto});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 3900px;
`

const DesignVideoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
`

const AnotherTextWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 70px;
    position: absolute;
    top: 5050px;
`

const DesignTop = styled.video`
    width: 100%;
    height: 900px;
    /* border: 1px solid white; */
    position: absolute;
    object-fit: cover;
    top: 5200px;
    left: 0px;
    z-index: -3;
`

const PlayButton = styled.div`
    width: 100px;
    height: 100px;
    background-color: rgb(0, 0, 0, 0.5);
    border: 1px solid white;
    border-radius: 100%;
    position: absolute;
    top: 5600px;
    left: 1000px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: rgb(225, 225, 225, 0.5);
    }
`

const PlayTriangle = styled.div`
    width: 0; 
    height: 0; 
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid white;
    :hover{
        border-left: 20px solid black;
    }
`

const GlanceWrap = styled.div`
    width: 100%;
    height: 711px;
    position: absolute;
    top: 6400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
`

const Glance = styled.div`
    width: 1621px;
    height: 711px;
    background-image: url(${GlanceDesign});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const GlanceTextWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 70px;
`

const GlanceTitle = styled.span`
    color: white;
    font-size: 25px;
    font-family: "genesis";
    font-weight: 500;
`

const GlanceSub = styled.span`
    color: white;
    font-size: 50px;
    font-family: "genesis";
    font-weight: 500;
`

const GlanceInfoWrap = styled.div`
    padding: 40px;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoBox = styled.div`
    border-bottom: 0.5px solid gray;
    padding: 20px 0;
    width: 400px;
`

const InfoText = styled.span`
    color: gray;
    font-size: 18px;
    font-weight: 400;
`


const YoutubeFrame = styled.div`
    width: 100%;
    position: absolute;
    top: 7500px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
`

const YoutubeContent = styled.iframe`
    width: 100%;
    height: 1080px;
`

const YoutubeTitle = styled.span`
    color: white;
    font-size: 45px;
`

const YoutubeTitleWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-bottom: 80px;
`

const GenesisLineUpWrap = styled.div`
    width: 100%;
    height: 960px;
    background-image: url(${LineUp});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 9200px;
`

const PhotoTextWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    position: absolute;
    top: 110px;
    left: 1200px;
`

const PhotoTextWrap02 = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    position: absolute;
    top: 110px;
    left: 120px;
`

const PhotoTextWrap03 = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    position: absolute;
    top: 350px;
    left: 120px;
`

const TitleText = styled.span`
    color: white;
    font-size: 24px;
    font-weight: 500;
`

const SpecialText = styled.span`
    color: white;
    font-size: 70px;
    font-weight: 700;
`

const ConTextWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`

const ConText = styled.span`
    color: white;
    font-size: 28px;
    font-weight: 500;
`

const ConText02 = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 500;
`

const FooterWrap = styled.div`
    position: absolute;
    top: 10300px;
`

export default Brand