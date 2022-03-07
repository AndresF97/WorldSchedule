import React, { Component } from "react"
import moment from "moment-timezone"
import Parallax from "../components/parallax"

class Landing extends Component{
    state   = {
        currenTime: "",
        currentCity:"",

    }
    componentDidMount(){
        console.log("Component mounted")
        setInterval(() => this.getCurrentTime(), 1000)
    }
    getCurrentTime = () =>{
        this.setState({ currenTime : moment().format('h:mm:ss a')})
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
             <Parallax />
            <div className="text-center pt-4">
            <h1 name="currentTime">Your Current Time: {this.state.currenTime}</h1>
            </div>
        </div>
        )
    }
}


export default Landing;