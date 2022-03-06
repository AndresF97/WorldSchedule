import React, { Component } from "react"
import NavbarLanding from "../components/Navbar"
import {Button, FormControl, InputGroup,Form,Row, Col} from "react-bootstrap"
import moment from "moment-timezone"

class UserPage extends Component{
    state   = {
        currenTime: "",
        currentCity:"",
        currentContinent:"",
        cityLivedIn:[],
        cityToSendWork:[]

    }
    componentDidMount(){
        console.log("Component mounted")
        setInterval(() => this.getCurrentTime(), 1000)
    }
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
            <h1>User Page</h1>
            <div className="text-center pt-4">
            <h1 name="currentTime">Your Current Time: {this.state.currenTime}</h1>
            </div>
            <Row className="d-flex justify-content-center pt-3">
                <Col sm={6}>
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
                    Search
                    </Button>
                </InputGroup>
                </Col>
            </Row>

        </div>
        )
    }
}


export default UserPage;