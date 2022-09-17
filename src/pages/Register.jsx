
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),#1616167e);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    
`

const Title = styled.h1`
    font-size: 25px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 25%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title> CREATE AN ACCOUNT </Title>
            <Form>
                <Input placeholder = "name"/>
                <Input placeholder = "lastname"/>
                <Input placeholder = "email"/>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
                <Input placeholder = "confirm password"/>
                <Button> CREATE </Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register