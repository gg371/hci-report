import React, { Component } from 'react'
import '../Home.css'
import '../PageFormat.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap'

export default class Menu extends Component {
  render() {
    return (
        <Navbar expand="md" style={{ position: "sticky", top: 0, borderBottom: "1px solid black", fontFamily: "Open Sans", fontSize: '21px', background: '#ef9273', color: '#0d0d0d'}}>
        <Container style={{ margin: '0.3rem'}}>
            <LinkContainer to='/Home' style={{ fontSize: '30px' }}>
                <Navbar.Brand>HCI Report</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to='/Home'>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/LR'>
                    <Nav.Link>Literacy Research</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Reflections" id="basic-nav-dropdown">
                    {/* TODO: Make components for each page for our reflections */}
                    <LinkContainer to='/Gracyn'>
                        <NavDropdown.Item>
                            Gracyn Green
                        </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/Richard'>
                        <NavDropdown.Item>
                            Richard Anstice
                        </NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
    }
}