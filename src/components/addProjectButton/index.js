import React,{useState} from "react";
import {Modal,Button} from "react-bootstrap"
import "./style.css";

function AddProjectButton(props){
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <button id="addButton"  onClick={handleShow}>
                +
            </button>
            {/* AS SOON AS THE BUTTON IS CLICKED IT SHOULD DISPLAY THE TIME SELECTION AND PORJECT NAME */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Enter Project info</Modal.Title>
                </Modal.Header>
                <Modal.Body>

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
        </div>
    )
}

export default AddProjectButton;