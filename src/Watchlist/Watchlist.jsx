import React, { useState } from 'react'
import '../Watchlist/Watchlist.css'



function Watchlist() {


  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleLabelChange = (event) => {
    const options = event.target.options;
    const selectedOptions = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setSelectedLabels(selectedOptions);
  };



  return (
   <>
   
   <div className="mdashboard">
  
  <div className="f" style={{marginLeft:'auto', right:'3rem', position:'relative'}}>
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalatw" style={{backgroundColor:'#00FFA7',color:'black', border:'none',fontWeight:'bold', borderRadius:'5px 5px', padding:'0.3rem' }}>+ Add Wallet</button>
  </div>
  
  <div className="r1">
<img src="/sip.png" style={{width:'300px'}} alt="" />
  </div>
  <div className="r2">
   <p>No items in your watchlist</p>
   </div>
   <div className="r3">
   <p>Add items to your list while browsing Nansen or by clicking the “Add” button on this page.</p>
   </div>
   

   <br/>
 
 </div>






 <div class="modal fade" id="exampleModalatw" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:'#001321'}}>
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Wallet to Watchlist</h1>
        <button type="button" style={{backgroundColor:'white'}} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{backgroundColor:'#001321'}}>
        <form method='POST' style={{display:'flex', flexDirection:'column',alignItems:'flex-start',justifyContent:'center', gap:'0.7rem'}}>
<label>Select wallet</label>
<select name="" id="" className='form-control' style={{backgroundColor:'transparent', color:'white', outline:'none'}}>
  <option value="">pranksy.eth (Pranksy)</option>
</select>
<label>Change Name</label>

<input id="inputf" type="text" placeholder='Name' className='form-control'  style={{backgroundColor:'transparent', color:'white', outline:'none'}} />

<label>Edit Additional Labels</label>

<select name="labels" id="labels" multiple className='form-control'  onChange={handleLabelChange} style={{backgroundColor:'transparent', color:'white', outline:'none'}}>
<option value="additional_labels">Additional Labels</option>
                  <option value="wallet_to_watch">Wallet to watch</option>
                  <option value="cool_activity">Cool Activity</option>
                  <option value="whale">Whale</option>
</select>

<label>Edit Notes</label>

<input id="inputf" type="text" placeholder='Your Nodes about this wallet' className='form-control'  style={{backgroundColor:'transparent', color:'white', outline:'none'}} />

<div style={{display:'flex', justifyContent:'flex-end', width:'100%'}}><button style={{backgroundColor:'#00FFA7',color:'black', border:'none', borderRadius:'5px 5px', padding:'0.4rem'}}>Add to Watchlist</button></div>
        </form>
      </div>
    </div>
  </div>
</div>  
   
   </>
  )
}

export default Watchlist
