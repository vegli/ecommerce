
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../requestMethods'


const Containter = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`
const Title = styled.div`
    font-weight: 200;

`
const Desc = styled.div`
    margin:20px 0px;
    
`
const Price = styled.span`
    font-weight: 100;
    font-style: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    margin: 30px 0px;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterMark = styled.select`
    margin-left: 5px;
    padding: 5px;

`

const FilterMarkOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-content: center;
    width: 50%;
    justify-content: space-between;
`
const AmountCointainer = styled.div`
    display: flex;
    align-content: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0xp 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    cursor: pointer;
    background-color: white;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product,setProduct] = useState({})

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data);
            }catch{}
        };
        getProduct();
    },[id]);


  return (
    <Containter>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src = {product.img} />
            </ImageContainer>
            <InfoContainer>
                <Title> Razer Deathadder 2022</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur cumque id facilis 
                    voluptatem veritatis. Nulla eius temporibus, nostrum distinctio minus sint et neque ullam delectus, 
                    nobis, iure aliquam cupiditate.</Desc>
                <Price>60$</Price>
                <FilterContainer>
                    <FilterMark> 
                        <FilterTitle> Mark </FilterTitle>
                        <FilterMarkOption> Logitech</FilterMarkOption>
                        <FilterMarkOption> Razer </FilterMarkOption>
                        <FilterMarkOption> HyperX </FilterMarkOption>
                    </FilterMark>
                    <Filter>
                        <FilterTitle> Color </FilterTitle>
                        <FilterColor color = "black"/>
                        <FilterColor color = "blue"/>
                        <FilterColor color = "gray"/>
                    </Filter>
                </FilterContainer>
                <AddContainer> 
                    <AmountCointainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountCointainer>
                    <Button> ADD TO CART </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Containter>
  )
}

export default Product