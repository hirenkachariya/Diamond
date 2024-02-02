import React from 'react'
import './WordsProduct.css'

function WordsProduct({ Img, Paragraph, Heading, Month }) {
    return (
        <div className='item'>
            <div className='WordsProduct_card'>
                <div className='WordsProduct_img'>
                    <img src={Img} />
                </div>
                <div className='WordsProduct_paragraph'>
                    <p>{Paragraph}</p>
                </div>
                <div className='WordsProduct_heading'>
                    <h5>{Heading}</h5>
                </div>
                <div className='WordsProduct_span'>
                    <span>{Month}</span>
                </div>
            </div>
        </div>
    )
}

export default WordsProduct
