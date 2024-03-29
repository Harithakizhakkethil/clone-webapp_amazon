import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';





function Header() {
    return (
        <div>

            <div className='navigation'>
                <Navbar expand="lg" className="bg-body-dark">
                    <Container fluid>
                        <Navbar.Brand href="#home"> <img className='navigation_logo' src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link href="#home"><h4 className='navigation_text text-white' style={{ fontSize: '13px', paddingRight: '18px', fontWeight: '300', paddingTop: '10px' }}>Deliver  to <br />   <span style={{ fontSize: '18px', fontWeight: '600' }}> <FontAwesomeIcon icon={faLocationDot} />India</span></h4>
                                </Nav.Link>
                                <Form inline style={{ marginTop: '10px' }}>
                                    <InputGroup>
                                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'lightgrey' }} >
                                            <Dropdown className='text-light' >
                                                <Dropdown.Toggle className='dropdown' style={{ height: '30px', fontSize: '15px', position: 'Top', alignItems: 'center', color: 'black', backgroundColor: 'lightgrey', borderRadius: '5px 0px 0px 5px' }} variant="Secondary" >All</Dropdown.Toggle>
                                                <Dropdown.Menu >
                                                    <Dropdown.Item href="#/action-1">Arts & Crafts</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Automotive</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Baby</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Beauty & Personal Care</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Boy's Fashion</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Computers</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Deals</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </InputGroup.Text>
                                        <input type="text" className='navigation_searchInput' placeholder="Search Amazon" />


                                        <SearchIcon className='navigation_searchIcon ' />
                                    </InputGroup>

                                </Form>

                                <Dropdown className='text-light' >
                                    <Dropdown.Toggle className='dropdown' style={{ height: '40px', fontSize: '15px', position: 'Top', alignItems: 'center', color: 'white', backgroundColor: 'none', borderRadius: '5px 5px 5px 5px', marginTop: '15px', fontWeight: '600', paddingRight: '10px' }} variant="Secondary" > <img style={{ width: '40px', paddingRight: '8px', paddingLeft: '8px' }} src="https://cdn.britannica.com/76/4476-050-E643DD49/Betsy-Ross-legend-flag-united-states.jpg" alt="" />EN</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className='navigation_options'>
                                    <Dropdown className='text-light' >
                                        <Dropdown.Toggle className='dropdown' style={{ height: '60px', fontSize: '15px', position: 'Top', alignItems: 'center', color: 'white', backgroundColor: 'none', borderRadius: '5px 0px 0px 5px', fontWeight: '600', paddingLeft: '15px', paddingRight: '0px' }} variant="Secondary" ><span style={{ fontSize: '11px', alignItems: 'start', display: 'flex' }}>Hello,Sign In</span>   Account & Lists</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div className='Returns'>
                                    <p style={{ color: 'white', fontSize: '12px' }}> Returns<span className='order'> & Orders</span></p>
                                </div>
                                <div className='cart'>
                                <FontAwesomeIcon icon={faCartShopping} style={{fontSize:'30px'}} />cart
                                </div>                              
                            </Nav>
                        </Navbar.Collapse >
                    </Container>
                </Navbar>
            </div>

        </div>
    )
}

export default Header