import React from 'react'
import './ProductView.css'
import Header from './Header';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Footer from './Footer';
import TuneIcon from '@mui/icons-material/Tune';
import Slider from "@mui/material/Slider";
import Touch from './Touch';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ProductFilter from './ProductFilter';
import collection_4 from '../img/p1.jpg'
import product_hover_4 from '../img/product_hover_4.jpeg'
import { Link } from '@mui/material';


function ProductView() {
    const [show, setShow] = useState(false);
    const [range, setRange] = React.useState([200, 4000]);

    function handleChanges(event, newValue) {
        setRange(newValue);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='product'>
            <Header />
            <div className='product_blog'>
                <div className='product_blog_home'>
                    <Link to='#'>Home</Link>
                    <p>/</p>
                    <span>Product List</span>
                </div>
                <div className='product_blog_home_icon'>
                    <div className='product_side' show={show} onClick={handleShow}>
                        <p><TuneIcon /><span>Filters</span></p>
                    </div>

                    <div className='product_list_dropdown'>
                        <select>
                            <option>Default sorting</option>
                            <option>Sort by popularity</option>
                            <option>Sort by latest</option>
                            <option>Sort by price high to low</option>
                            <option>Sort by price low to high</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='product_blog_diamond'>
                <Container>
                    <Row>
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                        <ProductFilter Img={collection_4} Product_Img={product_hover_4} Ring='PETITE MICROPAVE DIAMOND RING' Diam='Diamond Accessories' Price='82.00 $' />
                    </Row>
                </Container>
            </div>
            <Touch />
            <Footer />
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>FILTER BY</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='product_list_box'>
                        <div className='product_heading'>
                            <h5>PRICE</h5>
                        </div>
                        <div className='product_slider'>
                            <Slider value={range} onChange={handleChanges} min={200} max={4000} valueLabelDisplay="auto" />
                            <div className='product_slider_range'>
                                <span>${range[0]}</span><p>${range[1]}</p>
                            </div>
                        </div>
                        <div className='product_metal'>
                            <div className='product_metal_heading'>
                                <h5>METAL TYPE</h5>
                            </div>
                            <div className='product_metal_list'>
                                <ul>
                                    <li><Link to='#'>14K Rose Gold</Link></li>
                                    <li><Link to='#'>14K White Gold</Link></li>
                                    <li><Link to='#'>14K Yellow Gold</Link></li>
                                    <li><Link to='#'>18K Rose Gold</Link></li>
                                    <li><Link to='#'>18K White Gold</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='product_Diamond'>
                            <div className='product_Diamond_heading'>
                                <h5>DIAMOND TYPE</h5>
                            </div>
                            <div className='product_Diamond_list'>
                                <ul>
                                    <li><Link to='#'>Round</Link></li>
                                    <li><Link to='#'>Asscher</Link></li>
                                    <li><Link to='#'>Cushion</Link></li>
                                    <li><Link to='#'>Emerald</Link></li>
                                    <li><Link to='#'>Heart</Link></li>
                                    <li><Link to='#'>Princess</Link></li>
                                    <li><Link to='#'>Radiant</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='product_Weight'>
                            <div className='product_Weight_heading'>
                                <h5>WEIGHT</h5>
                            </div>
                            <div className='product_Weight_list'>
                                <ul>
                                    <li><Link to='#'>Less Than 2 Grams</Link></li>
                                    <li><Link to='#'>2 Grams To 4 Grams</Link></li>
                                    <li><Link to='#'>4 Grams To 6 Grams</Link></li>
                                    <li><Link to='#'>6 Grams And Above</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='product_Setting'>
                            <div className='product_Setting_heading'>
                                <h5>SETTING TYPE</h5>
                            </div>
                            <div className='product_Setting_list'>
                                <ul>
                                    <li><Link to='#'>Prong</Link></li>
                                    <li><Link to='#'>Channel</Link></li>
                                    <li><Link to='#'>Micro Pave</Link></li>
                                    <li><Link to='#'>Bazel</Link></li>
                                    <li><Link to='#'>Pre-pave</Link></li>
                                    <li><Link to='#'>Pressure</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default ProductView
