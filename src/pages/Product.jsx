
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
import { addProduct } from '../redux/cartRedux'
import {useDispatch} from 'react-redux'


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
    const [quantity, setQuantity] = useState(1);
    const [color,setColor] = useState("");
    const [wire,setWire] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data);
            }catch{}
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) => {
        if(type==="dec"){
            quantity > 1 && setQuantity(quantity-1)
        } else {
            setQuantity(quantity+1)
        }
    }

    const handleClick = () => {
        // UPDATE CART - ne zna da je redux operacija ! Moramo da  dishpatchujemo akciju.
        dispatch(
        addProduct({...product, quantity, color, wire}));
    }

  return (
    <Containter>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src = {product.img} />
            </ImageContainer>
            <InfoContainer>
                <Title> {product.title} </Title>
                <Desc>{product.desc}</Desc>
                <Price>{product.price}$</Price>
                <FilterContainer>
                    <Filter> 
                        <FilterTitle> Wire </FilterTitle>
                        <FilterMark onChange={(e) => setWire(e.target.value)}>
                            {product.wire?.map((w)=>(
                                <FilterMarkOption key={w}>{w}</FilterMarkOption>
                            ))}
                        </FilterMark>
                    </Filter>
                    <Filter>
                        <FilterTitle> Color </FilterTitle>
                        {product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                        ))}
                    </Filter>
                </FilterContainer>
                <AddContainer> 
                    <AmountCointainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountCointainer>
                    <Button onClick={handleClick}> ADD TO CART </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Containter>
  )
}

export default Product