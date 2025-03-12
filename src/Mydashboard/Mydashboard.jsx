import React from 'react'
import '../Mydashboard/Mydashboard.css'
import { Link } from 'react-router-dom';




function Mydashboard() {
  return (
    <>
    
    
<div className="mdashboard">
  
  
   <div className="r1">
 <img src="/sip.png" style={{width:'300px'}} alt="" />
   </div>
   <div className="r2">
    <p>Sign in or create a Nansen account</p>
    </div>
    <div className="r3">
    <p>Organize your custom dashboard here for easy access to tables and charts you want to check daily. While browsing Nansen, just click the <b style={{color:'white'}}>"Save to My Dashboard"</b> button on a widget and it will appear here.</p>
    </div>
    <div className="r4">
    <p>You need a Nansen account to continue</p>
    </div>
    <div className="r5">
    <div className="but" style={{display:'flex',width:'100%',flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1rem'}}>
    <Link to="Signup"><button style={{backgroundColor:"#00FFA7",width:'13rem', padding:'0.4rem', color:'black',border:'none', borderRadius:'10px 10px'}}>Sign Up</button></Link>
 <Link to="Login"> <button style={{backgroundColor:"transparent", width:'13rem', padding:'0.4rem', color:'gray', border:'1px solid gray', borderRadius:'10px 10px'}}>Sign in</button> </Link>
 
</div>
    </div>
    <br/>
  
  </div>    
    
    
    </>
  )
}

export default Mydashboard
