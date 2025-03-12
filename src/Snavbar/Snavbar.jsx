import React from 'react'
import '../Snavbar/Snavbar.css'
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BiCool } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { SiJsonwebtokens } from "react-icons/si";
import { RiNftFill } from "react-icons/ri";
import { FaHotjar } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { SiArkecosystem } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Snavbar() {

  return (
   <>
   
<div className="snvbar">


<div className="logo1">
  <a href="http://localhost:3000"><img src="/nlogo.png" style={{width:'60px'}} alt="Logo" /></a>
</div>


<div className="iconmenu">
<ul>
  <li><IoMdSearch style={{fontSize:'30px'}}/></li>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Home" style={{textDecoration: 'none', color: 'inherit'}} ><li><MdHomeFilled style={{fontSize:'30px'}} /> </li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Signals" style={{textDecoration: 'none', color: 'inherit'}} ><li><MdOutlineWifiTethering style={{fontSize:'30px'}}/></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Smartmoney" style={{textDecoration: 'none', color: 'inherit'}} ><li><BiCool style={{fontSize:'30px'}}/> </li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Profiler" style={{textDecoration: 'none', color: 'inherit'}} ><li><AiFillProfile style={{fontSize:'30px'}} /></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Tokens" style={{textDecoration: 'none', color: 'inherit'}} ><li><SiJsonwebtokens style={{fontSize:'30px'}}/></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Nfts" style={{textDecoration: 'none', color: 'inherit'}} > <li><RiNftFill style={{fontSize:'30px'}}/></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Hotcontracts" style={{textDecoration: 'none', color: 'inherit'}} > <li><FaHotjar style={{fontSize:'30px'}} /></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Chaingrowth" style={{textDecoration: 'none', color: 'inherit'}} ><li><SiHiveBlockchain style={{fontSize:'30px'}}/></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Ecosystems" style={{textDecoration: 'none', color: 'inherit'}} > <li><SiArkecosystem style={{fontSize:'30px'}} /></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Research" style={{textDecoration: 'none', color: 'inherit'}} ><li><IoDocumentText style={{fontSize:'30px'}}/></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Portfolio" style={{textDecoration: 'none', color: 'inherit'}} > <li><ImProfile style={{fontSize:'30px'}} /></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Smartalerts" style={{textDecoration: 'none', color: 'inherit'}} > <li><FaBell style={{fontSize:'30px'}}/></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Smartsegments" style={{textDecoration: 'none', color: 'inherit'}} > <li><MdOutlineSmartphone style={{fontSize:'30px'}} /></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Watchlists" style={{textDecoration: 'none', color: 'inherit'}} > <li><FaRegEye style={{fontSize:'30px'}}/></li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Whatsnew" style={{textDecoration: 'none', color: 'inherit'}} ><li><FaRocket style={{fontSize:'30px'}}/> </li></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Help" style={{textDecoration: 'none', color: 'inherit'}} ><li><IoIosHelpCircleOutline style={{fontSize:'30px'}}/></li></NavLink>
 
</ul>

</div>

<div className="scrollportion">

  <ul>
    <li><IoMdSearch style={{fontSize:'20px'}}/> Search</li>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Home" style={{textDecoration: 'none', color: 'inherit'}} ><li><MdHomeFilled style={{fontSize:'20px'}} /> Home</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Signals" style={{textDecoration: 'none', color: 'inherit'}} ><li><MdOutlineWifiTethering style={{fontSize:'20px'}}/>  Signals</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Smartmoney" style={{textDecoration: 'none', color: 'inherit'}} ><li><BiCool style={{fontSize:'20px'}}/> Smart money</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Profiler" style={{textDecoration: 'none', color: 'inherit'}} ><li><AiFillProfile style={{fontSize:'20px'}} /> Profiler</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Tokens" style={{textDecoration: 'none', color: 'inherit'}} ><li><SiJsonwebtokens style={{fontSize:'20px'}}/> Tokens</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Nfts" style={{textDecoration: 'none', color: 'inherit'}} ><li><RiNftFill style={{fontSize:'20px'}}/> Nfts</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Hotcontracts" style={{textDecoration: 'none', color: 'inherit'}} ><li><FaHotjar style={{fontSize:'20px'}} /> Hot contracts</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Chaingrowth" style={{textDecoration: 'none', color: 'inherit'}} ><li><SiHiveBlockchain style={{fontSize:'20px'}}/> Chain growth</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Ecosystems" style={{textDecoration: 'none', color: 'inherit'}} ><li><SiArkecosystem style={{fontSize:'20px'}} /> Ecosystem</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Research" style={{textDecoration: 'none', color: 'inherit'}} ><li><IoDocumentText style={{fontSize:'20px'}}/> Research</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Portfolio" style={{textDecoration: 'none', color: 'inherit'}} ><li><ImProfile style={{fontSize:'20px'}} /> Portfolio</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Smartalerts" style={{textDecoration: 'none', color: 'inherit'}} ><li><FaBell style={{fontSize:'20px'}}/> Smartalerts</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Smartsegments" style={{textDecoration: 'none', color: 'inherit'}} ><li><MdOutlineSmartphone style={{fontSize:'20px'}} /> Smartsegment</li></NavLink>
    <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Watchlists" style={{textDecoration: 'none', color: 'inherit'}} ><li><FaRegEye style={{fontSize:'20px'}}/> Watchlist</li></NavLink>
  </ul>
</div>


<div className="fixedportion">

<div className="buttons" style={{display:'flex',gap:'0.5rem', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>

<NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Signup" style={{width:'100%'}}> <button id="subtn">Sign up</button></NavLink>

<NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="Login" style={{width:'100%'}}><button id="sibtn">Sign in</button></NavLink>
</div>


<ul>
<NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Whatsnew" style={{textDecoration: 'none', color: 'inherit'}} ><li><FaRocket style={{fontSize:'20px'}}/> whats new</li></NavLink>
<NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')} to="Help" style={{textDecoration: 'none', color: 'inherit'}} ><li><IoIosHelpCircleOutline style={{fontSize:'20px'}}/> Help</li></NavLink>
</ul>

</div>


</div>


   </>
  )
}

export default Snavbar
