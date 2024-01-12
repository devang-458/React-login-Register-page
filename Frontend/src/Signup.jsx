import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

function Signup(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSumbit = (e) =>{
        e.preventDefault()
        axios.post("", {name,email,password})
        .then(result => console.log(result))
        .catch(err =>console.log(err))
    }

    return(
        <div className="d-flex bg-secondary vh-100 justify-content-center align-items-center " >
            <div className="w-25 bg-white p-3 rounded">
                <h2>
                    Register
                </h2>
                <form onSubmit={handleSumbit}>
                    <div className="m-3">
                        <label htmlFor="name">
                            <strong>Name:-</strong>
                        </label>
                        <input
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Name"
                        name="name"
                        className="form-control rounded-0"
                        onChange={(e)=> setName(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="m-3">
                        <label htmlFor="email">
                            <strong>Email:-</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=> setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div className="m-3">
                        <label htmlFor="password">
                            <strong>Password:-</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>
                    <button type="sumbit" className="w-100 btn btn-success rounded-2">Register
                    </button>
                    </form>
                    <p >Already Have an Account</p>
                    <Link to="/login" className="btn btn-default border-black w-100 bg-light rounded-2 text-decoration-none">
                        Login</Link>
            </div>
 
        </div>
    )
}

export default Signup;