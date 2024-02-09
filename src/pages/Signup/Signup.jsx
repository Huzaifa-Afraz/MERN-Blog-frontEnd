import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button.jsx'
export default function Signup() {
  return (
    <div className='__bg'>
    <div className='__signin'>
      <h2 className='text-center my-2'>Sign up</h2>
      <form >
      <Input type='text' placeholder='john' label='Name' name='Name'/>
      <Input type='email' placeholder='example@gmail.com' label='Email' name='Email'/>
      <Input type='password' label='Password' name='Password'/>
      <Input type='password' label='confirm Password' name='Cpassword'/>
      <Button btntype='primary mt-3 float-end' btnName='Sign up'/>
      </form>
    </div>
    </div>
  )
}
