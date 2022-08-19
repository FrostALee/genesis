import React from "react"
import styled from "styled-components"

import Support from "../Img/support-icon.webp"
import Mypage from "../Img/mypage-icon.webp"
import Logo from "../Img/logo.webp"

function Header () {

    return(
        <AllWrap> 
            <HeaderWrap>
                <HeaderLeftWrap>
                        <LogoBox/>
                    <div>
                        <HeaderUl>
                        <HeaderMenu>모델</HeaderMenu>
                        <HeaderMenu>구매</HeaderMenu>
                        <HeaderMenu>체험</HeaderMenu>
                        <HeaderMenu>멤버스</HeaderMenu>
                        <HeaderMenu>제네시스</HeaderMenu>
                        </HeaderUl>
                    </div>
                </HeaderLeftWrap>
                <HeaderRightWrap>
                    <div>
                        <HeaderUl>
                        <HeaderRight>고객센터</HeaderRight>
                        <HeaderRight>마이 페이지</HeaderRight>
                        </HeaderUl>
                    </div>
                </HeaderRightWrap>
                <div>

                </div>
            </HeaderWrap>
        </AllWrap>
    )
}

const AllWrap = styled.div`
    background-color: #111;
    position: fixed;
    padding: 20px;
    width: 100%;
    top: 0; 
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const HeaderWrap = styled.div`
    background-color: #111;
    /* position: fixed; */
    display: flex;
    /* flex-flow: row wrap; */
    justify-content: space-between;
    width: 1920px;
    max-width: 1920px;
    margin: 0px auto;
    padding: 20px 40px;
    /* height: 30px; */
    box-sizing: border-box;
    -webkit-box-pack: justify;

    border: 1px solid white;
`

const HeaderLeftWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    border: 1px solid white;
`

const HeaderRightWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    float: right;

    border: 1px solid white;
`

const LogoBox = styled.div`
    background-image: url(${Logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 120px;
    height: 26px;
    cursor: pointer;
`

const HeaderUl = styled.ul`
    font-size: 0;
    margin: 0 auto;
    font-family: "genesis";
`

const HeaderMenu = styled.li`
    font-size: 15px;
    font-weight: 600;
    line-height: 21px;
    color: ghostwhite;
    display: inline-block;
    list-style: none;
    margin: 0 30px;
    cursor: pointer;
`

const HeaderRight = styled.li`
    font-size: 15px;
    font-weight: 600;
    line-height: 21px;
    color: ghostwhite;
    display: inline-block;
    list-style: none;
    margin: 0 20px;
    cursor: pointer;    
`

export default Header