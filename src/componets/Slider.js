import React from 'react';
import './Slider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider_one from '../img/slider_1.jpeg'
import slider_two from '../img/slider_2.jpeg'
import slider_three from '../img/slider_3.jpeg'
import { Link } from "react-router-dom";


function Slider() {
    const responsive = {
        0: { margin: 10, items: 1 },
        600: { items: 1 },
        1024: { items: 1, nav: true },
        1200: { items: 1, nav: true },
        1366: { items: 1, nav: true },
    }
    return (
        <div className='slider'>
            <OwlCarousel className="owl-theme"
                items={1}
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

                <div className='slider_one'>
                    <div className="item_one">
                        <img src={slider_one} />
                    </div>
                    <div className='slider_items_one'>
                        <div className='slider_items_heading'>
                            <h1>Jewellery</h1>
                        </div>
                        <div className='button_one'>
                            <Link to="/product"><span>SHOP NOW</span></Link>
                        </div>
                    </div>
                </div>
                <div className='slider_two'>
                    <div className="item_two">
                        <img src={slider_two} />
                    </div>
                    <div className='slider_items_two'>
                        <div className='slider_items_heading'>
                            <h1>Diamonds</h1>
                        </div>
                        <div className='button_two'>
                            <Link to="/product"><span>SHOP NOW</span></Link>
                        </div>
                    </div>
                </div>
                <div className='slider_three'>
                    <div className="item_three">
                        <img src={slider_three} />
                    </div>
                    <div className='slider_items_three'>
                        <div className='slider_items_heading'>
                            <h1>Dummy Text</h1>
                        </div>
                        <div className='button_three'>
                            <Link to="/product"><span>SHOP NOW</span></Link>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
}

export default Slider;
