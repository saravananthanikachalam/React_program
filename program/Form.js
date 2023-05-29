import React, { Component } from 'react'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            sname:'',
            gender:'',
            gen:'',
            addr:'',
            pass:'',
        }
    }
    nameHandler=(event)=>{
        this.setState({
            sname:event.target.value})
    }
   // genderHandler=(event)=>{
     //   this.setState({
       //     gender:event.target.value})
    //}
    
    addrHandler=(event)=>{
        this.setState({addr:event.target.value})
    }
    genHandler=(event)=>{
        this.setState({gen:event.target.value})
    }
    
    passHandler=(event)=>{
        this.setState({pass:event.target.value})
    }
    submitHandler=(event)=>{
        alert(
            "Name: "+`${this.state.sname}`+
            "Address: "+`${this.state.addr}`+
            "Radio Gender: "+`${this.state.gen}`+
            "password: "+`${this.state.pass}`
           // "Gender: "+`${this.state.gender}`
        )
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Enter the name</label>
                    <input type="text"
                     value={this.state.sname} 
                     onChange={this.nameHandler}
                     ></input>
                </div>
                {/*<div>
                    <label>Choose the gender</label>
                    <select value={this.state.gender} onChange={this.genderHandler}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
        </div>*/}
                <div value={this.state.gen} onChange={this.genHandler}>
                    <label>Choose the gender</label>
                    <input type="radio" name="gen" value="Male"/>Male
                    <input type="radio" name="gen" value="Female"/>Female
                </div>
                <div>
                    <label>passords</label>
                    <input type="password" name="pass"
                    value={this.state.pass}
                    onChange={this.passHandler}></input>
                </div>
                <div>
                    <label>Enter the address</label>
                    <textarea 
                    row="4" 
                    value={this.state.addr} 
                    onChange={this.addrHandler}
                    ></textarea>               
                    </div>
                    <div>
                     <button>Submit</button>
                    </div>
            </form>
        )
    }
}
export default Form