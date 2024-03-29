import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbelow.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars, faChevronDown, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';



function Navbelow() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className=" text-light " >
            <Navbar expand="lg" className='navbelow ' >
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" me-auto bg-body-dark">
                            {/*  <Nav.Link  href="#home"><FontAwesomeIcon icon={faBars} /> All</Nav.Link>
                            <Nav.Link className='text-light pe-3' style={{fontWeight:'700'}}  href="#link">Today's Deals</Nav.Link>
                            <Nav.Link className='text-light pe-3' style={{fontWeight:'700'}}  href="#link">Customer Services</Nav.Link>
                            <Nav.Link className='text-light pe-3' style={{fontWeight:'700'}}  href="#link">Registry</Nav.Link>
                            <Nav.Link className='text-light pe-3' style={{fontWeight:'700'}}  href="#link">Gift Cards</Nav.Link>
                            <Nav.Link className='text-light pe-3' style={{fontWeight:'700'}}  href="#link">Sells</Nav.Link>  */}
                            <div className='below_nav d-flex align-items-center pt-2 ' >
                                <h6 ><FontAwesomeIcon icon={faBars} onClick={handleShow} /> All </h6>
                                <h6> Today's Deals</h6>
                                <h6>Customer Services</h6>
                                <h6>Registry</h6>
                                <h6>Gift Cards</h6>
                                <h6>Sell</h6>

                            </div>

                            <Offcanvas  show={show} onHide={handleClose} >
                                <Offcanvas.Header className=' bg-black w-100 ' closeButton >
                                    <Offcanvas.Title className='ps-4 text-light' > <FontAwesomeIcon icon={faUser} /> Hello, sign in</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body style={{cursor:'pointer'}} className='pt-3 '>
                                    <div className='ms-3'>
                                        <h5>Digital Content & Devices</h5>
                                        <p>Amazon Music <FontAwesomeIcon style={{paddingLeft:'205px'}} icon={faChevronRight}  /></p>
                                        <p>Kindle E-readers & Books <FontAwesomeIcon style={{paddingLeft:'130px'}} icon={faChevronRight}  /></p>
                                        <p>Amazon Appstore <FontAwesomeIcon style={{paddingLeft:'180px'}} icon={faChevronRight}  /></p>
                                    </div>
                                    <hr />
                                    <div className='ms-3'>
                                        <h5>Shop by Department </h5>
                                        <p>Electronics <FontAwesomeIcon style={{paddingLeft:'230px'}} icon={faChevronRight}  /></p>
                                        <p>Computers <FontAwesomeIcon style={{paddingLeft:'228px'}} icon={faChevronRight}  /></p>
                                        <p>Smart Home <FontAwesomeIcon style={{paddingLeft:'218px'}} icon={faChevronRight}  /></p>
                                        <p>Arts & Crafts<FontAwesomeIcon style={{paddingLeft:'218px'}} icon={faChevronRight}  /></p>
                                        <p>See All <FontAwesomeIcon icon={faChevronDown} /></p>
                                    </div>
                                    <hr />
                                    <div className='ms-3'>
                                        <h5>Programs & Features</h5>
                                        <p>Gift Cards <FontAwesomeIcon style={{paddingLeft:'235px'}} icon={faChevronRight}  /></p>
                                        <p>Shop By Internet</p>
                                        <p>Amazon Live <FontAwesomeIcon style={{paddingLeft:'217px'}} icon={faChevronRight}  /></p>
                                        <p>International Shopping <FontAwesomeIcon style={{paddingLeft:'145px'}} icon={faChevronRight}  /></p>
                                        <p>See All <FontAwesomeIcon icon={faChevronDown} /></p>
                                    </div>
                                    <hr />
                                    <div className='ms-3'>
                                        <h5>Help & Settings</h5>
                                        <p>Your Account</p>
                                        <p>English</p>
                                        <p>United States</p>
                                        <p>Customer Service</p>
                                        <p>Sign In </p>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbelow