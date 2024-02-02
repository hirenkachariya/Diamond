import React from 'react'
import './MyProduct.css'
import Col from 'react-bootstrap/esm/Col'
import { Link } from '@mui/material'

function MyProduct({ Img, Img_Hover, Heading, Accessories, Beauty }) {
    return (
        <>
            <Col lg={3} md={4} sm={6} xs={12}>
                <div className='product_box'>
                    <div className='product_img'>
                        <Link to='#'><img src={Img} /></Link>
                    </div>
                    <div className='product_img_hover'>
                        <Link to='#'><img src={Img_Hover} /></Link>
                    </div>
                </div>
                <div className='product_blog'>
                    <div className='product_heading'>
                        <h5><Link to='#'>{Heading}</Link></h5>
                    </div>
                    <div className='product_list'>
                        <div className='product_list_one'>
                            <span><Link to='#'>{Accessories}</Link></span>
                        </div>
                        <div className='product_span'>
                            <span>/</span>
                        </div>
                        <div className='product_list_two'>
                            <span><Link to='#'>{Beauty}</Link></span>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default MyProduct

