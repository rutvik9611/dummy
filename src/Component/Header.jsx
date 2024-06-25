import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    // const count = useSelector((state) => state.counter.cart);
    // console.log(count);
    return (
        <>
            <Navbar expand="lg" className="border border-bottom">
                <Container>
                    <Navbar.Brand href="#home"><h2>DummyJSON</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='text-black fw-bold fs-5 me-2 ms-2'>Home</Nav.Link>
                            <Nav.Link href="#link" className='text-black fw-bold fs-5 me-2 ms-2'>About</Nav.Link>
                            <Nav.Link href="#link" className='text-black fw-bold fs-5 me-2 ms-2'>Blog</Nav.Link>
                            <Nav.Link href="#link" className='text-black fw-bold fs-5 me-2 ms-2'>Contact</Nav.Link>
                            <Nav.Link href="#link" className='text-black fw-bold fs-5 me-2 ms-2'>Services</Nav.Link>
                            <Nav.Link href="/" className='text-black fw-bold fs-5 me-2 ms-2'>Product</Nav.Link>
                        </Nav>
                        <Link to='cart'><i><FaCartArrowDown /></i></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
