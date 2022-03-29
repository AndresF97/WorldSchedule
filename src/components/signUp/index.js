import React,{useState}from "react"
import {Nav,Modal,Button} from "react-bootstrap"
import "./style.css"


function SignUpBox(){
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Nav.Link onClick={handleShow} >Sign Up</Nav.Link>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <label for={"email"}>Email</label>
                <input type={"text"} name="email"required></input>
                <label for={"password"}>Password</label>
                <input type={"text"} name="password"required></input>
                <label for={"confirmPassword"}>Confirm Password</label>
                <input type={"text"} name="confirmPassword"required></input>
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

export default SignUpBox