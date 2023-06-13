import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';
import "./dashboard.css";


const Dashboard = () => {
  const [list, setList] = useState([]);
  const [showData, setShowData] = useState(false);
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    const fetchList = async () => {
      try{
        const res = await axios.get("http://localhost:8000/list")
        setList(res.data);
        setFilteredData(res.data);
        console.log(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchList()
  }, []);

  const handleButtonClick = () => {
    setShowData(!showData);
  }

  const handleDelete = async (id)=> {
    try{
      await axios.delete("http://localhost:8000/list/"+id)
      setList(list.filter(item => item.id !== id));
      setFilteredData(filteredData.filter(item => item.id !== id));
      // window.location.reload()
      Navigate("/dashboard")
    }catch(err){
      console.log(err)
    }
  }

  const handleFilterNameChange = (e) => {
    const filter = e.target.value.toLowerCase();
    const filtered = list.filter(item => item.clientName.toLowerCase().includes(filter));
    setFilteredData(filtered);
  }

  const handleFilterSOWChange = (e) => {
    const filter = e.target.value.toLowerCase();
    const filtered = list.filter(item => item.SOW.toLowerCase().includes(filter));
    setFilteredData(filtered);
  }

  const handleFilterGrantChange = (e) => {
    const filter = e.target.value.toLowerCase();
    const filtered = list.filter(item => item.grant.toLowerCase().includes(filter));
    setFilteredData(filtered);
  }

  return (
    <div id='body'>
      <h1 id='title'>St. Ambrose</h1>
      <div className="filterContainer">
        <input type="text" placeholder='Filter by Client Name' onChange={handleFilterNameChange} />
        <input type="text" placeholder='Filter by SOW' onChange={handleFilterSOWChange} />
        <input type="text" placeholder='Filter by Grant' onChange={handleFilterGrantChange} />
      </div>
    <Link id='addText' to="/add" target='_self'><button className='addButton'>
      Add new info</button></Link>
    <button onClick={handleButtonClick} className="handleButton">
      {showData ? 'Hide list info' : 'Show list info'}
    </button>
      <div className='info'>
    {showData && (
      <ul>
        {filteredData.map(list => (
          <div className="infoShit" key={list.id}>
            <h1>{list.clientName}</h1>
            <h2>{list.SOW}</h2>
            <h2>{list.grant}</h2>
          <button className="delete" onClick={() => handleDelete(list.id)}>Delete</button>
          <button className="update"><Link to={`/update/${list.id}`}>Update</Link></button>
          </div>
        ))}
      </ul>
     )} 
    </div>
    </div>
  )
}

export default Dashboard