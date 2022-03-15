import React, { Component } from "react"
import AddProjectButton from "../components/addProjectButton"
import ProjectButton from "../components/projectButton"
import {Button, FormControl, InputGroup,Form,Row, Col, Accordion} from "react-bootstrap"
import moment from "moment-timezone"

class UserPage extends Component{

    // Making local state 
    state   = {
        currenTime: "",
        currentCity:"",
        currentContinent:"",
        cityLivedIn:[],
        cityToSendWork:[],
        show:false

    }
    // Makeing componenetmount this will make any function run as soon page is loaded
    componentDidMount(){
        console.log("Component mounted")
        setInterval(() => this.getCurrentTime(), 1000)
    }
    //gets current for the state
    getCurrentTime = () =>{
        this.setState({ currenTime : moment().format('h:mm:ss a')})
    }
    searchCitySearchButton = (event) =>{
        event.preventDefault()
        this.getTime(this.state.currentCity,this.state.currentContinent)

    }
    searchCityEnter = event =>{
        if(event.key === 'Enter'){
            console.log("Enter pressed")
            this.getTime(this.state.currentCity,this.state.currentContinent)
        }
    }
    addProjectsButton = (event) =>{
        event.preventDefault()
        console.log("add project clicked")
        this.setState({show: true})
        if(this.state.show){
            this.setState({show:false})
        }

    }
    handleInputChange = event =>{
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
    }
    getTime = (city, continent)=>{
        console.log(moment().tz(`${continent}/${city}`).format('h:mma z'))
        console.log("Moments Returned")
    }
    render(){
        return(
        <div>

            <div className="text-center pt-4">
            <h1>User Page</h1>
            <h1 name="currentTime">Your Current Time: {this.state.currenTime}</h1>
            </div>
            {/* START OF COUTRY CARD HOLDER */}
            <Row>
                <Col sm={1}>
                    {/* START OF ADD BUTTON ELEMENT */}
                    <AddProjectButton showFunction = {this.addProjectsButton}/>
                    {/* END OF ADD BUTTON ELEMENT */}
                </Col>
                <Col sm>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>COUNTRY NAME FLAG</Accordion.Header>
                            <Accordion.Body>
                                <ProjectButton/>
                                <ProjectButton/>
                                <ProjectButton/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col sm>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>COUNTRY NAME FLAG</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col sm>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>COUNTRY NAME FLAG</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col sm>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>COUNTRY NAME FLAG</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
             {/* END OF COUTRY CARD HOLDER */}
            {/* Away to search for city and time */}
            {this.state.show ?
            <Row className="d-flex justify-content-center pt-3">
                <Col sm={6}>
                <Form.Label htmlFor="basic-url">Add your time and project name:</Form.Label>
                <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                        Project Name:
                        </InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <InputGroup className="mb-5" >
                    <FormControl
                    name="currentCity"
                    placeholder="City to look for"
                    value = {this.state.currentCity}
                    onKeyDown={this.searchCityEnter}
                    onChange={this.handleInputChange}
                    />
                    <Form.Select 
                    aria-label="Select Continent" 
                    size="sm"
                    onChange={this.handleInputChange}
                    value={this.state.currentContinent}
                    name="currentContinent"
                    >
                        <option>Select Continent</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Indian">Indian</option>
                        <option value="Australia">Australia</option>
                    </Form.Select>
                    <Button variant="outline-secondary" id="button-addon2" onClick={this.searchCitySearchButton}>
                    Add
                    </Button>
                </InputGroup>
                </Col>
            </Row> :
            <>
            </>
            }
            {/* END OF GETTING TIME ELEMENT */}
        </div>
        )
    }
}


export default UserPage;