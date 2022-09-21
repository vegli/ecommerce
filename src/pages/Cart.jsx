
import Navbar from "../components/Navbar"
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons"
import {useSelector} from 'react-redux'

const Container =  styled.div`

`

const Wrapper =  styled.div`
    padding: 20px;
`

const Title =  styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==='filled' && 'none'};
    background-color: ${props=>props.type==='filled' ? 'black' : 'transparent'};
    color: ${props=>props.type==='filled' && 'white'};

`

const Bottom =  styled.div`
    display: flex;
    justify-content: space-between;
`

const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Info = styled.div`
    flex:3;
`


const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    padding: 20px;
    height: 50vh;
    border-radius: 10px;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width: 300px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`

const ProductName = styled.span`
    
`

const ProductId = styled.span`
    
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`


const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "800"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 666;
    cursor: pointer;
`




const Cart = () => {
    const cart = useSelector(state=>state.cart);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title> YOUR BAG </Title>
            <Top> 
                <TopButton> CONTINUE SHOPPING </TopButton>
                <TopTexts>
                    <TopText> Shopping bag(2)</TopText>
                    <TopText> Your wishlist </TopText>
                </TopTexts>
                <TopButton type="filled"> CHECKOUT NOW </TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product=>(

                    <Product> 
                        <ProductDetail> 
                            <Image src = {product.img}/>
                            <Details>
                                <ProductName><b>Product: </b> {product.title} </ProductName>
                                <ProductId><b>ID: </b> 1{product._id}</ProductId>
                                <ProductColor color={product.color}/>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount> {product.quantity} </ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice> {product.price * product.quantity} </ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle> ORDER SUMMARY </SummaryTitle>
                    <SummaryItem> 
                        <SummaryItemText> Subtotal </SummaryItemText>
                        <SummaryItemPrice> $ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem> 
                        <SummaryItemText> Estimated shipping  </SummaryItemText>
                        <SummaryItemPrice> $5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem> 
                        <SummaryItemText> Shipping discount </SummaryItemText>
                        <SummaryItemPrice> -$5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total"> 
                        <SummaryItemText> Total </SummaryItemText>
                        <SummaryItemPrice> $ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <Button> CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart