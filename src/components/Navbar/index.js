import React from "react"
import {Navbar,Container,Nav} from "react-bootstrap"


function landingNavbar(){
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Daily Hours</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/User">User Page</Nav.Link>
                    <Nav.Link href="/Project">Project Page</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default landingNavbar