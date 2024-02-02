import React from 'react'
import './MyCategory.css'
import Row from 'react-bootstrap/esm/Row'
import MyProduct from './MyProduct'
import { Container } from '@mui/material'
import product_one from '../img/product_1.jpeg'
import product_two from '../img/product_2.jpeg'
import product_three from '../img/product_3.jpeg'
import product_four from '../img/product_4.jpeg'
import product_hover_1 from '../img/product_hover_1.jpeg'
import product_hover_2 from '../img/product_hover_2.jpeg'
import product_hover_3 from '../img/product_hover_3.jpeg'
import product_hover_4 from '../img/product_hover_4.jpeg'

function MyCategory() {
    return (
        <div className='mycategory'>
            <Container>
                <div className='category-heading'>
                    <h2>SHOP BY CATEGORY</h2>
                </div>
                <div className='product'>
                    <Row className='gy-4'>
                        <MyProduct Img={product_one} Img_Hover={product_hover_1} Heading='RINGS' Accessories='Accessories' Beauty='Beauty Rings' />
                        <MyProduct Img={product_two} Img_Hover={product_hover_2} Heading='EARRINGS' Accessories='Accessories' Beauty='Beauty Earrings' />
                        <MyProduct Img={product_three} Img_Hover={product_hover_3} Heading='NECKLACES' Accessories='Accessories' Beauty='Beauty Necklaces' />
                        <MyProduct Img={product_four} Img_Hover={product_hover_4} Heading='RACELETS' Accessories='Accessories' Beauty='Beauty Bracelets' />
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default MyCategory
