import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import Image01 from "../Img/genesis-main-keyvisual-g70-sb-main-hero-desktop-2560x900-2.jpeg"
import Image02 from "../Img/genesis-main-keyvisual-gv70-22my-main-hero-desktop-2560x900-1.webp"
import Image03 from "../Img/genesis-main-keyvisual-electrified-gv70-main-hero-01-desktop-2560x900.jpeg"
import Image04 from "../Img/genesis-main-keyvisual-g90-main-hero-01-desktop-2560x900-ko.webp"
import Image05 from "../Img/genesis-main-keyvisual-gv60-main-hero-01-desktop-2560x900-kr.webp"
import Image06 from "../Img/genesis-main-keyvisual-futuring-genesis-pc-2560x900-kr.jpeg"
import Image07 from "../Img/genesis-main-keyvisual-electrified-g80-main-hero-desktop-2560x900-kr.webp"


function SlideBox () {

    const SlideRef = useRef(null);
    const [slide, setSlide] = useState(0);
    
    const TotalSlide = 6;
    

    const NextSlide = () => {
        if(slide >= 6) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }
    
    const PrevSlide = () => {
        setSlide(slide - 1)
        if(slide === 6) {
            setSlide(slide - 1)
        } else if(slide <= 0 ){
            setSlide(6)
        }
    }

    useEffect(() => {
        SlideRef.current.style.transition = 'all 0.75s ease-in-out'
        SlideRef.current.style.transform = `translateX(-${slide}00%)`

        document.addEventListener("drag", event => {
            NextSlide()
        })
    })

    return(
        <AllWrap>
            <SlideWrap >

                <SlideBoxWrap >

                        <TextBox style={{display : slide === 0 ? "" : "none"}}>
                            <TitleText>GENESIS</TitleText>
                            <TitleName>G70 SHOOTING BRAKE</TitleName>
                            <TitleSub>온전히 나답게</TitleSub>
                        </TextBox>
                        <TextBox style={{display : slide === 1 ? "" : "none"}}>
                            <TitleText>GENESIS</TitleText>
                            <TitleName>GV70</TitleName>
                            <TitleSub>2022년형 출시</TitleSub>
                        </TextBox>
                        <TextBox style={{display : slide === 2 ? "" : "none"}}>
                            <TitleText>GENESIS</TitleText>
                            <TitleName>GV70</TitleName>
                            <TitleSub>또 다른 감동을 충전하는 시간</TitleSub>
                        </TextBox>
                        <TextBox style={{display : slide === 3 ? "" : "none"}}>
                            <TitleText>GENESIS</TitleText>
                            <TitleName>G90</TitleName>
                            <TitleSub>한국자동차기자협회 2022 올해의 차 수상</TitleSub>
                        </TextBox>
                        <TextBox style={{display : slide === 4 ? "" : "none"}}>
                            <TitleText>GENESIS</TitleText>
                            <TitleName>GV60</TitleName>
                            <TitleSub>당신과의 교감을 위해</TitleSub>
                        </TextBox>
                        <TextBox style={{display : slide === 5 ? "" : "none"}}>
                            <TitleText>미래를 향한 대담한 비전</TitleText>
                            <TitleName>FUTURING GENESIS</TitleName>
                        </TextBox>
                        <TextBox style={{display : slide === 6 ? "" : "none"}}>
                            <TitleText>GENESIS</TitleText>
                            <TitleName>G80</TitleName>
                            <TitleSub>전기차 그 이상의 시작</TitleSub>
                        </TextBox>

                    <SlideBoxWrap01 ref={SlideRef}>
                        <Image src={Image01} />
                        <Image src={Image02} />
                        <Image src={Image03} />
                        <Image src={Image04} />
                        <Image src={Image05} />
                        <Image src={Image06} />
                        <Image src={Image07} />
                    </SlideBoxWrap01>

                        <DetailBox style={{display : slide === 5 ? "none" : ""}}>
                            <TextDetail>더 알아보기</TextDetail>
                            <TextDetail>견적내기</TextDetail>
                        </DetailBox>
                        <DetailBox style={{display : slide === 5 ? "" : "none"}}>
                            <TextDetail>더 알아보기</TextDetail>
                            <TextDetail>영상보기</TextDetail>
                        </DetailBox>

                </SlideBoxWrap>

                <ButtonBox>

                    <LeftButtonDiv onClick={() => {PrevSlide()}}>
                        <PrevButton/>
                    </LeftButtonDiv>

                    <CircleButton style={{backgroundColor : slide === 0 ? "transparent" : "", border: slide === 0 ? "3px solid white" : ""}}/>
                    <CircleButton style={{backgroundColor : slide === 1 ? "transparent" : "", border: slide === 1 ? "3px solid white" : ""}}/>
                    <CircleButton style={{backgroundColor : slide === 2 ? "transparent" : "", border: slide === 2 ? "3px solid white" : ""}}/>
                    <CircleButton style={{backgroundColor : slide === 3 ? "transparent" : "", border: slide === 3 ? "3px solid white" : ""}}/>
                    <CircleButton style={{backgroundColor : slide === 4 ? "transparent" : "", border: slide === 4 ? "3px solid white" : ""}}/>
                    <CircleButton style={{backgroundColor : slide === 5 ? "transparent" : "", border: slide === 5 ? "3px solid white" : ""}}/>
                    <CircleButton style={{backgroundColor : slide === 6 ? "transparent" : "", border: slide === 6 ? "3px solid white" : ""}}/>

                    <RightButtonDiv onClick={() => {NextSlide()}}>
                        <NextButton />
                    </RightButtonDiv>

                </ButtonBox>

            </SlideWrap>
        </AllWrap>
    )
}

const AllWrap = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 60px;
    /* position: relative; */
`

const SlideWrap = styled.div`
    display: flex;
    width: 100%;
    height: 750px;
    /* overflow: hidden; */
    margin: 0 auto;
    cursor: grab;
`

const SlideBoxWrap = styled.div`
    display: block;
    width: 100%;
    height: 750px;
    /* position: relative; */
`

const SlideBoxWrap01 = styled.div`
    display: flex;
    max-width: 100%;
    min-width: 720px;
    min-height: 750px;
    max-height: 1080px;
    z-index: -1;
`

const TextBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-top: 100px;
    font-family: "genesis";
    font-weight: normal;
    line-height: 1.0667em;
    letter-spacing: -0.025em;
    word-break: keep-all;
    word-wrap: break-word;
    padding-left: 226px;
    position: absolute;
    width: 100%;
    z-index: 2;
`

const DetailBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 70px;
    font-family: "genesis";
    font-weight: normal;
    line-height: 1.0667;
    letter-spacing: -0.025em;
    word-break: keep-all;
    word-wrap: break-word;
    padding-left: 226px;
    position: absolute;
    top: 570px;
    width: 100%;
`


const TitleText = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    color: white;
    /* margin-left: 60px; */
    margin-block-start: 0.83em;
    /* margin-block-end: 0.83em; */
    margin-inline-start: 0px;
    margin-inline-end: 0px;

`

const TitleName = styled.span`
    font-size: 60px;
    font-weight: 500;
    line-height: 21px;
    color: white;
    /* margin-left: 60px; */
    margin-block-start: 30px;
    margin-block-end: 30px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

`

const TitleSub = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    color: white;
    /* margin-left: 60px; */
    /* margin-block-start: 0.83em; */
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`



const TextDetail = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.0667;
    color: white;
    cursor: pointer;
`

const ButtonBox = styled.div`
    /* border: 1px solid white; */
    line-height: 1.0667;
    letter-spacing: -0.025em;
    word-break: keep-all;
    word-wrap: break-word;
    /* padding-left: 226px; */
    position: absolute;
    top: 670px;
    left: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const CircleButton = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #847e7f;
`

const PrevButton = styled.div`
    width: 8px;
    height: 8px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(45deg);
`

const NextButton = styled.div`
    width: 8px;
    height: 8px;
    border-right: 3px solid white;
    border-top: 3px solid white;
    transform: rotate(45deg);
`

const LeftButtonDiv = styled.div`
    width: 10px;
    height: 10px;
    padding: 10px;
    /* border: 1px solid white; */
    margin-right: 20px;
    cursor: pointer;
`

const RightButtonDiv = styled.div`
    width: 10px;
    height: 10px;
    padding: 10px;
    margin-left: 20px;
    /* border: 1px solid white; */
    cursor: pointer;
`

export default SlideBox