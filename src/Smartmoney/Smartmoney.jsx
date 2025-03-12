import React from 'react'
import '../Smartmoney/Smartmoney.css'
import { MdLock } from "react-icons/md";



function Smartmoney() {
  return (
    <>
    
  <div className="smartmoney">

<br/>

<div className="r1">

<div style={{fontWeight:'bold', textAlign:'center'}}> <MdLock /> Upgrade to access this Dashboard</div>

<p>Make informed decisions by tapping into the strategies of experienced players in the crypto space. Discover which tokens they're holding, buying, or selling, and the protocols they're interacting with. Assess their risk appetite through their stablecoin allocation, and explore their DEX trading PnL, as well as the sectors they're investing in.</p>

<div ><button style={{backgroundColor:'#00FFA7', color:'black', border:'none', borderRadius:'5px 5px', padding:'0.3rem'}}>Upgrade Now</button></div>

</div>



  </div>
    
    </>
  )
}

export default Smartmoney
