import React from 'react'
import './CollectionProduct.css'
import Col from 'react-bootstrap/esm/Col'
import { Link } from '@mui/material'

function CollectionProduct({ Img, ImgHeading, ImgParagraph, ImgPrice }) {
    return (
        <>
            <div className='item'>
                <div className='collection_product_list text-center'>
                    <div className='collection_product_img'>
                        <Link to='#'><img src={Img} /></Link>
                    </div>
                    <div className='collection_product_heading'>
                        <h4><Link to='#'>{ImgHeading}</Link></h4>
                    </div>
                    <div className='collection_product_span'>
                        <p><Link to='#'>{ImgParagraph}</Link></p>
                    </div>
                    <div className='collection_product_price'>
                        <span>{ImgPrice}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionProduct
