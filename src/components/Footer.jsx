import { Email, Facebook, Instagram, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Logo = styled.h1`
    
`

const Title = styled.h3`
    
`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;   
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> LOGO. </Logo>
            <Description> Deskripcija sajta.</Description>
            <SocialContainer> 
                <SocialIcon> 
                    <Facebook/>
                </SocialIcon>
                <SocialIcon> 
                    <Instagram/>
                </SocialIcon>
                <SocialIcon> 
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            
        </Center>
        <Right>
            <Title> Contact </Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                Pere Velimiovica 23, Beograd, Srbija
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +381 11 213123123
            </ContactItem>
            <ContactItem>
                <Email style={{marginRight:"10px"}}/>
                velja@logo.shop
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer