import React, { useEffect , useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import { CountUp } from 'countup.js';
import '../Landingpage/Landingpage.css'
import Lpnavbar from '../Lpnavbar/Lpnavbar'
import Lpfooter from '../Lpfooter/Lpfooter';
function Landingpage() {
  


  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Programmatically access onchain data blazingly fast via Nansen Query.',
        'Learn professionally researched insights via Nansen Research Portal.',
        'Manage your personal or organization’s holdings via Nansen Portfolio'
      ],
      typeSpeed: 20,
      backSpeed: 10,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);




  useEffect(() => {
    const video = document.querySelector('.landingpage video');
    if (video) {
      video.play();
      video.addEventListener('ended', () => {
        video.play();
      });
    }
  }, []);


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const countUpRefs = useRef([null, null, null]);

  useEffect(() => {
    if (inView) {
      const counts = [
        { endValue: 300, ref: countUpRefs.current[0], suffix: 'M+' },
        { endValue: 95, ref: countUpRefs.current[1], suffix: '%' },
        { endValue: 500, ref: countUpRefs.current[2], suffix: 'TB+' },
      ];
      
      counts.forEach((count) => {
        if (count.ref) {
          const countUp = new CountUp(count.ref, count.endValue, { duration: 3, suffix: count.suffix });
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }
        }
      });
    }
  }, [inView]);


  return (
   <>
   
   <div className="landingpage">

<div className="lpnavbar">
<Lpnavbar/>
</div>

<video  autoplay muted loop playsinline>
        <source src="bgVideo.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
    </video>
<br/>
<br/><br/>

    <div className="content">
      

      <div className="section1">
<div className="a1">
Onchain Data Platform Trusted by the Best
</div>
<div className="a2">
Empowering Crypto Investors With Deep Insights To Make More Informed Decisions.
</div>
<div className="a3">
  <button id="sff">Start for free</button>
  <button id="ep">Explore Pricing</button>
</div>
      </div>

<br/>

<div className="section2">
<div className="r1">
The Smartest Investors and Crypto Teams Use Nansen to Win
</div>
</div>
<br/>

<div className="section3">

<div className="box">
<img src="accel1.png" alt="" />
</div>
<div className="box">
<p style={{letterSpacing:'0.3rem', fontSize:'25px', fontFamily:'sans-serif'}}>a16Z</p>
</div>
<div className="box">
<img src="opensea.png" alt="" />
</div>
<div className="box">
<img src="cb.png" alt="" />
</div>
<div className="box">
<img src="polygon.png" alt="" />
</div>
<div className="box">
<img src="ava.png" alt="" />
</div>
<div className="box">
<img src="cons.png" alt="" />
</div>
<div className="box">
<img src="arbitrum.png" alt="" />
</div>
<div className="box">
<img src="chainlink.png" alt="" />
</div>
<div className="box">
  <p style={{letterSpacing:'0.3rem', fontSize:'25px'}}>Gauntlet</p>
</div>

</div>

<br/><br/><br/>

<div className="section4">
            <div className="r1">The Backbone for Blockchain Data</div>
            <div className="r2">
              Follow the Smart Money, see where funds are moving to, identify new projects or tokens, and trace transactions down to the most granular level.
            </div>
            <div className="r3" ref={ref}>
              <div className="number1">
                <span className="countup-number" ref={el => countUpRefs.current[0] = el}>0</span><br />
                <span>Labelled addresses</span>
              </div>
              <div className='bar'></div>
              <div className="number2">
                <span className="countup-number" ref={el => countUpRefs.current[1] = el}>0</span><br />
                <span>Of all onchain TVL</span>
              </div>
              <div className='bar'></div>
              <div className="number3">
                <span className="countup-number" ref={el => countUpRefs.current[2] = el}>0</span><br />
                <span>Data processed daily</span>
              </div>
            </div>
          </div>

<br/><br/><br/>

<div className="section5">

<div className="left">
<div className="r1">
10X Your Insights, Not Your Workload
</div>

<div className="r2">
We bring together everything that the most ambitious crypto investors and teams need to make critical decisions. Use data that no one else, however you like, on one single platform.
</div>


<div className="r3">
<p  ref={typedRef}></p>
</div>


</div>



<div className="right">
    <img src="imgani1.jpg" className="animated-img" id="img1" alt="Image 1" />
    <img src="i2.png" className="animated-img" id="img2" alt="Image 2" />
</div>



</div>

<br/><br/>


<div className="section6">


<div className="r1">

<div className="box">
<div className="u">
Nansen is currently the best on-chain analytics tool available on the market. It is my go-to dataset when attempting to dissect on-chain movements and to the learned eye, contains plentiful bouts of alpha. Definitely a must-use for crypto professionals.
</div>
<div className="l">
Wangarian
@0xWangarian
</div>
</div>

<div className="box">
<div className="u">
Nansen is currently the best on-chain analytics tool available on the market. It is my go-to dataset when attempting to dissect on-chain movements and to the learned eye, contains plentiful bouts of alpha. Definitely a must-use for crypto professionals.
</div>
<div className="l">
Wangarian
@0xWangarian
</div>
</div>


<div className="box">
<div className="u">
Nansen is currently the best on-chain analytics tool available on the market. It is my go-to dataset when attempting to dissect on-chain movements and to the learned eye, contains plentiful bouts of alpha. Definitely a must-use for crypto professionals.
</div>
<div className="l">
Wangarian
@0xWangarian
</div>
</div>


</div>


<div className="r2">

<div className="box">
<div className="u">
Nansen is currently the best on-chain analytics tool available on the market. It is my go-to dataset when attempting to dissect on-chain movements and to the learned eye, contains plentiful bouts of alpha. Definitely a must-use for crypto professionals.
</div>
<div className="l">
Wangarian
@0xWangarian
</div>
</div>

<div className="box">
<div className="u">
Nansen is currently the best on-chain analytics tool available on the market. It is my go-to dataset when attempting to dissect on-chain movements and to the learned eye, contains plentiful bouts of alpha. Definitely a must-use for crypto professionals.
</div>
<div className="l">
Wangarian
@0xWangarian
</div>
</div>


<div className="box">
<div className="u">
Nansen is currently the best on-chain analytics tool available on the market. It is my go-to dataset when attempting to dissect on-chain movements and to the learned eye, contains plentiful bouts of alpha. Definitely a must-use for crypto professionals.
</div>
<div className="l">
Wangarian
@0xWangarian
</div>
</div>

</div>


</div>


<br/><br/><br/>

<Lpfooter/>

    </div>
   </div>
   </>
  )
}

export default Landingpage
