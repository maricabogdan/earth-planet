import React from 'react'
import styled from 'styled-components'

const SecondSection = () => {

const SecondHeadings = styled.div`
    position: absolute;
    top: 130vh;
    left: 18vw;
    color: white;
    width:100vw;

`

const BigTitle = styled.div`
    font-size:10rem;
    font-weight: 600;
`

const SmallTitle = styled.div`
    color:white ;
    font-size: 3rem;
`

  return (
   <>
    <SecondHeadings>
        <BigTitle>
        510.100.000 km²
        </BigTitle>
        <SmallTitle>
        total surface of the earth
        </SmallTitle>
    </SecondHeadings>
   </>
  )
}

export default SecondSection