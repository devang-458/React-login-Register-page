import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login(){

    const[email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate


    const handleSumbit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost/3000/login", {email,password})
        .then(result => {console.log(result)
            navigate('/home')
        })
        .catch(err => console.log(err) )
    }

    return(
        <div className="d-flex bg-secondary vh-100 justify-content-center align-items-center">
            <div className="bg-white p-3 rounded w-25 ">
                <h2>Login</h2>
                <form>
                    <div className="m-3">
                        <label htmlFor="email">
                            <strong>
                                Login:-
                            </strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            autoComplete="off"
                            name="email"
                            onChange={(e)=> setEmail(e.target.value)}>
                        </input>
                    </div>
            
                    <div className="m-3">
                        <label htmlFor="email">
                            <strong>
                                Password:-
                            </strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            autoComplete="off"
                            name="password"
                            onChange={(e)=>setPassword(e.target.value)}>
                        </input>
                    </div>
                    <button className="btn btn-success w-100">Login</button>
                </form>
                <p>You don't have Account</p>
                <Link to="/register" className="btn btn-default border-black w-100">Register</Link>
                
            </div>
        </div>
    )
}

export default Login;