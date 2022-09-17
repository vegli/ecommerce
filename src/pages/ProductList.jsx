import React from 'react'
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
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title> KEYBOARDS </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter products: </FilterText>
                <Select>
                    <Option disabled selected>
                        Type
                    </Option>
                        <Option> Keyboards </Option>
                        <Option> Mouse </Option>
                        <Option> Mousepad </Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort products: </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option> Price(asc) </Option>
                    <Option> Price(desc) </Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList