import React, { useEffect, useState } from 'react';
import '../Signup/Signup.css';
import { FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiFoxHead } from "react-icons/gi";
import { RiCopperCoinLine } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import Successsignup from '../Successsignup/Successsignup';

function Signup() {
  const [sform, setsform] = useState({});
  const [signupdone, setsignupdone] = useState(false);

  const handleonchange = (e) => {
    setsform({
      ...sform,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/newsignup', {
      method: 'POST',
      body: JSON.stringify(sform),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      setsignupdone(true);
    } else {
      console.log("Signup NOT successful");
      setsignupdone(false);
    }
  };

  useEffect(() => {
    if (signupdone) {
      setTimeout(() => {
        setsignupdone(false);
      }, 3000); // Renders <Successsignup/> for 3 seconds
    }
  }, [signupdone]);

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
      {signupdone ? (
        <>
          <Successsignup />
        </>
      ) : (
        <>
          <div className="signup">
            <div className="r1">
              <img src="/nansen2.png" style={{ width: '200px' }} alt="Logo" />
            </div>
            <div className="r2">
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}> Get started with Nansen</div>
              <div style={{ color: 'gray', fontSize: '14px', fontWeight: '400', fontFamily: 'sans-serif' }}>Choose your email and password</div>
            </div>
            <br />
            <form method='POST' onSubmit={handlesubmit}>
              <input type="email" name='email' placeholder='Enter email address' onChange={handleonchange} required />
              <input type="password" name='password' placeholder='Enter Password' onChange={handleonchange} required />
              <div className='cpoint'><input type="checkbox" id="c1" required /> I agree to Terms of Services & Privacy Policy</div>
              <div className='cpoint'><input type="checkbox" id="c2" required />Subscribe to receive company news and product updates from Nansen. You may unsubscribe at any time.</div>
              <div className="checkbox mb-3" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                <div id="myWidget"></div>
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <br />
            <p>Already have an account? <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}> Sign in</Link></p>
            <div>OR</div>
            <br />
            <button id="sww" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
              <FaWallet />
              Sign up with Wallet
            </button>
            <br />
          </div>





          <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ width: '22rem' }}>
              <div className="modal-content">
                <div className="modal-header" style={{ backgroundColor: '#001321' }}>
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Connect Wallet</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: 'white' }}></button>
                </div>
                <div className="modal-body" style={{ backgroundColor: '#001321', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <div className="mm">
                    <div className="left">
                      Meta mask
                    </div>
                    <div className="right">
                      <GiFoxHead style={{ fontSize: '40px', color: 'orange' }} />
                    </div>
                  </div>
                  <div className="cw">
                    <div className="left">
                      Coinbase Wallet
                    </div>
                    <div className="right">
                      <RiCopperCoinLine style={{ fontSize: '40px', color: 'white' }} />
                    </div>
                  </div>
                  <div className="ow">
                    <div className="left">
                      Other Wallets
                    </div>
                    <div className="right">
                      <IoWalletSharp style={{ fontSize: '40px', color: 'cyan' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Signup;
