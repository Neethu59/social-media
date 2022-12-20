import React from 'react'
import Toolbar from '../pages/Toolbar/Toolbar'
import Sidebar from '../pages/Sidebar/Sidebar'
import Middlebar from '../pages/Middlebar/Middlebar'
import Rightsidebar from '../pages/Rightsidebar/Rightsidebar'
import './Home.css';
export default function Home() {
  return (
    <>
   <div><Toolbar/>
    </div>
    <div className='container'>
    
   
    <Sidebar/>
    <Middlebar/>
   <Rightsidebar/></div>
    
   
    
    </>
    
  )
}
