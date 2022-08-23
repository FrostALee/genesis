import React, {useState, useRef} from "react"
import styled from "styled-components"

import Card from "./Card"

import Image01 from "../Img/Build-And-Price_black_60x60_hover.gif"
import Image02 from "../Img/Price_black_60x60_hover.gif"
import Image03 from "../Img/Book-a-Test-Drive_black_60x60_hover.gif"
import Image04 from "../Img/Download-E-Brochure_black_60x60_hover.gif"

function Models () {
    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const BuyPlan = [
    {   Photo: Image01, 
        Sub:'견적내기'
    },
    {   Photo: Image02, 
        Sub:'구매 상담 신청'
    },
    {   Photo: Image03, 
        Sub:'시승 신청'
    },
    {   Photo: Image04, 
        Sub:'카탈로그'
    }]
    

    return(
        <AllWrap>
            <ModlesTitle>OUR MODELS</ModlesTitle>
            <ModelsSub>역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의 라인업을 살펴보세요</ModelsSub>
            
            <div>
                <DropBox><DropDownText>ALL</DropDownText><ArrowDown/></DropBox>
            </div>
            
            <OurModels 
                onMouseDown={onDragStart} 
                onMouseMove={onDragMove} 
                onMouseUp={onDragEnd} 
                onMouseLeave={onDragEnd} 
                ref={scrollRef}>
                <Card/>
            </OurModels>

            <BuyItemWrap>
                {BuyPlan.map((list, idx) => {
                    return(
                    <BuyingCard key={idx}>
                        <Thumbnail style={{backgroundImage:`url(${list.Photo})`}}/>                    
                        <BuyTitle>{list.Sub}</BuyTitle>
                    </BuyingCard>
                    )
                })}
            </BuyItemWrap>

        </AllWrap>
    )

}

const OurModels = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 1550px;
    min-width: 400px;
    height: 100%;
    margin-top: 50px;
    overflow-x: hidden;
`

const AllWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 220px;
    gap: 40px;
    margin-top: 200px;
    margin-bottom: 200px;
`

const ModlesTitle = styled.span`
    color: white;
    font-size: 40px;
    font-weight: 600;
    line-height: 21px;
    font-family: "genesis";
`

const ModelsSub = styled.span`
    color: white;
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    font-family: "genesis";
`

const DropDownText = styled.span`
    color: white;
    font-size: 15px;
    font-weight: 600;
    line-height: 21px;
`

const ArrowDown = styled.div`
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    border: 0.5px solid white;
    border-left: none;
    border-top: none;
`

const DropBox = styled.div`
    border-bottom: 1px solid white;
    width: 300px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 7px;
    cursor: pointer;
`

const BuyingCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`

const Thumbnail = styled.div`
    width: 60px;
    height: 60px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    :hover{
    }
`

const BuyTitle = styled.div`
    color: white;
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
`

const BuyItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    margin: 180px 0px;
    padding: 0px 220px;
`

export default Models