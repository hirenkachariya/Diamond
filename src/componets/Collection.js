import React from 'react'
import './Collection.css'
import { Container } from '@mui/material'
import CollectionProduct from './CollectionProduct'
import collection_1 from '../img/collection_1.jpeg'
import collection_2 from '../img/collection_2.jpeg'
import collection_3 from '../img/collection_3.jpeg'
import collection_4 from '../img/collection_4.jpeg'
import collection_5 from '../img/collection_5.jpeg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Collection() {
    const responsive = {
        0: { margin: 10, items: 1 },
        544: { items: 2 },
        767 : { items: 3 },
        1024: { items: 4, nav: true },
        1200: { items: 5, nav: true },
        1366: { items: 5, nav: true },
    }
    return (
        <div className='collection'>
            <Container>
                <div className='collection_main_heading'>
                    <h2>NEW COLLECTION</h2>
                </div>
                <div className='collection_product'>
                    <OwlCarousel className="owl-theme"
                        items={1}
                        autoPlay={true}
                        autoplaySpeed={1000}
                        loop={true}
                        margin={0}
                        nav={true}
                        dots={false}
                        responsive={responsive}
                        navText={[
                            '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/></svg>',
                            '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/></svg>',
                        ]}
                    >
                        <CollectionProduct Img={collection_1} ImgHeading='Earrings Plate' ImgParagraph='New Collection' ImgPrice='68.00 $' />
                        <CollectionProduct Img={collection_2} ImgHeading='Earrings Plate' ImgParagraph='New Collection' ImgPrice='68.00 $' />
                        <CollectionProduct Img={collection_3} ImgHeading='Earrings Plate' ImgParagraph='New Collection' ImgPrice='68.00 $' />
                        <CollectionProduct Img={collection_4} ImgHeading='Earrings Plate' ImgParagraph='New Collection' ImgPrice='68.00 $' />
                        <CollectionProduct Img={collection_5} ImgHeading='Earrings Plate' ImgParagraph='New Collection' ImgPrice='68.00 $' />
                    </OwlCarousel >
                </div>
            </Container>
        </div>
    )
}

export default Collection
