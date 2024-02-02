import { Container } from '@mui/material'
import React from 'react'
import './Touch.css'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom'

function Touch() {
    return (
        <div className='touch text-center'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='touch_contact'>
                            <div className='touch_contact_heading'>
                                <h5>CONTACT</h5>
                            </div>
                            <div className='touch_contact_paragraph'>
                                <p>Working hours Mon-Fri 10am-6pm</p>
                            </div>
                            <div className='touch_contact_number'>
                                <Link to=""><span>999-999-9999</span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='touch_GET'>
                            <div className='touch_GET_heading'>
                                <h5>LET'S GET IN TOUCH!</h5>
                            </div>
                            <div className='touch_GET_paragraph'>
                                <p>What' s inside? Exclusive sales, new arrivals & much more.</p>
                            </div>
                            <div className='touch_GET_input'>
                                <p to='#'><input type='text' placeholder='Email address' /><span><Link to='#'>SIGN UP</Link></span></p>
                            </div>
                            <div className='touch_GET_des'>
                                <span>* I accept the privacy and cookies policy to receive</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='touch_SOCIAL'>
                            <div className='touch_SOCIAL_heading'>
                                <h5>SOCIAL NETWORKS</h5>
                            </div>
                            <div className='touch_SOCIAL_list'>
                                <ul>
                                    <Link to='#'><FacebookIcon /></Link>
                                    <Link to='#'><LinkedInIcon /></Link>
                                    <Link to='#'><TwitterIcon /></Link>
                                    <Link to='#'><YouTubeIcon /></Link>
                                    <Link to='#'><PinterestIcon /></Link>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Touch
