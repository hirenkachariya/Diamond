import React from 'react'
import './Engagement.css'
import { Container } from '@mui/material'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import engagement from '../img/engagement.jpeg'
import { Link } from 'react-router-dom'

function Engagement() {
    return (
        <div className='engagement'>
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className='engagement_image'>
                            <img src={engagement} />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='engagement_list'>
                            <div className='engagement_heading'>
                                <h3>Create Link custom engagement ring</h3>
                            </div>
                            <div className='engagement_paragraph'>
                                <p>Select Link setting and choose Link diamond to create your own Beyond Conflict Free engagement ring.</p>
                            </div>
                            <div className='engagement_button_one'>
                                <Link to='#'><span>START WITH Link SETTING</span></Link>
                            </div>
                            <div className='engagement_button_two'>
                                <Link to='/diamondlist'><span>START WITH Link DIAMOND</span></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Engagement
