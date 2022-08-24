import React, {useRef, useState, useEffect} from "react";
import styled, {keyframes} from "styled-components"

import FaceBookLogo from "../Img/Facebook-logo.svg"
import TwitterLogo from "../Img/Twitter-logo.svg"
import ChainLogo from "../Img/link-svgrepo-com.svg"
import LogoMark from "../Img/logo.webp"

function Footer() {

    const ShareIcon = [FaceBookLogo, TwitterLogo, ChainLogo]

    const List = [
         '모델',
         '구매',
         '체험',
         '멤버스',
         '제네시스',
         '고객센터',
    ]

    const Models = [
         'G70',
         'G70 SHOOTING BRAKE',
         'ELECTRIFIED G80',
         'G80',
         'G90',
         'GV60',
         'ELECTRIFIED GV70',
         'GV70',
         'GV80'
    ]    

    const BuyPlan = [
        '견적내기',
        '구매 프로그램',
        '전기차 구매가이드',
        '구매 상담 신청',
        '제네시스 스펙트럼',
        '사양 조회하기'
    ]    

    const Exper = [
        '스페이스',
        '시승 신청',
        '전시장 찾기',
        '제네시스 드라이빙 익스피리언스'
    ]

    const Members = [
        '제네시스 멤버십',
        '제네시스 커넥티드 서비스',
        '디지털 서비스',
        '차량관리 서비스'
    ]

    const Genesis = [
        '브랜드',
        '콘셉트카',
        '제네시스X골프',
        '모터쇼',
        '로드트립'
    ]

    const Customer = [
        '고객센터 안내',
        '공지사항',
        '이벤트',
        '자주 묻는 질문',
        '다운로드 센터',
        'PR 센터'
    ]

    const NoticeText = [
        'Genesis Connected Services 이용약관 개정 공지',
        '제네시스 멤버십 제휴서비스 종료 안내(딜카)',
        'GENESIS CARPAY 개인정보 처리방침 개정 공지',
        'G90 통합바디제어장치(IBU) 무상수리 실시 안내',
    ]


    return(
        <>
        <FooterAllWrap>
            <FooterTopNav>
                <IconContainner>
                        <IconText>Share</IconText>
                {ShareIcon.map((list, idx) => {
                    return(
                        <Logo key={idx} style={{backgroundImage:`url(${list})`}}/>
                    )
                })}
                </IconContainner>
                <ClickTopWrap>
                    <IconText>Top</IconText><ArrowTop></ArrowTop>
                </ClickTopWrap>
            </FooterTopNav>
            <FooterNotice>

                    <NoticeWrap>
                        <NoticeTextWrap>
                        <Notice>{NoticeText[0]}</Notice>
                        <Notice>{NoticeText[1]}</Notice>
                        <Notice>{NoticeText[2]}</Notice>
                        <Notice>{NoticeText[3]}</Notice>
                        </NoticeTextWrap>
                        <ControllWrap>
                            <LeftArrow></LeftArrow>
                            <PauseWrap>
                            <ControllPause></ControllPause>
                            <ControllPause></ControllPause>
                            </PauseWrap>
                            <RightArrow></RightArrow>
                        </ControllWrap>
                    </NoticeWrap>
            </FooterNotice>

            <FooterMenuContainer>

                <MenuBoxWrap>
                    <MenuBox>
                        <MenuTitle>{List[0]}</MenuTitle>
                        <MenuSubWrap>
                            {Models.map((list, idx) => {
                                return(
                                    <Menuli key={idx}>{list}</Menuli>
                                )
                            })}
                        </MenuSubWrap>
                    </MenuBox>

                    <MenuBox>
                        <MenuTitle>{List[1]}</MenuTitle>
                        <MenuSubWrap>
                            {BuyPlan.map((list, idx) => {
                                return(
                                    <Menuli key={idx}>{list}</Menuli>
                                )
                            })}
                        </MenuSubWrap>
                    </MenuBox>

                    <MenuBox>
                        <MenuTitle>{List[2]}</MenuTitle>
                        <MenuSubWrap>
                            {Exper.map((list, idx) => {
                                return(
                                    <Menuli key={idx}>{list}</Menuli>
                                )
                            })}
                        </MenuSubWrap>
                    </MenuBox>

                    <MenuBox>
                        <MenuTitle>{List[3]}</MenuTitle>
                        <MenuSubWrap>
                            {Members.map((list, idx) => {
                                return(
                                    <Menuli key={idx}>{list}</Menuli>
                                )
                            })}
                        </MenuSubWrap>
                    </MenuBox>
                </MenuBoxWrap>

                <MenuBoxWrap>
                    <MenuBox>
                        <MenuTitle>{List[4]}</MenuTitle>
                        <MenuSubWrap>
                            {Genesis.map((list, idx) => {
                                return(
                                    <Menuli key={idx}>{list}</Menuli>
                                )
                            })}
                        </MenuSubWrap>
                    </MenuBox>

                    <MenuBox>
                        <MenuTitle>{List[5]}</MenuTitle>
                        <MenuSubWrap>
                            {Customer.map((list, idx) => {
                                return(
                                    <Menuli key={idx}>{list}</Menuli>
                                )
                            })}
                        </MenuSubWrap>
                    </MenuBox>

                    <MenuBox>
                        <MenuTitle>마이페이지</MenuTitle>
                        <MenuSubWrap>
                        </MenuSubWrap>
                    </MenuBox>
                </MenuBoxWrap>                  
            </FooterMenuContainer>

            <FooterBottomWrap>
                <NavMenuWrap>
                    <NaveMenuText>사이트맵</NaveMenuText>
                    <NaveMenuText>이용약관</NaveMenuText>
                    <NaveMenuText>개인정보 처리방침</NaveMenuText>
                    <NaveMenuText>저작권 안내</NaveMenuText>
                    <NaveMenuText>보증안내</NaveMenuText>
                    <NaveMenuText>자동차 교환 및 환불 중재 규정 안내</NaveMenuText>
                    <NaveMenuText>하자 재발 통보 안내</NaveMenuText>
                </NavMenuWrap>
            </FooterBottomWrap>

            <FooterBottomWrap>
                <NavMenuWrap>
                    <NaveMenuText>제네시스 월드와이드</NaveMenuText>
                    <NaveMenuText>프라이버시 센터</NaveMenuText>
                    <NaveMenuText>제네시스 챔피언십</NaveMenuText>
                    <NaveMenuText>제네시스 부티크</NaveMenuText>
                    <NaveMenuText>네비게이션 업데이트</NaveMenuText>
                    <NaveMenuText>제네시스 드라이빙 아카데미</NaveMenuText>
                    <NaveMenuText>윤리경영 사이버 감사실</NaveMenuText>
                </NavMenuWrap>
            </FooterBottomWrap>

            <FooterBottomLogoWrap>
                <NavLogoWrap/>
                <CopyDiv>
                    <span>© Copyright 2022 Hyundai Motor Company.</span>
                    <span>All Rights Reserved.</span>
                </CopyDiv>
            </FooterBottomLogoWrap>



        </FooterAllWrap>
        </>
    )

}


const FooterAllWrap = styled.div`
    width: 100%;

`
const FooterTopNav = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FooterNotice = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: black;
`

const FooterMenuContainer = styled.div`
    /* width: 100%; */
    width: 1920px;
    height: 100%;
    /* max-width: 100%; */
    /* margin-top: 60px; */
    padding: 130px 180px;
    display: flex;
    flex-flow: column nowrap;
    gap: 30px;
    /* border: 1px solid white; */
`

const Logo = styled.div`
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`

const IconText = styled.span`
    color: white;
    font-size: 18px;
    cursor: pointer;
`

const IconContainner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-left: 220px;
`

const ClickTopWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-right: 250px;
    cursor: pointer;
`

const ArrowTop = styled.div`
    width: 8px;
    height: 8px;
    border: 2px solid white;
    transform: rotate(45deg);
    border-right: none;
    border-bottom: none;
    cursor: pointer;
`

const NoticeWrap = styled.div`
    padding-left: 220px;
    width: 100%;
    height: 50px;
    overflow: hidden;
    /* border: 1px solid white; */
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Notice = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
`

const SlideAnimation = keyframes`
0%{
    transform: translateY(40%)
}

100%{
    transform: translateY(-65%)
}
`

const NoticeTextWrap = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    /* border: 1px solid white; */
    padding: 7px;
    overflow: hidden;
    animation: ${SlideAnimation} 7s ease-in-out infinite;
`

const ControllWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    /* border: 1px solid white; */
    padding-right: 250px;
    gap: 20px;
`

const PauseWrap = styled.div`
    display: flex;
    gap: 5px;
    cursor: pointer;
`

const ControllPause = styled.div`
    width: 5px;
    height: 17px;
    background-color: white;
    cursor: pointer;
`

const LeftArrow = styled.div`
    border: 3px solid white;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-right: none;
    border-top: none;
    cursor: pointer;
`

const RightArrow = styled.div`
    border: 3px solid white;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-left: none;
    border-bottom: none;
    cursor: pointer;
`

const MenuBox = styled.div`
    width: 400px;
    /* border: 1px solid white; */
`

const MenuBoxWrap = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
    margin-top: 40px;
    /* border: 1px solid white; */
`

const MenuTitle = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 700;
    font-family: "genesis";
    margin-left: 37px;
`

const MenuSubWrap = styled.div`
    /* border: 1px solid white; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 40px;
    margin-top: 30px;
    gap: 25px;
`

const Menuli = styled.span`
    font-size: 17px;
    color: gray;
    /* list-style: none; */
    cursor: pointer;
    font-family: "genesis";

    :hover{
        color: white;
    }
`

const FooterBottomWrap = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 200px;
    background-color: black;
    border-bottom: 0.5px solid #202020;
`

const FooterBottomLogoWrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 110px 0px;
    gap: 30px;
`

const NavMenuWrap = styled.div`
    width: 100%;
    padding: 65px 0px;
    display: flex;
    gap: 50px;
`

const NavLogoWrap = styled.div`
    width: 133px;
    height: 27px;
    
    display: flex;
    /* gap: 50px; */
    /* border: 1px solid white; */

    background-image: url(${LogoMark});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const NaveMenuText = styled.span`
    color: gray;
    font-size: 17px;
    font-weight: 500;
    font-family: "genesis";
    cursor: pointer;
    :hover{
        color: white;
    }
`

const CopyDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "genesis";
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    /* border: 1px solid white; */
`

export default Footer