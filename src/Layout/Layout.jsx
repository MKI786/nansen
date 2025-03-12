import React from 'react'
import '../Layout/Layout.css'
import Snavbar from '../Snavbar/Snavbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Home from '../Home/Home'
import Signals from '../Signals/Signals'
import Smartmoney from '../Smartmoney/Smartmoney'
import Tokens from '../Tokens/Tokens'
import Nfts from '../Nfts/Nfts';
import Hotcontracts from '../Hotcontracts/Hotcontracts';
import Chaingrowth from '../Chaingrowth/Chaingrowth';
import Ecosystems from '../Ecosystems/Ecosystems';
import Research from '../Research/Research';
import Portfolio from '../Portfolio/Portfolio';
import Smartalerts from '../Smartalerts/Smartalerts';
import Watchlists from '../Watchlist/Watchlist';
import Whatsnew from '../Whatsnew/Whatsnew';
import Help from '../Help/Help';
import Smartsegment from '../Smartsegment/Smartsegment';


const Layout = () => {


  return (
    <>
    
    <div className="layout">

<div className="leftside">
<Snavbar/>
</div>

<div className="rightside" >

<Routes>

<Route path="Home" element={<Home />} />
<Route path="Signup" element={<Signup />} />
<Route path="Home/Signup" element={<Signup />} />
<Route path="Home/Login" element={<Login />} />
<Route path="Login" element={<Login />} />
<Route path="" element={<Home />} />
<Route path="Signals" element={<Signals/>} />
<Route path="Smartmoney" element={<Smartmoney/>} />
<Route path="Tokens" element={<Tokens/>} />
<Route path="Nfts" element={<Nfts/>} />
<Route path="Hotcontracts" element={<Hotcontracts/>} />
<Route path="Chaingrowth" element={<Chaingrowth/>} />
<Route path="Ecosystems" element={<Ecosystems/>} />
<Route path="Research" element={<Research/>} />
<Route path="Portfolio" element={<Portfolio />} />
<Route path="Smartalerts" element={<Smartalerts />} />
<Route path="Smartsegments" element={<Smartsegment />} />
<Route path="Watchlists" element={<Watchlists />} />
<Route path="Whatsnew" element={<Whatsnew />} />
<Route path="Help" element={<Help />} />


</Routes>


</div>


    </div>    
    </>
  )
}

export default Layout
