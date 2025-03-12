import React, { useEffect, useState } from 'react'
import '../Login/Login.css'
import { FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiFoxHead } from "react-icons/gi";
import { RiCopperCoinLine } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";



function Login() {


  const [lform, setlform] = useState({})

  const [logindone, setlogindone] = useState(false);


  const handleonchange=(e)=>{

    setlform({
      ...lform,
      [e.target.name]:e.target.value
    })
      }
    


  const handlesubmit=async(e)=>{
    e.preventDefault();

    const responce = await fetch('http://localhost:8080/loginrequest',{
      method:'POST',
      body: JSON.stringify(lform),
      headers: {'Content-Type':'application/json'}
    })


    if(responce.ok)
    {
      const data = await responce.json();
      console.log(data.message);
      setlogindone(true);
    }
    else
    {
      console.log("Login NOT successful");
      setlogindone(false);
    }
  }



  function _turnstileCb() {
    console.debug('_turnstileCb called');

    if (window.turnstile) {
      window.turnstile.render('#myWidget', {
        sitekey: '1x00000000000000000000AA',
        theme: 'light',
      });
    }
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.onload = _turnstileCb;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
    

    <div className="Login">
    
    
    <div className="r1">
<img src="/nansen2.png" style={{width:'200px'}} alt="Logo" />
    </div>
    <div className="r2">
        <div style={{fontWeight:'bold', fontSize:'20px'}}> Sign in to Nansen</div>
   <div style={{color:'gray', fontSize:'14px', fontWeight:'400', fontFamily:'sans-serif'}}>
Enter your email and password to continue

</div>
    </div>
    
<br/>
<form method='POST' onSubmit={handlesubmit}>

<input type="email" name='email' placeholder='Enter email address' onChange={handleonchange} required/>

<input type="password" name='password' placeholder='Enter Password'   onChange={handleonchange}  required/>

<div className="checkbox mb-3" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                <div id="myWidget"></div>
</div>


<button type="submit">Continue</button>

</form>

<br/>
<p>Forgot password? </p>

<p>Don't have an account? <Link to="/Signup" style={{textDecoration:'none', color:'inherit'}}> Sign up</Link></p>

<div>
  OR
</div>
<br/>

<button id="sww" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
   <FaWallet />
Sign in with Wallet
</button>




<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" style={{ width:'22rem'}}>
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:'#001321'}}>
        <h1 className="modal-title fs-5" id="exampleModalLabel">Connect Wallet</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:'white'}}></button>
      </div>
      <div className="modal-body" style={{backgroundColor:'#001321', color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1rem'}}>
        <div className="mm">
          <div className="left">
          Meta mask
          </div>
          <div className="right">
          <GiFoxHead style={{fontSize:'40px', color:'orange'}}/>
          </div>
       
        </div>
        <div className="cw">
        <div className="left">
          Coinbase Wallet
          </div>
          <div className="right">
          <RiCopperCoinLine style={{fontSize:'40px', color:'white'}}/>
          </div>
        </div>
        <div className="ow">
        <div className="left">
           Other Wallets
          </div>
          <div className="right">
          <IoWalletSharp style={{fontSize:'40px', color:'cyan'}}/>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>




</div> 



    
    

    
    </>
  )
}

export default Login
