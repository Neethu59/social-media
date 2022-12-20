import React ,{useState} from 'react'
import './Register.css';

export default function Register() {
    const [inputs,setinputs]=useState({});
    const setRegister=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setinputs({...inputs,[name]:value})
        console.log(inputs)
    }
    const registerSubmit=(event)=>{
        event.preventDefault();
        console.log("reg",inputs)
    }
  return (
    <>
    <form  method="post" onSubmit={registerSubmit}>
             <div className='facebook'>
                <div className='row'>
             <div className='fc'>
                <h1 id="colr">Facebook</h1>
                <h5>Connect friends and the world around you on lamasocial</h5>
             </div>
             <div className='fb'>
                <input type="text" placeholder='User name'name="name" value={inputs.name||""}onChange={setRegister}required id="in"/><br /><br />
                <input type="email" placeholder='email'name="email" value={inputs.email||""}onChange={setRegister}required id="in"/><br/><br/>

                <input type="password" placeholder='password'name="password" value={inputs.password||""}onChange={setRegister} required id="in"/><br/><br/>
                <input type="password again" placeholder='password again 'name="passwordagain" value={inputs.passwordagain||""}onChange={setRegister} required id="in"/><br /><br />
                <input type="button" value="Sign Up" required id="btn"/><br />
                <input type="submit" value="Log into Account"required id="bttn" />
             </div>
</div></div>
</form>
    </>
  )
}
