import React from 'react'
import './Sidebar.css';
export default function sidebar() {
  return (
    <>
    
     <div className='conta'id="sidebarrow">
        <div id="sidebarrow1">
        
          <ul className='listrow'>
            <li className='list'><i class="fas fa-rss"></i><span className='span'>feed</span></li><br/>
            <li className='list'><i class="fa fa-commenting" aria-hidden="true"></i><span className='span'>chats</span></li><br />
            <li className='list'><i class="fa fa-play" aria-hidden="true"></i><span className='span'>videos</span></li><br />
            <li className='list'><i class="fas fa-user-friends"></i><span className='span'>groups</span></li><br />
            <li className='list'><i class="fas fa-bookmark"></i><span className='span'>bookmark</span></li><br />
            <li className='list'><i class="fas fa-question-circle"></i><span className='span'>questions</span></li><br />
            <li className='list'><i class="fas fa-suitcase"></i><span className='span'>jobs</span></li><br />
            <li className='list'><i class="fas fa-calendar"></i><span className='span'>events</span></li><br />
            <li className='list'><i class="fas fa-graduation-cap"></i><span className='span'>cources</span></li>
            <div className='row' id="buttonrow">
              <button id="button1">show more</button>
            </div><hr/>
          </ul>
        <ul className='listrow'>
          <li className='list'><img src="assest/img.jpg"id="image"/><span className='span'>Alexandra</span></li><br/>
          <li className='list'><img src="assest/img1.jpg"id="image"/><span className='span'>Dora sam</span></li><br />
          <li className='list'><img src="assest/img2.jpg"id="image"/><span className='span'>Alex duvan</span></li><br />
          <li className='list'><img src="assest/img3.jpg"id="image"/><span className='span'>Jannel shrum</span></li><br />
          <li className='list'><img src="assest/img4.jpg"id="image"/><span className='span'>Janeelia</span></li><br />
          <li className='list'><img src="assest/img5.jpg"id="image"/><span className='span'>James</span></li><br />
          <li className='list'><img src="assest/img6.jpg"id="image"/><span className='span'>John</span></li><br />
          
        </ul>
      </div>
</div>
    </>
  )
}
