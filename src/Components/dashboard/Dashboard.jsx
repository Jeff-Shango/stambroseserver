import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      try{
        const res = await axios.get("http://localhost:8000/list")
        setList(res.data);
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
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>St. Ambrose</h1>
      <div className='info'>
    <button onClick={handleButtonClick}>
      {showData ? 'Hide list info' : 'Show list info'}
    </button>
    {showData && (
      <ul>
        {list.map(list => (
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
    <button><Link to="/add">Add new info</Link></button>
    </div>
  )
}

export default Dashboard