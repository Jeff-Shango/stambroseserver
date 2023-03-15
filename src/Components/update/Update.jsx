import axios from "axios";
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Update = () => {
    const [info, setInfo] = useState({
        clientName: "",
        SOW: "",
        grant: "",        
    });

    const navigate = useNavigate()
    const location = useLocation()

    const listId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setInfo(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8000/list/"+ listId, info)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(info)

  return (
    <div className='form'>
        <h1>Update the info</h1>
        <input type="text" placeholder='clientName' onChange={handleChange} name='clientName'/>
        <input type="text" placeholder='SOW' onChange={handleChange} name='SOW'/>
        <input type="text" placeholder='grant' onChange={handleChange} name='grant'/>
        <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update