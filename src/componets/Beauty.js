import React from 'react'
import './Beauty.css'
import beauty_1 from '../img/beauty_1.jpeg'
import beauty_2 from '../img/beauty_2.jpeg'
import beauty_3 from '../img/beauty_3.png'
import beauty_4 from '../img/beauty_4.jpeg'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

function Beauty() {
    return (
        <div className='beauty'>
            <Container>
                <Row className='gx-5'>
                    <Col sm={6}>
                        <div className='beauty_op'>
                            <div className='beauty_blog_one'>
                                <Link to='#'><img src={beauty_1} /></Link>
                            </div>
                            <div className='beauty_op_list_one'>
                                <div className='beauty_blog_one_heading'>
                                    <h4><Link to='#'>SOPHISTICATED</Link></h4>
                                </div>
                                <div className='beauty_op_button'>
                                    <ul>
                                        <li><Link to='#'>FIND MORE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='beauty_op'>
                            <div className='beauty_blog_two'>
                                <Link to='#'><img src={beauty_2} /></Link>
                            </div>
                            <div className='beauty_op_list_two'>
                                <div className='beauty_blog_two_heading'>
                                    <h4><Link to='#'>BEAUTY BRACELESTS</Link></h4>
                                </div>
                                <div className='beauty_op_buttons'>
                                    <ul>
                                        <li><Link to='#'>FIND MORE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='beauty_box_one'>
                            <div className='beauty_box_one_list_box'>
                                <div className='beauty_box_one_img text-center'>
                                    <img src={beauty_3} />
                                </div>
                                <div className='beauty_box_one_list text-center pt-4'>
                                    <div className='beauty_box_one_list_heading'>
                                        <h5>MORE CATEGORIES</h5>
                                    </div>
                                    <div className='beauty_box_one_list_paragraph'>
                                        <p>Lorem Ipsum estibulum blandit libero atretenem turmauristeu con dimentum</p>
                                    </div>
                                    <div className='beauty_box_one_list_find'>
                                        <ul>
                                            <li><Link to='#'>FIND MORE</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='beauty_op'>
                            <div className='beauty_box_two'>
                                <Link to='#'><img src={beauty_4} /></Link>
                            </div>
                            <div className='beauty_op_list_three'>
                                <div className='beauty_box_two_heading'>
                                    <h4><Link to='#'>NEW EARRINGS</Link></h4>
                                </div>
                                <div className='beauty_op_button'>
                                    <ul>
                                        <li><Link to='#'>FIND MORE</Link></li>
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

export default Beauty
