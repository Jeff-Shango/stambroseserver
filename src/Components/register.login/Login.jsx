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


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/login', data)
            if (res.data.user_name === data.user_name) {
                navigate('/');
            } else {
                console.log('Login Failed');
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

        <form onSubmit={handleLogin}>
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
                    <input type="submit" name="submit" value="login" className='btn btn-success'/>

                </div>
            </div>
            </div>
            </form>
        </div>
      )
}

export default Login