import React, { useState } from 'react'
import Input from '../../components/Input/Input.jsx'
import Button from '../../components/Button/Button.jsx'
import './Signin.css'
export default function Signin() {
const [formData, setData]=useState({Name:'',Email:'', Password:''})
const [msg, setmsg]=useState({mg:'',type:''})
const onChange=(e)=>{
  setData({...formData,[e.target.name]:e.target.value})
  // console.log(formData);

}

const submitForm=async (e)=>{
e.preventDefault();
const responce=await fetch("http://localhost:5000/auth/login",{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({Name:formData.Name, Email:formData.Email, Password:formData.Password})
});
const data=await responce.json();
// console.log(data);
if(data.success){
  localStorage.setItem('token',data.token)

  setmsg({msg:data.msg, type:'success'})
}
else{
  setmsg({msg:data.msg, type:'danger'})
}
}
  return (
    <div className='__bg'>
      <div className='__signin'>
        <h2 className='text-center my-2'>Sign In</h2>
        <form onSubmit={submitForm}>
        <Input type='text' label='Name' placeholder='Enter your Name' name='Name' onChange={onChange}/>
        <Input type='Email' label='Email' placeholder='Enter your Email' name='Email' onChange={onChange}/>
        <Input type='Password' label='Password' placeholder='Enter your Password' onChange={onChange} name='Password'/>
        <Button btntype='primary mt-3 float-end' btnName='Sign in'/>
        <p className={`text-center text-${msg.type}`}>{msg.msg}</p>
        </form>
      </div>
    </div>
  )
}
