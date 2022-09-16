import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { sliderItems } from '../data'
import { useState } from 'react'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden; // da vidimo samo jedan slajd, klikom na strelicu idemo na sledeci itd..
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex; // da nam slajdovi budu horiznontalni
    transform: translateX(0vw);
`

const Slide = styled.div`
    width: 100vw; // svi kontejneri
    height: 100vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg}; // prolsedjujemo boju slajda preko propa
`

const ImageContainer = styled.div`
    height: 100%; //100vh jer je parent takav
    flex:1;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`

const Image = styled.img`
    height: 80%;
    
`

const Title = styled.h1`
    font-size:70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    :hover {
        background-color: black;
        color: white;
    }
`


const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0);
// kad kliknem desnu strelicu slideIndex = 1
// kad kliknem levu strelicu slideIndex = 3 jer ide od poslednjeg
// nesto
const handleClick = (direction) => {
    // 0 -100vw -200vw -300vw za slajdove
};

  return (
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            {sliderItems.map(item => ( 
            <Slide bg={item.bg}>
            <ImageContainer> 
                <Image src = {item.img} />     
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider