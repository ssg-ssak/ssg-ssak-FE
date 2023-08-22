'use client'
import { LoginFormDataType } from '@/types/fromType'
import { log } from 'console';
import React, { useState } from 'react'

function loginForm() {

  const[loginData,setLoginData] =useState<LoginFormDataType>({
    loginId:'',
    password:'',
    isAutoId:false,
    isAutoLogin:false
  });

  const handleOnChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;

    
    if(name==='isAutoId' || name === "isAutoLogin"){
      console.log(name, e.target.checked);
      setLoginData({
        ...loginData,
        [name]:e.target.checked,
      })
    }else{
      console.log(name,value);
      setLoginData({
        ...loginData,
        [name]:value,
      })
    }
    
  }

  return (
    <form className='w-full px-8'>
      <input 
      type="text" 
      name="loginId" 
      id='loginId' 
      placeholder='아이디' 
      className='w-full h-8 rounded-3xl bg-white text-sm border border-black-500 pl-2 '
      onChange={handleOnChange}
      />
      <input 
      type="password" 
      name='password' 
      id='loginId' 
      className='w-full h-8 rounded-3xl bg-white text-sm border border-black-500'
      onChange={handleOnChange}
      />
      <div className='flex justify-between py-2'>
        <div className='w-1/2'>
          <input className='w-5 h-5 ' type="checkbox" name="isAutoId" id="isAutoId" onChange={handleOnChange}/>
          <label htmlFor="isAutoId">아이디 저장</label>
        </div>
        <div className='w-1/2'>
          <input type="checkbox" name="isAutoLogin" id="isAutoLogin" onChange={handleOnChange}/>
          <label htmlFor="isAutoLogin">자동 로그인</label>
        </div>
      </div>
      
      
      <p>LOGIN ID : {loginData.loginId}</p>
      <p>PASSWORD : {loginData.password}</p>
      <p>IS AUTO ID : {loginData.isAutoId ? 'true' : 'false'}</p>
      <p>IS AUTO LOGIN : {loginData.isAutoLogin ? 'true' : 'false'}</p>

    </form>
  )
}

export default loginForm