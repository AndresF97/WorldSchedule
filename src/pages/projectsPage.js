import React, { Component } from "react";
import { Col, Row,Card,ProgressBar,ListGroup,Form } from "react-bootstrap";
import moment from "moment-timezone"




class projectsPage extends Component{
    //Setting state
    state={
        currentTime:"",
        projectName:"Your Project Name",
        currentProgress:60
    }
    //Component Mounted
    componentDidMount(){
        setInterval(()=> this.getCurrentTime(),1000)

    }
    getCurrentTime= ()=>{
        this.setState({currentTime: moment().format('h:mm:ss a')})
    }
    render(){
        return(
        <div>
            <h1 className="text-center">Porject pages</h1>
            <h3 className="text-center">Your current time: {this.state.currentTime}</h3>
            <h3 className="text-center">{this.state.projectName}</h3>
            <ProgressBar style={{width:'50%',display:'block',marginLeft:'auto',marginRight:'auto',textAlign:"center"}}animated now={this.state.currentProgress} label={`${this.state.currentProgress}%`} />
            <Row>
                <Col className="mr-1">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Todo List:</Card.Title>
                        <Card.Text>
                        <ListGroup>
                            <ListGroup.Item><Form.Check type="checkbox" label="Check me out" /> </ListGroup.Item>
                            <ListGroup.Item><Form.Check type="checkbox" label="Check me out" /> </ListGroup.Item>
                            <ListGroup.Item><Form.Check type="checkbox" label="Check me out" /> </ListGroup.Item>
                            <ListGroup.Item><Form.Check type="checkbox" label="Check me out" /> </ListGroup.Item>
                            <ListGroup.Item><Form.Check type="checkbox" label="Check me out" /> </ListGroup.Item>
                        </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>

        )
    }

}

export default projectsPage;