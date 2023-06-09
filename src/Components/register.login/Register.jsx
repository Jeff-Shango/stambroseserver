import React, { useState } from 'react';
import "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./register.css";

const Register = () => {
    const [data, setData] = useState({
        user_name:"",
        password:"",
        email: "",
    });

    const navigate = useNavigate();

    const handleChange= (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

        console.log(data)
    }

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("/register", data)
            navigate("/login")
        }catch(err){
        }
    }

    console.log(data);

    // const submitForm = (e) =>{
    //     e.preventDefault();
    //     data = {
    //         username: data.user_name,
    //         password: data.password
    //     }
    // }
    // <form onSubmit={submitForm}>

  return (
    <div className='main-box'>
    <div className='row'>
        <div className="col-md-12 text-center"><h1>Register</h1></div>
    </div>
        <div className='row'>
            <div id='inputTitle' className="col-md-6">Username</div>
            <div className="col-md-6">
                <input id='registerInput' type="text" name="user_name" className='form-control'
                onChange={handleChange} value={data.user_name}
                />
            </div>

            <div className='row'>
            <div id='inputTitle' className="col-md-6">Password</div>
            <div className="col-md-6">
                <input id='registerInput' type="password" name="password" className='form-control'
                onChange={handleChange} value={data.password}
                />
            </div>
        </div>

        <div className='row'>
            <div id='inputTitle' className="col-md-6">Email</div>
            <div className="col-md-6">
                <input id='registerInput' type="text" name="email" className='form-control'
                onChange={handleChange} value={data.email}
                />
            </div>
        </div>

        <div className='row'>
  
            <div className="col-md-12 text-center">
                <button className="registerButton" onClick={handleClick}>Register</button>
                {/* <input onChange={handleClick} type="submit" name="submit" value="register" className='btn btn-success'/> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Register