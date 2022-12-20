import React from 'react'
import './Login.css';
import{ Link } from 'react-router-dom'
export default function Login() {
    return (
<> 
<div class="container" >
            <div class="row">
                
                <div class="col-sm-5" id="lef">
                 <div>   <h1 id="fa">Facebook</h1>
                    <h5>
                        Connect with friends and the world around you and lamasocial
                    </h5></div>
                </div></div></div>

                <div class="container"id="rig">
                    <div class="row">
                <div class="col-sm-5">
                    <div>
                       <input type="text" placeholder="Enter Username" name="username" required id="input"/>
                        <br></br></div>
                        <div>      <input type="password" placeholder="Enter Password" name="password" required id="input"/> </div>
                  <Link to="/register">     <div>   <button id="log">Login</button></div> </Link> 

                        <h5>forgot password</h5>
                            <button id="create">Create new Account</button>
                        
                    </div>
                </div>
            </div>
            
            

            </>

            )
}
