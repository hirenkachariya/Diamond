import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import logo from '../img/logo.png'
import img_one from '../img/img_1.jpg'
import img_two from '../img/img_2.jpg'
import './Header.css'
import { Link } from '@mui/material';

function BasicExample() {
    return (
        <>
            <Navbar expand="lg" className="px-4 d-lg-block d-none navbar pb-3 pt-2">
                <Container fluid className='justify-content-center'>
                    <Row className='w-100 align-items-center'>
                        <Col sm={4}>
                            <div className='header-input'>
                                <SearchOutlinedIcon />
                                <input type='text' placeholder='SEARCH' />
                            </div>
                        </Col>
                        <Col sm={4} className='text-center'>
                            <div className='main_logo'>
                                <Link to='/'><img className='logo_images' src={logo} /></Link>
                            </div>
                        </Col>
                        <Col sm={4} className='text-end'>
                            <div className='header-icon'>
                                <Link to='#'><PermIdentityIcon className='me-3' /></Link>
                                <Link to='#'><FavoriteBorderIcon /></Link>
                                <ShoppingBasketOutlinedIcon className='ms-3' />
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className='header-menu'>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav ">
                                    <Nav className="m-auto">
                                        <li to="#home"><Link to='#' className='hoverME'>Home</Link></li>
                                        <li className='dropdwon_page_one' to="#"><Link to='#'>Engagement Rings</Link>
                                            <div className='dropdwon-one'>
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <div className='Engagement-box'>
                                                                <div className='Engagement-style-heading heading'>
                                                                    <h5><Link to='#'>ENGAGEMENT RING STYLES</Link></h5>
                                                                </div>
                                                                <div className='Engagement-style-list heading_list'>
                                                                    <ul>
                                                                        <li><Link to='#'>Solitaire</Link></li>
                                                                        <li><Link to='#'>Three Stone</Link></li>
                                                                        <li><Link to='#'>Hidden Halo</Link></li>
                                                                        <li><Link to='#'>Halo</Link></li>
                                                                        <li><Link to='#'>Nature Inspired</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='WOMEN-box'>
                                                                <div className='WOMEN-heading heading'>
                                                                    <h5><Link to='#'>WOMEN</Link></h5>
                                                                </div>
                                                                <div className='WOMEN-list heading_list'>
                                                                    <ul>
                                                                        <li><Link to='#'>Stackable Rings</Link></li>
                                                                        <li><Link to='#'>Anniversary Rings</Link></li>
                                                                        <li><Link to='#'>Eternity Rings</Link></li>
                                                                        <li><Link to='#'>Curved Rings</Link></li>
                                                                        <li><Link to='#'>Emerald Rings</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='MEN-box'>
                                                                <div className='MEN-heading heading'>
                                                                    <h5><Link to='#'>MEN</Link></h5>
                                                                </div>
                                                                <div className='MEN-list heading_list'>
                                                                    <ul>
                                                                        <li><Link to='#'>Classic Rings</Link></li>
                                                                        <li><Link to='#'>Men's Engagement Rings</Link></li>
                                                                        <li><Link to='#'>Matte Rings</Link></li>
                                                                        <li><Link to='#'>Textured Rings</Link></li>
                                                                        <li><Link to='#'>Men's Jewelry</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='FEATURED-box'>
                                                                <div className='FEATURED-heading heading'>
                                                                    <h5><Link to='#'>FEATURED</Link></h5>
                                                                </div>
                                                                <div className='FEATURED-list heading_list'>
                                                                    <ul>
                                                                        <li><Link to='#'>New Arrivals</Link></li>
                                                                        <li><Link to='#'>Women's Top Twenty</Link></li>
                                                                        <li><Link to='#'>Men's Top Twenty</Link></li>
                                                                        <li><Link to='#'>Wedding Jewelry</Link></li>
                                                                        <li><Link to='#'>Gender Neutral Rings</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </li>
                                        <li className='dropdwon_page_two' to="#link"><Link to='#'>Wedding Rings</Link>
                                            <div className='dropdwon-two'>
                                                <Container>
                                                    <Row>
                                                        <Col sm={3}>
                                                            <div className='wedding-women-box'>
                                                                <div className='wedding-women-heading heading-one'>
                                                                    <h5><Link to='#'>WOMEN</Link></h5>
                                                                </div>
                                                                <div className='wedding-women-list heading-one-list'>
                                                                    <ul>
                                                                        <li><Link to='#'>Women's Wedding Rings</Link></li>
                                                                        <li><Link to='#'>Stackable Rings</Link></li>
                                                                        <li><Link to='#'>Anniversary Rings</Link></li>
                                                                        <li><Link to='#'>Eternity Rings</Link></li>
                                                                        <li><Link to='#'>Curved Rings</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col sm={3}>
                                                            <div className='wedding-men-box'>
                                                                <div className='wedding-men-heading heading-one'>
                                                                    <h5><Link to='#'>MEN</Link></h5>
                                                                </div>
                                                                <div className='wedding-men-list heading-one-list'>
                                                                    <ul>
                                                                        <li><Link to='#'>Classic Ringss</Link></li>
                                                                        <li><Link to='#'>Men's Wedding Rings</Link></li>
                                                                        <li><Link to='#'>Matte Rings</Link></li>
                                                                        <li><Link to='#'>Textured Rings</Link></li>
                                                                        <li><Link to='#'>Men's Jewelry</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className='pick-box'>
                                                                <div className='pick-box-heading heading-one'>
                                                                    <h5><Link to='#'>EDITORS NEW PICKS</Link></h5>
                                                                </div>
                                                                <Row className='pt-3'>
                                                                    <Col sm={6}>
                                                                        <div className='pick-image-one'>
                                                                            <Link to='#'><img src={img_one} /></Link>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <div className='pick-image-two'>
                                                                            <Link to='#'><img src={img_two} /></Link>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                <div className='Introducting-box'>
                                                                    <div className='Introducting-heading'>
                                                                        <span>Introducting New Collection</span>
                                                                    </div>
                                                                    <div className='Introducting-span'>
                                                                        <ul>
                                                                            <li><Link to='#'>Shop Now</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </li>
                                        <li to="#link"><Link to='#'>About Us</Link></li>
                                        <li to="#link"><Link to='#'>Contact Us</Link></li>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar >
            <Navbar expand="lg" className="bg-body-tertiary  d-lg-none d-block nav_2">
                <Container fluid className='justify-content-center w-100 px-5 mb-2'>
                    <Row className='w-100 align-items-center'>
                        <Col xs={6} className='text-center'>
                            <div className='main_logo text-start'>
                                <img className='logo_images' src={logo} />
                            </div>
                        </Col>
                        <Col xs={6} className='text-end'>
                            <div className='header-icon'>
                                <ShoppingBasketOutlinedIcon className='me-3' />
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='header-menus'>
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="m-auto colors">
                            <Nav.Link className='borders p-3 w-100 nav_link' to="#home">Home</Nav.Link>
                            <NavDropdown className='p-2 ps-3' title="Engagement Rings" id="basic-nav-dropdown">
                                <NavDropdown.Item to="#">Solitaire</NavDropdown.Item>
                                <NavDropdown.Item to="#">Three Stone</NavDropdown.Item>
                                <NavDropdown.Item to="#">Hidden Halo</NavDropdown.Item>
                                <NavDropdown.Item to="#">Halo</NavDropdown.Item>
                                <NavDropdown.Item to="#">Nature Inspired</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='p-2 ps-3 borders' title="Wedding Rings" id="basic-nav-dropdown">
                                <NavDropdown.Item to="#">Solitaire</NavDropdown.Item>
                                <NavDropdown.Item to="#">Three Stone</NavDropdown.Item>
                                <NavDropdown.Item to="#">Hidden Halo</NavDropdown.Item>
                                <NavDropdown.Item to="#">Halo</NavDropdown.Item>
                                <NavDropdown.Item to="#">Nature Inspired</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='borders p-3 w-100 nav_link' to="#link">About Us</Nav.Link>
                            <Nav.Link className='borders p-3 w-100 nav_link' to="#link">Contact Us</Nav.Link>
                        </Nav>
                        <div className='header-icons mt-4'>
                            <ul>
                                <li><PermIdentityIcon /><span>Login</span></li>
                                <li><FavoriteBorderIcon /><span>Wish List</span></li>
                                <li><ShoppingBasketOutlinedIcon /><span>Cart</span></li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar >
        </>
    );
}

export default BasicExample;