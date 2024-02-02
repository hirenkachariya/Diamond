import React from 'react'
import './InstagramProduct.css'
import Col from 'react-bootstrap/esm/Col'
import { Link } from '@mui/material'

function InstagramProduct({ Inst }) {
    return (
        <Col lg={3} md={4} sm={6} xs={12} >
            <div className='instagramroduct_images pb-4'>
                <Link to='#'><img src={Inst} /></Link>
            </div>
        </Col>
    )
}

export default InstagramProduct
