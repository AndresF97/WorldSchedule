import React from "react"
import {Navbar,Container,Nav} from "react-bootstrap"


function landingNavbar(){
    return(
        <>
        {/* Make props to make our sign in and sign up toggle, using an if statement */}
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
                <Nav>
                    <Nav.Link href="/">Sign In</Nav.Link>
                    <Nav.Link href="/">Sign Up</Nav.Link>
                 </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default landingNavbar