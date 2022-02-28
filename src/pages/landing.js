import React, { Component } from "react"
import NavbarLanding from "../components/Navbar"
import {Button, FormControl, InputGroup,Dropdown,DropdownButton} from "react-bootstrap"
import moment from "moment-timezone"

class Landing extends Component{
    state   = {
        currentCity:"",
        currentCountry:"",
        cityLivedIn:[],
        cityToSendWork:[]

    }
    searchCitySearchButton = (event) =>{
        event.preventDefault()
        console.log(this.state.currentCity)
        console.log(moment().tz(`America/${this.state.currentCity}`).format('ha z'))
        console.log("hel")

    }
    searchCityEnter = event =>{
        if(event.key === 'Enter'){
            console.log("Enter pressed")
        }
    }
    handleInputChange = event =>{
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
        <div>
            <NavbarLanding/>
            <InputGroup className="mb-3">
                <FormControl
                name="currentCity"
                placeholder="City to look for"
                value = {this.state.currentCity}
                onKeyDown={this.searchCityEnter}
                onChange={this.handleInputChange}
                />
                <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">America</Dropdown.Item>
                    <Dropdown.Item href="#">Europe</Dropdown.Item>
                    <Dropdown.Item href="#">Africa</Dropdown.Item>
                    <Dropdown.Item href="#">Asia</Dropdown.Item>
                    <Dropdown.Item href="#">Indian</Dropdown.Item>
                    <Dropdown.Item href="#">Australia</Dropdown.Item>
                </DropdownButton>
                <Button variant="outline-secondary" id="button-addon2" onClick={this.searchCitySearchButton}>
                Search
                </Button>
            </InputGroup>
            

        </div>
        )
    }
}


export default Landing;