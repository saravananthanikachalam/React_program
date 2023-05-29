import React,{useState}from 'react'
function Login(){
    let [email,setEmail]=useState("")
    let [pass,setpass]=useState("")
    let [number,setnumb]=useState("")
    function submitHandler(){
        if(number==="9944682931" & pass==="9898")
        {
            alert("Success")
        }
        else{
            alert("Failed")
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label foremail="email">Enter the e-mail : </label>
                <input type='email' value={email} onChange={(e)=>setEmail (e.target.value)}></input>
            </div>
            <div>
                <label forpass="pass">Enter the password : </label>
                <input type='password' value={pass} onChange={(e)=>setpass (e.target.value)}></input>
            </div>
            <div>
                <label fornum="num">Phone No.</label>
                <input type='number' value={number} onChange={(e)=>setnumb (e.target.value)}></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export default Login