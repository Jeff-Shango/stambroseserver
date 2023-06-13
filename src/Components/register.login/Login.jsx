import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, useNavigate } from 'react-router-dom';
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
            const res = await axios.get("/register")
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
        e.preventDefault();
        try {
          const res = await axios.post('/login', data);
          if (res.data.message === 'Login successful') {
            navigate('/dashboard');
          } else {
            alert('Incorrect credentials');
          }
        } catch (err) {
          console.log(err);
        }
      };
      

    // const handleLogin = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const res = await axios.post('/register', data);
    //         if ( res.data === 'Login successful') {
    //             navigate('/dashboard');
    //         } else {
    //                 alert("Incorrect Password");
    //         }
    //     } catch (err){
    //         console.log(err);
    //     }
    // }

    console.log(data);
    return (
      <BrowserRouter>
        <div className='main-box'>
        <div className='row'>
            <div className="col-md-12 text-center"><h1>Log-In</h1></div>
        </div>

      <div id="testInputContainer">
        <p id="testDescription">
          Use the provided information to login
        </p>
        <p id="testContent">Login: test</p>
        <p id="testContent">Password: password</p>
      </div>
        <form onSubmit={handleLogin}>
            <label htmlFor='login'>Login ID</label>
            <input onChange={handleChange} value={data.user_name} name="user_name"type="text" placeholder='Enter your Login' />
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} value={data.password}  name="password" type="password" placeholder='Enter your Password' /> 
            <button type='submit' id='loginButton' className='btn'>Log In</button>
            </form>
            <a id='registerButton' className='btn' href="/register">Don't have an account?</a>
        </div>
        </BrowserRouter>
      )
}


export default Login;