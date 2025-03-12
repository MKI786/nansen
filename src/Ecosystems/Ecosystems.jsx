import React from 'react'
import '../Ecosystems/Ecosystems.css'
import { SiLitecoin } from "react-icons/si";



function Ecosystems() {

  const barray = [1,2]



  return (
    <>
    
    
    <div className="chaingrowth">

<br/>

<div className="r1">

  {

barray.map( (v,i)=>(

<div className="box" key={i}>
<div><SiLitecoin  style={{color:'yellow', fontSize:'30px'}}/></div>
<p>BNB Chain</p>
<button>View</button>
</div>

)
)
  }


</div>

    </div>
    
    
    </>
  )
}

export default Ecosystems
