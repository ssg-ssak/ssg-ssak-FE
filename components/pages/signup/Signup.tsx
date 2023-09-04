'use client'
import React, { use, useEffect, useState } from 'react'
import PostCodeDaum from '../../widget/PostCodeDaum';
import { DaumAddressType } from '@/types/signup/DaumAddressType';

function SignUp() {

    const [isView, setIsView] = useState<boolean>(false);
    const [address, setAddress] = useState<DaumAddressType>();

    const handleOpenModal = () => {
        setIsView(!isView);
    }

    useEffect(() => {
        if(address){
            // setIsView(false);
            console.log(address)
        }
    }, [address])

  return (
    <>
      
      <PostCodeDaum isView={isView} setIsView={setIsView} setAddress={setAddress} />
      <div>
        <div className='flex justify-between gap-2'>
          <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-[70%]'>
            <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="text" readOnly value={address?.zonecode}  placeholder='우편번호'/>
          </div>
          <button className='rounded-lg w-28 h-11 text-center border mt-[10px] text-[13px] font-semibold border-[#EAEAEA]' onClick={handleOpenModal}>
            우편번호찾기
          </button>
        </div>
        <div className=' mt-2 border-[2px]  h-[48px] rounded-lg w-full relative'>
          <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' type="text" value={address?.address} readOnly />
        </div>
        
      </div>
      <div className={`${isView? "fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-5" : "hidden"}`} onClick={handleOpenModal}>
      </div>
      
      {/* <p>{address?.address}</p>
      <p>{address?.zonecode}</p> */}
    </>

  )
}

export default SignUp