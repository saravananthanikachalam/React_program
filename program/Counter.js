import React, { Component }  from 'react'
class Count extends Component{
    constructor(){
        super()
        this.state={
            Count:0
        }
    }
    incr(){
        this.setState({
            Count:this.state.Count+1
        })
    }
    render(){
        return(
            
        <div>
            <h1>This Count in react program</h1>
            <h3>start {this.state.Count}</h3>
            <button onClick={()=>this.incr()}>count</button>
        </div>
        )
    }
}
export default Count
