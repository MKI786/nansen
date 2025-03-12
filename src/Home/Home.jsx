import React, { useState } from 'react'
import '../Home/Home.css'
import Nansenspotlight from '../Nansenspotlight/Nansenspotlight';
import Mydashboard from '../Mydashboard/Mydashboard'


const Home = () => {
  
  const emp = { color:'white',
  borderBottom:'2px solid transparent'};

  const st= {color:'#00FFA7',
  borderBottom:'2px solid #00FFA7'}

  const [nsl, setnsl] = useState(true);
  const [mdb, setmdb] = useState(false);

  const [nslstyle, setnslstyle] = useState({color:'#00FFA7',
  borderBottom:'2px solid #00FFA7'});
  const [mdbstyle, setmdbstyle] = useState({emp});

  const handleswitch=(val)=>{

    if(val==="mdb")
    {
      setmdb(true);
      setnsl(false);
      setnslstyle(emp);
      setmdbstyle(st);
    }

if(val==="ns")
    {
      setmdb(false);
      setnsl(true);
      setnslstyle(st);
      setmdbstyle(emp);
    }
  }

  return (
   <>
<div className="home">
  
  
  <div className="tbar">
    <ul>
    <li onClick={()=>{handleswitch("ns")}} style={nslstyle}>Nansen Spotlight</li>
    <li onClick={()=>{handleswitch("mdb")}} style={mdbstyle} >My Dashboard</li>
    </ul>
  </div>

{nsl && <Nansenspotlight/>}

{mdb && <Mydashboard/>}

  </div>   

   </>
  )
}

export default Home
