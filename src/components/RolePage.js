import React, {useRef, useEffect, useState} from "react"
import styled from "styled-components"

import RoleImage01 from "../Img/genesis-kr-main-reddot-award-22-4-desktop-1920x960.webp"
import RoleImage02 from "../Img/genesis-kr-main-jdpower-award-22-desktop-1920x960.webp"
import RoleImage03 from "../Img/genesis-kr-main-iihs-award-22-desktop-1920x960.webp"
import RoleImage04 from "../Img/genesis-kr-main-motortrend-award-22-desktop-1920x960.jpeg"
import RoleImage05 from "../Img/w-2021-KAJA-02.jpeg"
import RoleImage06 from "../Img/genesis-good-design-1920x960-06.jpeg"


function RolePage() {

    const RoleRef = useRef();
    const [slide, setSlide] = useState(0);
    
    const NextSlide = () => {
        if(slide >= 5) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }
  
    useEffect(() => {
        setTimeout(() => {NextSlide()}, 5000)
    })


    const TextInfo = [
        {Title: '제네시스, ‘2022 레드 닷 어워드’에서 4개 부문 수상',
        SubText: '제네시스가 독일 노르트하인 베스트팔린 디자인센터가 주관하는 ‘2022 레드 닷 어워드 : 브랜드 & 커뮤니케이션 디자인’에서 최우수상 1개, 본상 3개, 총 4개 디자인상을 수상하였습니다. 제네시스의 전용 전시관 ‘제네시스 수지’가 리테일 디자인 부문에서 ‘레드 닷 어워드 : 최우수상’을 수상했으며, ‘제네시스 스튜디오 안성’과 ‘제네시스 하우스 뉴욕’은 본상 수상, ‘제네시스 GV60 인스토어 캠페인 : Light & Wonder’은 ‘공간 커뮤니케이션’ 부문에서 본상을 수상하였습니다.'},
        {Title: 'J.D. POWER 2022 신차품질조사 프리미엄 브랜드 1위 달성',
        SubText: '2017년 처음으로 평가 대상으로 선정된 이후 6년 동안 꾸준히 프리미엄 브랜드 최상위권을 유지한 제네시스가 ‘2022년 신차품질조사’에서 1위를 달성했습니다. 동시에 G80가 최우수 품질상을 2년 연속 수상, G70와 GV70가 품질 우수 차종에 선정되었습니다. 제네시스는 앞으로도 최고의 차량을 위해 높은 품질 기술을 선보이겠습니다.'},
        {Title: '2022 IIHS Top Safety Pick+',
        SubText: '미국에서 판매하는 제네시스의 모든 차종이 안정성으로 최고 등급을 받았습니다. 미국 고속도로 안전보험협회(IIHS)가 발표한 충돌 평가에서 제네시스 G70, G80, G90, GV70, GV80가 ‘TSP+ 등급’을 획득했습니다. 특히 더 뉴 G70(2021년 6월 생산 이후)와 GV70는 4년 연속 ‘TSP+ 등급’에 오르며 안전성을 다시 한번 입증했습니다.'},
        {Title: '제네시스 GV70, 모터트렌드 올해의 SUV® 선정 (미국 사양 기준)',
        SubText: '제네시스 GV70가 미국 최고 권위의 자동차 전문지 모터트렌드에서 디자인, 엔지니어링, 효율성, 안전 등 모든 부문에서 우수한 평가를 받으며 2022 모터트렌드 올해의 SUV®(미국 사양 기준)로 최종 선정되었습니다. 2019 모터트렌드 올해의 차®로 G70의 선정에 이은 쾌거로 럭셔리 브랜드의 위상을 높였습니다.'},
        {Title: '한국자동차기자협회, 한국자동차전문기자협회 2021 올해의 차 수상',
        SubText: '제네시스 THE ALL-NEW G80가 한국자동차기자협회 및 한국자동차전문기자협회가 주관하는 ‘2021 올해의 차’로 선정되었습니다. 최고의 차량을 만들기 위해 노력하는 제네시스의 행보를 앞으로도 지켜봐주세요.'},
        {Title: '2020 GOOD DESIGN® AWARD',
        SubText: 'G80, GV80, 제네시스 인포테인먼트 시스템 카퍼 디자인 테마 3개 제품이 미국의 ‘2020 굿디자인® 어워드(2020 Good Design® Award)’에서 운송 디자인(Transportation Design) 부문 수상작으로 선정되었습니다.'}
    ]

    const PhotoRole = [
        {Image: RoleImage01},
        {Image: RoleImage02},
        {Image: RoleImage03},
        {Image: RoleImage04},
        {Image: RoleImage05},
        {Image: RoleImage06}
    ]

    const RoleText = [
        {RoleText: '2022 RED DOT AWARD',
         SlideNumber: 0},
        {RoleText: 'J.D POWER 2022 U.S INITIAL QUALITY STUDY',
         SlideNumber: 1},
        {RoleText: '2022 IHIS TOP SAFETY PICK+', 
         SlideNumber: 2},
        {RoleText: '2022 MOTORTREND SUV OF THE YEAR®', 
         SlideNumber: 3},
        {RoleText: 'KAJA / AWAK 2021 CAR OF THE YEAR', 
         SlideNumber: 4},
        {RoleText: '2020 GOOD DESIGN® AWARD', 
         SlideNumber: 5}
    ]

   
    return(
        <RoleAllWrap>
            <RolePageTopWrap>
                <RoleTitle>
                    <RolePageText>THE AWARDS</RolePageText>
                </RoleTitle>
            </RolePageTopWrap>
                <TextWrap>
                    <RoleTextWrap>
                        <TitlePTag style={{display : slide === 0 ? "" : "none"}}>
                            {TextInfo[0].Title}
                        </TitlePTag>
                        <SpanDiv>
                            <RoleSpan style={{display : slide === 0 ? "" : "none"}}>
                            {TextInfo[0].SubText}
                            </RoleSpan>
                        </SpanDiv>
                    </RoleTextWrap>
                    <RoleTextWrap>
                        <TitlePTag style={{display : slide === 1 ? "" : "none"}}>
                            {TextInfo[1].Title}
                        </TitlePTag>
                        <SpanDiv>
                            <RoleSpan style={{display : slide === 1 ? "" : "none"}}>
                            {TextInfo[1].SubText}
                            </RoleSpan>
                        </SpanDiv>
                    </RoleTextWrap>
                    <RoleTextWrap>
                        <TitlePTag style={{display : slide === 2 ? "" : "none"}}>
                            {TextInfo[2].Title}
                        </TitlePTag>
                        <SpanDiv>
                            <RoleSpan style={{display : slide === 2 ? "" : "none"}}>
                            {TextInfo[2].SubText}
                            </RoleSpan>
                        </SpanDiv>
                    </RoleTextWrap>
                    <RoleTextWrap>
                        <TitlePTag style={{display : slide === 3 ? "" : "none"}}>
                            {TextInfo[3].Title}
                        </TitlePTag>
                        <SpanDiv>
                            <RoleSpan style={{display : slide === 3 ? "" : "none"}}>
                            {TextInfo[3].SubText}
                            </RoleSpan>
                        </SpanDiv>
                    </RoleTextWrap>
                    <RoleTextWrap>
                        <TitlePTag style={{display : slide === 4 ? "" : "none"}}>
                            {TextInfo[4].Title}
                        </TitlePTag>
                        <SpanDiv>
                            <RoleSpan style={{display : slide === 4 ? "" : "none"}}>
                            {TextInfo[4].SubText}
                            </RoleSpan>
                        </SpanDiv>
                    </RoleTextWrap>
                    <RoleTextWrap>
                        <TitlePTag style={{display : slide === 5 ? "" : "none"}}>
                            {TextInfo[5].Title}
                        </TitlePTag>
                        <SpanDiv>
                            <RoleSpan style={{display : slide === 5 ? "" : "none"}}>
                            {TextInfo[5].SubText}
                            </RoleSpan>
                        </SpanDiv>
                    </RoleTextWrap>
                </TextWrap>

                <RoleWrapTest>
                    <RoleImageDiv style={{backgroundImage:`url(${PhotoRole[0].Image})`, display: slide === 0 ? "" : "none"}}/>
                    <RoleImageDiv style={{backgroundImage:`url(${PhotoRole[1].Image})`, display: slide === 1 ? "" : "none"}}/>
                    <RoleImageDiv style={{backgroundImage:`url(${PhotoRole[2].Image})`, display: slide === 2 ? "" : "none"}}/>
                    <RoleImageDiv style={{backgroundImage:`url(${PhotoRole[3].Image})`, display: slide === 3 ? "" : "none"}}/>
                    <RoleImageDiv style={{backgroundImage:`url(${PhotoRole[4].Image})`, display: slide === 4 ? "" : "none"}}/>
                    <RoleImageDiv style={{backgroundImage:`url(${PhotoRole[5].Image})`, display: slide === 5 ? "" : "none"}}/>
                </RoleWrapTest>

            <ProgressBarDiv>
                <ProgressDiv>
                    {RoleText.map((list, idx) => {
                        // console.log(list.SlideNumber)
                        return(
                            <ProgressWrap key={idx}>
                                <ProgressBar>
                                    <Progress/>
                                </ProgressBar>
                                <ProgressText>
                                    <ProgressSpan onClick={() => {}}>{list.RoleText}</ProgressSpan>
                                </ProgressText>
                            </ProgressWrap>
                        )
                    })}
                </ProgressDiv>
            </ProgressBarDiv>
        </RoleAllWrap>
    )
}

const RoleAllWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    /* border: 1px solid white; */
`

const RolePageTopWrap = styled.div`
    max-width: 100%;
    height: 100%;
    padding-left: 226px;
    margin-bottom: 80px;
`

const RoleTitle = styled.div`
    margin-bottom: 60px;
`

const RolePageText = styled.span`
    color: white;
    font-size: 40px;
    font-weight: 600;
    line-height: 21px;
    font-family: "genesis";
`

const RoleTextWrap = styled.div`
    width: 440px;
    padding-left: 226px;
    top: 600px;
    z-index: 2;
    word-break: keep-all;
`

const TitlePTag = styled.p`
    color: white;
    font-size: 40px;
    font-weight: 600;
    line-height: 65px;
    font-family: "genesis";
`

const SpanDiv = styled.div`
    width: 520px;
`

const RoleSpan = styled.span`
    color: white;
    font-family: "genesis";
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
`

const ProgressBarDiv = styled.div`
    /* border: 1px solid white; */
    max-width: 100%;
    display: flex;
    position: absolute;
    top: 1060px;
    padding-left: 226px;
`

const RoleWrapTest = styled.div`
display: flex;
width: 100%;
flex: 1;
/* position: absolute; */
-webkit-box-flex: 1;
/* overflow-x: hidden; */
`

const RoleImageDiv = styled.div`
    width: 100%;
    height: 1080px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* border: 1px solid white; */
    /* padding-left: 200px; */
`

const TextWrap = styled.div`
    width: 100%;
    /* border: 1px solid white; */
    z-index: 3;
    position: absolute;
    top: 500px;
`

const ProgressWrap = styled.div`
    width: 295px;
    /* border: 1px solid white; */
`

const ProgressBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
    display: flex;
    position: relative;
`

const Progress = styled.div`
    width: 100%;
    height: 1px;
    position: absolute;
    /* background-color: white; */
    transition : width 5s ease;
    -webkit-transition : width 5s ease;
    -moz-transition : width 5s ease;
    -o-transition : width 5s ease;
`


const ProgressText = styled.div`
    padding: 20px 20px 20px 0px;
`

const ProgressSpan = styled.span`
    color: gray;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    font-family: "genesis";
    cursor: pointer;

    :hover{
        color: white;
    }
`

const ProgressDiv = styled.div`
    display: flex;
    gap: 
`

export default RolePage