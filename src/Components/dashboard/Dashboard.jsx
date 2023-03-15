import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
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
      setList(list.filter(item => item.id != id));
      setFilteredData(filteredData.filter(item => item.id != id));
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  const handleFilterChange = (e) => {
    const filter = e.target.value.toLowerCase();
    const filtered = list.filter(item => item.clientName.toLowerCase().includes(filter));
    setFilteredData(filtered);
  }

  return (
    <div id='body'>
      <h1 id='title'>St. Ambrose</h1>
      <div className="filterContainer">
        <input type="text" placeholder='Filter by Client Name' onChange={handleFilterChange} />
      </div>
    <button onClick={handleButtonClick} className="handleButton"
      style={{
        position: 'absolute',
        top: showData ? 175 : 375,
        left: showData ? 90 : 400,
        transition: '1s ease-in-out all'}}>
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
    <Link id='addText' to="/add" target='_self'><button className='addButton' style={{
        position: 'absolute',
        top: showData ? 175 : 375,
        right: showData ? 90 : 450,
        transition: '1s ease-in-out all'}}>
      Add new info</button></Link>
    </div>
  )
}

export default Dashboard