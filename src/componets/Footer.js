import React from 'react'
import './Footer.css'
import { Container } from '@mui/material'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import footer_logo from '../img/footer_logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <div className='footer_logo'>
                                <div className='footer_heading'>
                                    <h4>LOVBLOOM JEWELRY SHOP</h4>
                                </div>
                                <div className='footer_logo_images'>
                                    <Link to='#'><img src={footer_logo} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={12}>
                            <div className='footer_GENERAL'>
                                <div className='footer_GENERAL_heading'>
                                    <h5>GENERAL</h5>
                                </div>
                                <div className='footer_GENERAL_list'>
                                    <ul>
                                        <li><Link to='#'>Shipping</Link></li>
                                        <li><Link to='#'>Order status</Link></li>
                                        <li><Link to='#'>Exchanges & Returns</Link></li>
                                        <li><Link to='#'>Size Guide</Link></li>
                                        <li><Link to='#'>Jewelry Care</Link></li>
                                        <li><Link to='#'>FAQ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={12}>
                            <div className='footer_about'>
                                <div className='footer_about_heading'>
                                    <h5>ABOUT</h5>
                                </div>
                                <div className='footer_about_list'>
                                    <ul>
                                        <li><Link to='#'>Our World</Link></li>
                                        <li><Link to='#'>Our Packaging</Link></li>
                                        <li><Link to='#'>Our Client</Link></li>
                                        <li><Link to='#'>Stories</Link></li>
                                        <li><Link to='#'>Gift Cards</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={12}>
                            <div className='foooter_CATEGORIES'>
                                <div className='footer_CATEGORIES_heading'>
                                    <h5>CATEGORIES</h5>
                                </div>
                                <div className='foooter_CATEGORIES_list'>
                                    <ul>
                                        <li><Link to='#'>New In</Link></li>
                                        <li><Link to='#'>C</Link></li>
                                        <li><Link to='#'>Earrings</Link></li>
                                        <li><Link to='#'>Rings</Link></li>
                                        <li><Link to='#'>Necklace</Link></li>
                                        <li><Link to='#'>Bracelets</Link></li>
                                        <li><Link to='#'>All Jewelry</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer_bottom text-center'>
                <span>© 2023 <Link to='#'>LOVBLOOM, </Link><p> All Rights Reserved</p></span>
            </div>
        </>
    )
}

export default Footer
