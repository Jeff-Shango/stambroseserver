import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css"


const Login = (props) => {
    const [data, setData] = useState({
        user_name: "",
        password: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
          try{
            const res = await axios.get("http://localhost:5000/login")
            console.log(res.data);
            console.log("connecting to shit");
          }catch(err){
            console.log(err)
          }
        }
        getUsers()
      }, []);


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/login', data);
            if ( res.data === 'Login successful') {
                navigate('/');
            } else {
                    alert("Incorrect Password");
            }
        } catch (err){
            console.log(err);
        }
    }

    console.log(data);
    return (
        <div className='main-box'>
        <div className='row'>
            <div className="col-md-12 text-center"><h1>Log-In</h1></div>
        </div>

        <form onSubmit={handleLogin}>
            <label htmlFor='login'>Login ID</label>
            <input onChange={handleChange} value={data.user_name} name="user_name"type="text" placeholder='Enter your Login' />
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} value={data.password}  name="password" type="password" placeholder='Enter your Password' /> 
            <button type='submit' id='loginButton' className='btn'>Log In</button>
            </form>
            <a id='registerButton' className='btn' href="/Register">Don't have an account?</a>
        </div>
      )
}


export default Login;