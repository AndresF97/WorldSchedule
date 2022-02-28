import React, { Component } from "react"
import NavbarLanding from "../components/Navbar"
import {Button, FormControl, InputGroup,Form,Row, Col} from "react-bootstrap"
import moment from "moment-timezone"

class Landing extends Component{
    state   = {
        currentCity:"",
        currentContinent:"",
        cityLivedIn:[],
        cityToSendWork:[]

    }
    searchCitySearchButton = (event) =>{
        event.preventDefault()
        console.log(this.state.currentCity)
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
        console.log(moment().tz(`${continent}/${city}`).format('ha z'))
        console.log("hel")
    }
    render(){
        return(
        <div>
            <NavbarLanding/>
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
                    <Form.Select aria-label="Select Continent" size="sm">
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


export default Landing;