import { Container } from '@mui/material'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import girl_1 from '../img/girl_1.jpeg'
import girl_2 from '../img/girl_2.jpeg'
import './Paretty.css'
import { Link } from 'react-router-dom'

function Paretty() {
    return (
        <div className='paretty'>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <div className='paretty_one'>
                            <div className='paretty_one_img'>
                                <Link to=""><img src={girl_1} /></Link>
                            </div>
                            <div className=' paretty_one_list'>
                                <div className='paretty_one_heading'>
                                    <h4>Elsa Paretty Jewelry</h4>
                                </div>
                                <div className='paretty_one_paragraph'>
                                    <p> Lorem Ipsum estibulum blandi </p>
                                </div>
                            </div>
                            <div className='paretty_one_button'>
                                <Link to='#'><span>SHOP NOW</span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className='paretty_two'>
                            <div className='paretty_two_img'>
                                <Link to='#'><img src={girl_2} /></Link>
                            </div>
                            <div className='paretty_two_list'>
                                <div className='paretty_two_heading'>
                                    <h4>Euphoria</h4>
                                </div>
                                <div className='paretty_two_button'>
                                    <ul>
                                        <li><Link to='#'>SHOP MORE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Paretty
