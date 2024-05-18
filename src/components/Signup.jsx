import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Signup = () => {

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='signup-container'>      
      <form className='form-container'>
      <h2>Signup</h2>
      <div className='name-input'>
      <div className="input-box">
      <input className='form-input' type="text" placeholder='First Name' onChange={(e)=>{setName(e.target.value)}} style={{marginRight: '5px'}} required/>
        <FaUser className='icon'/> </div>
        
        <div className="input-box">
      <input className='form-input' type="text" placeholder='Last Name' onChange={(e)=>{setName(e.target.value)}} required /> </div></div>
        <div className="input-box">
        <input className='form-input' type="email" placeholder='E-Mail' onChange={(e)=>{setEmail(e.target.value)}} required />
        <FaEnvelope className='icon'/> </div>

        <div className="input-box">
        <input className='form-input' type="password" placeholder='Create Password' onChange={(e)=>{setPassword(e.target.value)}} required />
        <FaLock className='icon'/> </div>
       
        <div className="btn-box">
        <button className='form-submit' type="submit" onClick={handleSubmit}>Sign Up</button> 
        </div>   
        <div className='link-btn'>  
      <Link to='/'>Already have an account? Login</Link></div>
      </form>
    </div>
  );
};

export default Signup;
