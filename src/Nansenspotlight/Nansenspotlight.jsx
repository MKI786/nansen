import React, { } from 'react'
import '../Nansenspotlight/Nansenspotlight.css'
import { IoMdSearch } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";
import { MdLock } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { GoStop } from "react-icons/go";
import { Tooltip } from 'react-tooltip';
import { SiLitecoin } from "react-icons/si";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Linechart from '../Linechart/Linechart';
import Tokenlist from '../Tokenlist/Tokenlist'
import { Link } from 'react-router-dom';


function Nansenspotlight() {

let currentIndex=0;

const slideshow=()=>{

  const slider = document.querySelector('.slider');
const totalslides = document.querySelectorAll('.box');


 // Correctly wrap the currentIndex
 if (currentIndex < 0) {
  currentIndex = totalslides.length - 1;
}
if (currentIndex >= totalslides.length) {
  currentIndex = 0;
}

// Adjust the transform property to show the correct slide
slider.style.transform = `translateX(-${currentIndex * 21}rem)`;
  
}

  const prevSlide = () => {
 currentIndex=currentIndex-1;
 slideshow();
  };

  const nextSlide = () => {
  currentIndex=currentIndex+1;
  slideshow();
  };



  return (
   <>
   
   <div className="npl">

<br/>
<div className="search">
<IoMdSearch style={{fontSize:'20px'}}/>
Search for anything on Nansen
</div>
<br/><br/>


<div className="menubar">
<div className="left">
<b style={{fontFamily:'sans-serif'}}>Signals </b>  

<div className="select">
<SiHiveBlockchain style={{fontSize:'15px'}}/>
<select name="" id="s" style={{cursor:'pointer'}}>
<option selected>All Chains</option>
  <option value=""> Etherium</option>
  <option value=""> Polygon</option>
  <option value=""> BNB</option>
  <option value=""> Arbitrum</option>
  <option value=""> Avalanche</option>
  <option value=""> Fantom</option>
  <option value=""> Base</option>
  <option value=""> Linea</option>
  <option value=""> Blast</option>
  <option value=""> Optimistic</option>
  <option value=""> ZKsync</option>
  <option value=""> Mantle</option>
</select>

</div>

<div className="type" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModalauth">
  Type
  <MdLock />

</div>

<div>
     For you <GoStop data-tooltip-id="goStopTooltip" data-tooltip-content="Based on your Nansen activity (Signals you click on, as well as Tokens you visit and add to your watchlist), we will prioritize Signals that we think will be of interest to you. Additionally, you can tailor the signals by giving feedback through the like/dislike buttons. These actions have higher weighting and can significantly improve your feed." onMouseOver={() => {}} />
      <Tooltip id="goStopTooltip" place="top" effect="solid" style={{width:'26rem'}} />
    </div>
</div>

<div className="right">

<div className="setalert" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModalauth" >
<FaBell style={{fontSize:'15px'}}/>
  set alert
</div>

<div className="viewall">
  view all {`-->`}
</div>


</div>
</div>

<br/>
<div className="mainslider">

<div className="slider">


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip1" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip1" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip2" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip2" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>



<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip3" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip3" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>



<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip4" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip4" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip5" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip5" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>

<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip6" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip6" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip7" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip7" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip8" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip8" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip9" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip9" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip10" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip10" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


<div className="box">
<div className="content">

<div className="upper">
<div className='u1'>
<SiLitecoin  style={{color:'yellow'}}/>
<HiMiniArrowTrendingUp style={{color:'rgb(0, 255, 0)'}}/>
<p style={{fontFamily:'inherit', fontSize:'12px'}}>Fresh Wallets Flow</p>
<GoStop data-tooltip-id="goStopTooltip11" data-tooltip-content="Based on your Nansen activity " style={{fontSize:'15px'}} />
      <Tooltip id="goStopTooltip11" place="top" effect="solid" style={{width:'26rem'}} />
</div>
<div className='u2'>
<p style={{color:'#F2F4F5', fontSize:'15px', fontFamily:'inherit'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto optio ut quos minima molestias.</p>
</div>
</div>

<div className="lower">
<FaStar />
 Upgrade to Unlock Signals
</div>
</div>
</div>


</div>
<div className='nav'>
  <div className="left">
  <button onClick={prevSlide} ><FaChevronLeft /></button>
  </div>
 
  <div className="right">
  <button  onClick={nextSlide} ><FaChevronRight /></button>
  </div>
  
</div>
</div>

<br/>
<div className="section1">

<div className="box1">
<Tokenlist/>

</div>

<div className="box2">
<div className="head">
    <div className="left">
    <SiLitecoin  style={{color:'yellow'}}/>
    Stablecoin Exchange Flow
    </div>
    <div className="right">
    <FaStar />
    </div>
</div>

<Linechart/>

</div>

</div>

<br/>
<div className="section2">

<div className="box1">
<div className="head">
    <div className="left">
    <SiLitecoin  style={{color:'yellow'}}/>
    Stablecoin Exchange Flow
    </div>
    <div className="right">
    <FaStar />
    </div>
</div>

<Linechart/>

</div>

<div className="box2">

<p style={{fontWeight:'bold'}}> <MdLock style={{fontSize:'20px'}} /> Sign in to access this data</p>

<p>This data is only available for Nansen subscribers.</p>


<div className="button" style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem'}}>
 <Link to="Login"> <button style={{backgroundColor:"transparent",padding:'0.4rem', color:'gray', border:'1px solid gray', borderRadius:'10px 10px'}}>Sign in</button> </Link>
 <Link to="Signup"><button style={{backgroundColor:"#00FFA7",padding:'0.4rem', color:'black',border:'none', borderRadius:'10px 10px'}}>Sign Up</button></Link>
</div>


</div>

</div>

<br/>


   </div>




   <div class="modal fade"  id="exampleModalauth" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style={{border:'1px solid gray', borderRadius:'10px 10px'}}>
    <div class="modal-content">
      <div class="modal-body" style={{backgroundColor:'#001321', display:'flex', flexDirection:'column',alignItems:'flex-start', justifyContent:'center'}}>
        <p style={{fontWeight:'bold',color:'whitesmoke', fontFamily:'sans-serif'}}>You need a Nansen account to use advanced filters</p>
        <p style={{color:'gray'}}>This and other advanced filtering options are available in our Pioneer and Professional plans.</p>
        <div className="button" style={{display:'flex',width:'100%', alignItems:'center', justifyContent:'flex-end', gap:'1rem'}}>
 <Link to="Login"> <button  data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"transparent",padding:'0.4rem', color:'gray', border:'1px solid gray', borderRadius:'10px 10px'}}>Sign in</button> </Link>
 <Link to="Signup"><button  data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#00FFA7",padding:'0.4rem', color:'black',border:'none', borderRadius:'10px 10px'}}>Sign Up</button></Link>
</div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Nansenspotlight
