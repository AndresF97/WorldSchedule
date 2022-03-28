import React, { Component } from "react";
import {Line} from "react-chartjs-2";
import Chart from "chart.js/auto"
import { Col, Row,Card,ProgressBar} from "react-bootstrap";
import moment from "moment-timezone"



class projectsPage extends Component{
    //Setting state
    state={
        currentTime:"",
        dummyData:{
            labels:["Date1","Date2","Date3","Date4","Date5","Date6"],
            datasets:[
                {
                    label:"Time worked",
                    data:[1,2,3,4,5,6],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                }
            ]
        },
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
            <h1 className="text-center">Single Porject page</h1>
            <h3 className="text-center">Your current time: {this.state.currentTime}</h3>
            <h3 className="text-center">{this.state.projectName}</h3>
            <ProgressBar style={{width:'50%',display:'block',marginLeft:'auto',marginRight:'auto',textAlign:"center"}}animated now={this.state.currentProgress} label={`${this.state.currentProgress}%`} />
            <Row>
                <Col className="m-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Todo List:</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <h1 className="text-center">Project Time remaining</h1>
                    <Line
                    className="m-2"
                    data={this.state.dummyData}
                    />
                </Col>
            </Row>
        </div>

        )
    }

}

export default projectsPage;