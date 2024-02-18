import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button.jsx'
export default function Signup() {
  const [password, setPassword]=useState('');
  const [Cpassword, setCpassword]=useState('');
  const [matchPassword, setMpassword]=useState(false);

const changePassword=(e)=>{
setPassword(e.target.value)
}
const changeCpassword=(e)=>{
setCpassword(e.target.value)
setMpassword(password===e.target.value?true:false)
}
  const  handleSubmit = (e) => {
    e.preventDefault();
    if(matchPassword){
      alert("Signed Up Successfully")
    }else{
      alert("Passwords do not match");
    }
    
  };
    
  // }



  return (
    <div className='__bg'>
    <div className='__signin'>
      <h2 className='text-center my-2'>Sign up</h2>
      <form  onSubmit={handleSubmit}>
      <Input type='text' placeholder='john Deo' label='Name' name='Name'/>
      <Input type='email' placeholder='example@gmail.com' label='Email' name='Email'/>
      <Input type='password' label='Password' value={password} onChange={changePassword} name='Password'/>
      <Input type='password' label='Confirm Password' value={Cpassword} onChange={changeCpassword} name='Cpassword'/>
      <Button btntype='primary mt-3 float-end' btnName='Sign up'/>
      </form>
    </div>
    </div>
  )
}
