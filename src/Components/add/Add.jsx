import axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [info, setInfo] = useState({
        clientName: "",
        SOW: "",
        grant: "",        
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInfo(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("/list", info)
            navigate("/dashboard")
        }catch(err){
            console.log(err)
        }
    }

    console.log(info)

  return (
    <div className='form'>
        <h1>Add new info</h1>
        <input type="text" placeholder='clientName' onChange={handleChange} name='clientName'/>
        <input type="text" placeholder='SOW' onChange={handleChange} name='SOW'/>
        <input type="text" placeholder='grant' onChange={handleChange} name='grant'/>
        <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add