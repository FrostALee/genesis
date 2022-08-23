import React from "react";
import styled from "styled-components"

function ProductModal() {

    return(
        <>
            <ProductModalWrap>
                <AbsoluteModal>
                    <LeftDiv>
                        <span>모델</span>
                        <span>ALL</span>
                        <span>SEDAN</span>
                        <span>SUV</span>
                    </LeftDiv>
                </AbsoluteModal>
            </ProductModalWrap>
        </>
    )

}


const ProductModalWrap = styled.div`
    position: relative;
    width: 100%;
`

const AbsoluteModal = styled.div`
    position: absolute;
    width: 1920px;
`

const LeftDiv = styled.div`

`


export default ProductModal