import React from "react";
import { useState } from "react";
import styled from "styled-components";

function BrandModal() {

    return(
        <RelativeWrap>
        <BrandModalWrap>
            <ModalWrap>

                <LeftWrap>
                    <LeftTitle>제네시스</LeftTitle>
                    <TextDiv><TextSpanNone>높은 품격과 안목을 가진 사람들을위한 최상의 자동차와 서비스를 만들어 내고자 합니다.</TextSpanNone></TextDiv>
                </LeftWrap>

                <RightAllWrap>

                    <RightWrap>
                        <RightTitle>브랜드</RightTitle>
                        <TextSpan>브랜드 소개</TextSpan>
                        <TextSpan>비전</TextSpan>
                    </RightWrap>

                    <RightWrap>
                        <RightTitle>콘셉트카</RightTitle>
                        <TextSpan>콘셉트카 소개</TextSpan>
                        <TextSpan>Genesis X Speedium Coupe Concept</TextSpan>
                        <TextSpan>Genesis X Concept</TextSpan>
                        <TextSpan>Mint Concept</TextSpan>
                        <TextSpan>Essentia Concept</TextSpan>
                        <TextSpan>GV80 Concept</TextSpan>
                        <TextSpan>New York Concept</TextSpan>
                    </RightWrap>
                    <RightWrap>
                        <RightTitle>제네시스X골프</RightTitle>
                    </RightWrap>
                    <RightWrap>
                        <RightTitle>모터쇼</RightTitle>
                        <TextSpan>모터쇼 소개</TextSpan>
                        <TextSpan>서울 모빌리티쇼 2021</TextSpan>
                        <TextSpan>광저우 모터쇼</TextSpan>
                        <TextSpan>상하이 오토쇼</TextSpan>
                        <TextSpan>디지털 모터쇼</TextSpan>
                        <TextSpan>뉴욕 국제 오토쇼</TextSpan>
                        <TextSpan>서울 모터쇼 2019</TextSpan>
                        <TextSpan>부산 국제 모터쇼 2018</TextSpan>
                    </RightWrap>
                    <RightWrap>
                        <RightTitle>로드트립</RightTitle>
                        <TextSpan>로드트립 소개</TextSpan>
                        <TextSpan>부산</TextSpan>
                        <TextSpan>여주</TextSpan>
                        <TextSpan>백두대간</TextSpan>
                        <TextSpan>순천</TextSpan>
                        <TextSpan>제주 2021</TextSpan>
                        <TextSpan>구래-하동</TextSpan>
                    </RightWrap>
                </RightAllWrap>

            </ModalWrap>
        </BrandModalWrap>
        </RelativeWrap>
    )
}

const BrandModalWrap = styled.div`
    width: 100%;
    position: absolute;
    
`

const ModalWrap = styled.div`
    width: 1920px;
    /* max-width: 100%; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #171717;
    padding: 70px 100px 100px 226px;
`

const LeftWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    border-right: 0.5px solid #515151;
    padding-right: 30px;
    height: 450px;
    gap: 15px;
    margin-right: 140px;
`

const LeftTitle = styled.span`
    color: white;
    line-height: 25px;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
`

const TextSpan = styled.span`
    color: gray;
    line-height: 25px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    :hover{
        color: white;
    }
`

const TextDiv = styled.div`
    width: 200px;
`

const RightWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
`

const RightTitle = styled.span`
    color: white;
    line-height: 25px;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
`

const RightAllWrap = styled.div`
    display: flex;
    gap: 90px;
`

const TextSpanNone = styled.span`
    color: gray;
    line-height: 25px;
    font-weight: 400;
    font-size: 16px;
`

const RelativeWrap = styled.div`
    position: relative;
    z-index: 10;
    top: 23px;
    left: -440px;
    width: 100%;
    transition: all 1s ease-in-out;

    
`

export default BrandModal