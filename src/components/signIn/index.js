import React, {useState} from "react"
import {Nav,Modal,Button} from "react-bootstrap"
import "./style.css"


function SignInBox(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
         <Nav.Link onClick={handleShow} >Sign In</Nav.Link>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
                <label for={"email"}>Email</label>
                <input type={"text"} name="email"required></input>
                <label for={"password"}>Password</label>
                <input type={"text"} name="password"required></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default SignInBox;