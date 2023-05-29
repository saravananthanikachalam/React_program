import React, { Component } from 'react'
class Preosclass extends Component{
    render(){
        return <div>
            <h1> The program is Props mathod to class function</h1>
             <h3>Hi {this.props.name} Im from {this.props.city} </h3>
        </div>
    }
}
export default Preosclass