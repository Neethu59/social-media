import React from 'react'
import './Toolbar.css';
import { Link } from 'react-router-dom'; 
export default function Toolbar() {
  return (
    <>
     <div class="con" id="con">
    <div>
        <h3 id="mai">Mai-Tweet</h3>
    </div>
    
    <div class="search">
        
      <i class="fa fa-search" aria-hidden="true"id="i"></i>  <input type="textbox"  placeholder="search for friends,post or video"id="inpu"/>
      </div>
      <div id="ph">
        
            <li className='li1'>
       <Link to={'profile'} id="hs">Profile</Link>    </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className='li1'>
              <Link to={'Home'}id="hs">Home</Link></li></div>
        <div id="fa">  <li className='li1'><Link to={'User'}id="hs"><i class="fa fa-user" aria-hidden="true"></i></Link></li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className='li1'><Link to={'messege'}id="hs"><i class="fa fa-commenting" aria-hidden="true"></i></Link></li> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className='li1'><Link to={'notification'}id="hs"><i class="fa fa-bell" aria-hidden="true"></i></Link></li> </div>
        <div id="im">    <li className='li1'><Link to={'userimg'}id="hs"><img src="assest/img.jpg" aria-hidden="true"id="ims"/></Link></li> 
          
        </div>
    </div>
    <div className='row' id="r1"></div>
    </>
  )
}
