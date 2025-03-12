import React from 'react'
import '../Smartalerts/Smartalerts.css'
import { Link } from 'react-router-dom';



function Smartalerts() {
  return (
   <>
   
   
   <div className="mdashboard">
  
  
  <div className="r1">
<img src="/pp1.png" style={{width:'300px'}} alt="" />
  </div>
  <div className="r2">
   <p>Upgrade to create Smart Alerts</p>
   </div>
   <div className="r3">
   <p>Use Smart Alerts to receive instant notifications about onchain activities involving specific wallets or entities, so you can react promptly to capitalize on opportunities or mitigate risks..</p>
   </div>
   <div className="r5">
   <div className="but" style={{display:'flex',width:'100%',flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1rem'}}>
  <button style={{backgroundColor:"#00FFA7",width:'13rem', padding:'0.4rem', color:'black',border:'none', borderRadius:'10px 10px'}}>Upgrade Now</button>
</div>
   </div>
   <br/>
 
 </div>    
   
   
   
   
   </>
  )
}

export default Smartalerts
