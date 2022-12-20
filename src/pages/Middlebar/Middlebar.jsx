import React from 'react'
import './Middlebar.css';
import { Post } from '../../Dummy-data';
import Feed from '../Feed';

export default function Middlebar() {

  // const [like,setlike]=ustate




  return (
    <>
    
   
       <div className='conta'id="box">
       <div className='col-sm-5'id="middlebar">
        <div id="bo1">
          <div>
          <img src="assest/img.jpg"id="image"/><span className='span1'>What's in your mind safak?</span>
          <hr/>
        </div>
        
        <i class="fas fa-images"id="i21"></i><span className='span1'>Photo or video</span>
        <i class="fas fa-tag"id="i22"></i><span className='span1'>tag</span>
        <i class="fas fa-map-marker-alt"id="i23"></i><span className='span1'>location</span>
        <i class="fas fa-smile"id="i24"></i><span className='span1'>Feelings</span>
        <button id="but">Share</button>
        </div>
        {/* </div>   
      </div>
      <div className='ro'id="box1">
       <div className='col-sm-4'id="middlebar1"> */}
        {Post.map((data)=>(
      <Feed key={data.id} details={data} />
      
          ))}
        </div>
        </div>
        
  
    </>
  )
}
