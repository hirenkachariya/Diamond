import React from 'react'
import './Words.css'
import { Container } from '@mui/material'
import WordsProduct from './WordsProduct'
import star from '../img/star.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Words() {
    const responsive = {
        0: { margin: 10, items: 1 },
        640: { items: 2, nav: true },
        991: { items: 2, nav: true },
        1099: { items: 3, nav: true },
        1366: { items: 3, nav: true },
    }
    return (
        <div className='words'>
            <div className='words_blog'>
                <div className='words_heading text-center'>
                    <h4>KIND WORDS</h4>
                </div>
                <div className='works_slider'>
                    <Container>
                        <OwlCarousel className="owl-theme"
                            items={1}
                            autoPlay={true}
                            autoplaySpeed={1000}
                            loop={true}
                            margin={40}
                            nav={true}
                            dots={false}
                            responsive={responsive}
                            navText={[
                                '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/></svg>',
                                '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/></svg>',
                            ]}
                        >
                            <WordsProduct Img={star} Paragraph='"Condimentum males uada sceleris que in mauris ut malesuada orem Ipsum estibulum blandit libero at."' Heading='Michel Wooud' Month='Los Angeles, 5 months ago' />
                            <WordsProduct Img={star} Paragraph='"Mauris ut malesuada orem Ipsum estibulum ondimentum mal es uid scelerisque in blandit libero atmis."' Heading='Anna Heelou' Month='New Angeles, 5 months ago' />
                            <WordsProduct Img={star} Paragraph='"Lorem Ipsum estibulum blandit lib ero at mauris condimentum malui da scelerisque in mauris ut malda."' Heading='Monica Stoung' Month='Los Angeles, 5 months ago' />
                            <WordsProduct Img={star} Paragraph='"Mauris ut malesuada orem Ipsum estibulum ondimentum mal es uid scelerisque in blandit libero atmis."' Heading='Anna Heelou' Month='New Angeles, 5 months ago' />
                            <WordsProduct Img={star} Paragraph='"Lorem Ipsum estibulum blandit lib ero at mauris condimentum malui da scelerisque in mauris ut malda."' Heading='Monica Stoung' Month='Los Angeles, 5 months ago' />
                        </OwlCarousel>
                    </Container>
                </div>
            </div>
        </div >
    )
}

export default Words
