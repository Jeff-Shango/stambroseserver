import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [data, setData] = useState({
        user_name: "",
        password: "",
    });

    useEffect(() => {
        const getUsers = async () => {
          try{
            const res = await axios.get("http://localhost:5000/register")
            console.log(res.data);
            console.log("connecting to shit");
          }catch(err){
            console.log(err)
          }
        }
        getUsers()
      }, []);

    // ensure that you are able to use the register data to make the log in 
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get('/login', data)
            if (res.data.user_name === data.user_name) {
                navigate('/');
            } else {
                alert('Login Failed');
            }
        } catch (err){
            console.log(err);
        }
    }

    console.log(data)
    return (
        <div className='main-box'>
        <div className='row'>
            <div className="col-md-12 text-center"><h1>Log-In</h1></div>
        </div>

        <form>
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
                    <button type="submit" name="submit" value="login" className='btn btn-success' onSubmit={handleLogin}>login</button>

                </div>
            </div>
            </div>
            </form>
        </div>
      )
}

export default Login