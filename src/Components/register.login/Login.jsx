import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        user_name: "",
        password: "",
    });

    // ensure that you are able to use the register data to make the log in 
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const loginList = async e => {
        e.preventDefault()
        try {
            await axios.get(data.user_name, data.password)
            console.log(data.user_name, data.password);
        }catch (err){
        }
    }

    // const handleLogin = (e) => {
    //     const 
    // }

    console.log(data)
    return (
        <div className='main-box' onLoad={loginList}>
        <div className='row'>
            <div className="col-md-12 text-center"><h1>Log-In</h1></div>
        </div>
            <div className='row'>
                <div className="col-md-6">Username</div>
                <div className="col-md-6">
                    <input type="text" name="user_name" className='form-control'
                    onChange={handleChange} value={data.user_name}
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
      
                <div className="col-md-12 text-center">
                    <button className="registerButton">Sign-In</button>
                    <input type="submit" name="submit" value="login" className='btn btn-success'/>
                </div>
            </div>
            </div>
        </div>
      )
}

export default Login