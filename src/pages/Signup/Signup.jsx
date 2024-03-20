import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button.jsx'
import './Signup.css';
export default function Signup() {
  const Navigate=useNavigate();
  const [password, setPassword]=useState('');
  const [Cpassword, setCpassword]=useState('');
  const [matchPassword, setMpassword]=useState(false);
  const [formdata, setFormdata]=useState({Name:'',Email:''});

  const onChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
    console.log(e)
  }
const changePassword=(e)=>{
setPassword(e.target.value)
}
const changeCpassword=(e)=>{
setCpassword(e.target.value)
setMpassword(password===e.target.value?true:false)
}
  const  handleSubmit = async (e) => {
    e.preventDefault();
    if(matchPassword){
      const data=await fetch("http://localhost:5000/auth/signup",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          Name: formdata.Name,
          Email:formdata.Email,
          Password: password
          
        })
      })
      const responce= await data.json();
      if(responce.success){
        setTimeout(() => {
          
        }, 3000);
        Navigate('/signin')
      }
    }else{
      alert('some error occured');
    }
    
  };
    
  // }
  return (
    <div className='__bg'>
    <div className='__signin'>
      <h2 className='text-center my-2'>Sign up</h2>
      <form  onSubmit={handleSubmit}>
      <Input type='text' placeholder='john Deo' onChange={onChange} label='Name' name='Name'/>
      <Input type='email' placeholder='example@gmail.com' onChange={onChange} label='Email' name='Email'/>
      <Input type='password' label='Password' value={password} onChange={changePassword} name='Password'/>
      <Input type='password' label='Confirm Password' value={Cpassword} onChange={changeCpassword} name='Cpassword'/>
      <Button btntype='primary mt-3 float-end' btnName='Sign up'/>
      </form>
    </div>
    </div>
  )
}
