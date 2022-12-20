import React, { useState } from 'react'



export default function Feed(props) {
    const {details} = props
    const [like,setLike]=useState(Feed.like)
    const [isLiked,setLiked]=useState(true)
    const likeHandler=()=>{
        setLike(isLiked?like-1:like+1)
        setLiked(!isLiked)
    }
    console.log(isLiked)
  return (

    <>
    
     <div id="bo2">
       <div id="ig">
      
          <img src ={details.profilepicture}id="image"/><span id="sp1">{details.username}</span><span id="sp2">{details.date}</span><span id="dot">.</span><span id="dot">.</span><span id="dot">.</span>
          <h6 id="h6">Love For All,Harted For None</h6>
        </div>
        <div>
          <img src={details.photo}id="im2"/>    
        </div>
        <i class="fas fa-thumbs-up" id="like"onClick={likeHandler}> </i><span>{details.like}</span><span className='span1'><i class="fa-duotone fa-circle-heart"></i></span>
        <span className='span1'id="comment">{details.comment} </span><span className='span1'>4</span>
        </div>
    </>
  )
}
