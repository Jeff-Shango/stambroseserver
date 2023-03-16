import React, { useState } from 'react';
import "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        username:"",
        password:""
    });

    const navigate = useNavigate();

    const handleChange= (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

        console.log(data)
    }

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/register", data)
            navigate("/")
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
            <div className="col-md-6">Username</div>
            <div className="col-md-6">
                <input type="text" name="username" className='form-control'
                onChange={handleChange} value={data.username}
                />
            </div>

            <div className='row'>
            <div className="col-md-6">Password</div>
            <div className="col-md-6">
                <input type="password" name="password" className='form-control'
                onChange={handleChange} value={data.password}
                />
            </div>
        </div>

        {/* <div className='row'>
            <div className="col-md-6">Email</div>
            <div className="col-md-6">
                <input type="text" name="email" className='form-control'
                onChange={handleChange} value={data.email}
                />
            </div>
        </div> */}

        <div className='row'>
            <div className="col-md-6">Email</div>
            <div className="col-md-6">
                <input type="text" name="email" className='form-control'
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