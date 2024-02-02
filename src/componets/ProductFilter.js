import React from 'react'
import './ProductFilter.css'
import Col from 'react-bootstrap/esm/Col'
import { Link } from '@mui/material'

function ProductFilter({ Img, Product_Img, Ring, Diam, Price }) {
    return (
        <Col md={3}>
            <div className='productfilter'>
                <div className='productfilter_images'>
                    <Link className='images_one' to='#'><img src={Img} /></Link>
                    <Link className='images_two' to='#'><img src={Product_Img} /></Link>
                </div>
                <div className='productfilter_heading'>
                    <h5><Link to='#'>{Ring}</Link></h5>
                </div>
                <div className='productfilter_paragraph'>
                    <Link to='#'><span>{Diam}</span></Link>
                </div>
                <div className='productfilter_price'>
                    <span>{Price}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProductFilter
