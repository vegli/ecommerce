import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'


const Container = styled.div` 
    height: 60px;
    background-color : white; 
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Left = styled.div `
    flex: 1;
    display: flex;
    alight-items: center;
`;

const Input = styled.input`
    border: none;
`

const Center = styled.div `
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weightL bold;
`

const Right = styled.div `
    flex: 1; // razvuci mi do kraja horizontalno
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px; // da razdvojimo login i register i shopping cart ikonicu
`


const Navbar = () => {
  return (
        <Container> 
            <Wrapper>
                <Left>
                    <Language> EN </Language> 
                    <SearchContainer> 
                        <Input/>
                    <Search style={{color:"gray", fontSize:16}}/> 
                    </SearchContainer>
                </Left>
                <Center> 
                    <Logo> LOGO. </Logo>    
                </Center>
                <Right>
                    <MenuItem> REGISTER </MenuItem>
                    <MenuItem> SIGN IN </MenuItem>
                    <MenuItem> 
                        <Badge badgeContent = {1} color ="primarry">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>  
        </Container>
  )
}

export default Navbar