import React from 'react'
import './Rightsidebar.css';
// import OnlinePredictionSharpIcon from '@mui/icons-material/OnlinePredictionSharp';
import { Badge } from '@mui/material';
import { Online } from '../../Dummy-data';
export default function Rightsidebar() {
  return (
    <div class="conta">
        <div >
                <div className='gift1'>
    
                <img src="assest/gift.jpg"id="gift"/>
                <span id="para">Pola foster</span> &nbsp;<span id="para1">and</span> &nbsp;<span id="para">3  other  friends</span> &nbsp;&nbsp;
            <span id="para1"> have a birthday today</span>
                {/* <h6 id="para">Pola foster</h6> &nbsp;&nbsp;
                <p id="para">and</p>  &nbsp;&nbsp;
                <h6 id="para">3 other Friends</h6> &nbsp;&nbsp;
                <p id="para">have a birthday today.</p> */}
                {/* <OnlinePredictionSharpIcon/> */}
            </div>
            <div className='position'>
                <img src="assest/food.jpg" id="food"/>
                {/* <h1 id="caption">fghjkl;</h1> */}
                <h5 id="online">Online Friends</h5>
                {Online.map((data)=>(
                <ul className='listrow'>
                {/* <span id="onlin"style={{backgroundColor:"green"}}> </span> */}
                <li className='list' >     <Badge color="success" overlap="circular" badgeContent=" ">
             <img src={data.profilephoto}id="image"style={{height:"40px",width:"40px"}}/>
                </Badge><span className='span'>{data.profilename}</span></li><br/>
          {/* <li className='list'><Badge color="success" overlap="circular" badgeContent=" "><img src="assest/img1.jpg"id="image"style={{height:"40px",width:"40px"}}/>   </Badge><span className='span'>Dora sam</span></li><br />
          <li className='list'><Badge color="success" overlap="circular" badgeContent=" "><img src="assest/img2.jpg"id="image"style={{height:"40px",width:"40px"}}/></Badge><span className='span'>Alex duvan</span></li><br />
          <li className='list'><Badge color="success" overlap="circular" badgeContent=" "><img src="assest/img3.jpg"id="image"style={{height:"40px",width:"40px"}}/></Badge><span className='span'>Jannel shrum</span></li><br />
          <li className='list'><Badge color="success" overlap="circular" badgeContent=" "><img src="assest/img4.jpg"id="image"style={{height:"40px",width:"40px"}}/></Badge><span className='span'>Janeelia</span></li><br />
          <li className='list'><Badge color="success" overlap="circular" badgeContent=" "><img src="assest/img5.jpg"id="image"style={{height:"40px",width:"40px"}}/></Badge><span className='span'>James</span></li><br />
          <li className='list'><Badge color="success" overlap="circular" badgeContent=" "><img src="assest/img6.jpg"id="image"style={{height:"40px",width:"40px"}}/></Badge><span className='span'>John</span></li><br />
           */}
        </ul>
        ))}
            </div>
        </div>
    </div>
    
  )
}
