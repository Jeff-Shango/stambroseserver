import React, { useState } from 'react';
import "react-bootstrap";

const Register = () => {
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const handleChange= (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

        console.log(data)
    }

    const submitForm = (e) =>{
        e.preventDefault();
        data = {
            username: data.username,
            email: data.email,
            password: data.password
        }
    }

  return (
    <div className='main-box'>
        <form onSubmit={submitForm}>
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
                <input type="submit" name="submit" value="Register" className='btn btn-success'/>
            </div>
        </div>
        </div>
        </form>
    </div>
  )
}

export default Register