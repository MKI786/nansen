import React from 'react'
import '../Chaingrowth/Chaingrowth.css'
import { SiLitecoin } from "react-icons/si";


function Chaingrowth() {

  const barray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  return (
    <>

    <div className="chaingrowth">

<br/>

<div className="r1">

  {

barray.map( (v,i)=>(

<div className="box" key={i}>
<div><SiLitecoin  style={{color:'wheat', fontSize:'30px'}}/></div>
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

export default Chaingrowth
