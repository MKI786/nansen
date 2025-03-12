import React from 'react'
import '../Lpnavbar/Lpnavbar.css'
import { Link } from 'react-router-dom';

function Lpnavbar() {
  return (
   <>
   
   <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#001321e7', color:'white'}}>
  <div className="container-fluid">
    <a className="navbar-brand">   <img src="/lpnavbarlogo.png" style={{ width: '100px' }} alt="Logo" /></a>
    <button className="navbar-toggler" type="button" style={{backgroundColor:'white'}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ">

        <li className="nav-item dropdown-center">
          <a className="nav-link btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                 Centered dropdown>Product</a>
            <ul class="dropdown-menu">
                  <li><a class="dropdown-item"> <b>Nansen 2</b> <br/> <p>The most powerful version of Nansen for onchain investors</p> </a></li>
                  <li><a class="dropdown-item"> <b>Alpha</b> <br/><p>A highly vetted community of crypto investors, founders and investment experts</p></a></li>
                  <li><a class="dropdown-item"> <b>API</b> <br/> <p>Empowering crypto teams with advanced blockchain data</p></a></li>
             </ul>
        </li>

        <li className="nav-item dropdown-center">
          <a className="nav-link btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                 Centered dropdown>Solution</a>
            <ul class="dropdown-menu">
                  <li><a class="dropdown-item"  >Crypto Investor</a></li>
                  <li><a class="dropdown-item"  >Venture capital</a></li>
                  <li><a class="dropdown-item"  >Blockchain and L2s</a></li>
                  <li><a class="dropdown-item"  >Exchange and Marketplaces</a></li>
                  <li><a class="dropdown-item"  >Crypto and Defi protocols</a></li>
                  <li><a class="dropdown-item"  >Infrastructure and service providers</a></li>
             </ul>
        </li>


        <li className="nav-item dropdown-center">
          <a className="nav-link btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                 Centered dropdown>Learn</a>
            <ul class="dropdown-menu">
                  <li><a class="dropdown-item"  >Action</a></li>
                  <li><a class="dropdown-item"  >Action two</a></li>
                  <li><a class="dropdown-item"  >Action three</a></li>
             </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Pricing</a>
        </li>
      </ul>

  <div className="lpart">
   <div className='cs'>Contact Sales</div> <Link to="/Layout" ><button>Launch App</button></Link>  
  </div>

    </div>
  </div>
</nav>

   </>
  )
}

export default Lpnavbar
