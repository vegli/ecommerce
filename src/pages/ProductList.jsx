import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Option = styled.option`
    
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`



const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilters] = useState({});
    const [sort, setSort] = useState("Newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title> {cat} </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter products: </FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option >
                        Color
                    </Option>
                        <Option> white </Option>
                        <Option> black </Option>
                        <Option> green </Option>
                        <Option> pink </Option>
                        <Option> gray </Option>
                        <Option> purple </Option>
                        <Option> yellow </Option>
                </Select>
                <Select name="wire" onChange={handleFilters}>
                    <Option >
                        Wiring
                    </Option>
                        <Option> Wireless </Option>
                        <Option> Has wire </Option>
                        <Option> Bluetooth </Option>
                        <Option> Other </Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort products: </FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc"> Price(asc) </Option>
                    <Option value="desc"> Price(desc) </Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList