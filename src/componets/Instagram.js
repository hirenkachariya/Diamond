import React from 'react'
import './Instagram.css'
import { Container } from '@mui/material'
import InstagramProduct from './InstagramProduct'
import inst_1 from '../img/inst_1.jpeg'
import inst_2 from '../img/inst_2.jpeg'
import inst_3 from '../img/inst_3.jpeg'
import inst_4 from '../img/inst_4.jpeg'
import inst_5 from '../img/inst_5.jpeg'
import inst_6 from '../img/inst_6.jpeg'
import inst_7 from '../img/inst_7.jpeg'
import inst_8 from '../img/inst_8.jpeg'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'

function Instagram() {
    return (
        <div className='instagram'>
            <Container>
                <div className='instagram_heading text-center'>
                    <h3>INSTAGRAM</h3>
                </div>
                <div className='instagram_img'>
                    <Row>
                        <InstagramProduct Inst={inst_1} />
                        <InstagramProduct Inst={inst_2} />
                        <InstagramProduct Inst={inst_3} />
                        <InstagramProduct Inst={inst_4} />
                        <InstagramProduct Inst={inst_5} />
                        <InstagramProduct Inst={inst_6} />
                        <InstagramProduct Inst={inst_7} />
                        <InstagramProduct Inst={inst_8} />
                    </Row>
                </div>
                <div className='story_heading'>
                    <h4>Lovbloom Story</h4>
                    <Link to='#'>@Lovbloom</Link>
                </div>
            </Container>
        </div>
    )
}

export default Instagram
