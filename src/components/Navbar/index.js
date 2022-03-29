import React  from "react"
import SignInBox from "../signIn";
import SignUpBox from "../signUp"
import {Navbar,Container,Nav} from "react-bootstrap"


function LandingNavbar(){
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
                    <SignInBox/>
                    <SignUpBox/>
                 </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default LandingNavbar;