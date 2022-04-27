import React from 'react'
import styled from 'styled-components'

function FirstSection() {
    const FirstHeadings =styled.div`
        color: white;
        position: absolute;
        top: 10vh;
        left: 25vw;
        width: 50vw;
        text-align: center;
    `

    const Title = styled.div`
        font-size: 4rem;
    ` 
    const SecondTitle = styled.div`
        font-size: 1.5rem;
        font-weight: 300;
        font-style: italic;
    `

  return (
      <>
    <FirstHeadings>
        <Title>Planet Earth</Title>
        <SecondTitle>Our dance around sun</SecondTitle>
    </FirstHeadings>

    </>
  )
}

export default FirstSection