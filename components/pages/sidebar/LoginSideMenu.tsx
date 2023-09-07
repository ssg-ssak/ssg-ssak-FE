'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import DropDownMenu from './DropDownMenu';
import { SideMenuListType } from '@/types/sidemenu/SideMenuListType';
import { SideMenuCheckedType } from '@/types/sidemenu/SideMenuCheckedType';




function LoginSideMenu() {
  const [data,setData]=useState<SideMenuListType[]>([]);
  const [checked,setChecked]=useState<SideMenuCheckedType>({
    mypoint:false,
    benefits:false,
    mylounge:false,
    myinfo:false
  })

  
  useEffect(() => {
    const getMyData = () => fetch('http://localhost:9000/mypage')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    getMyData()
    
  }, [])
  // console.log(data);
  
  
  return (
    <div className='pt-[40px] px-[20px] pb-[35px]'>
      <h3 className='pb-2 text-[15px] font-semibold border border-white border-b-black'>마이페이지</h3>
      {
        data.map((item:SideMenuListType,idx)=>(
          <DropDownMenu 
            key = {idx}
            innerData = {item}
          />
        ))
      }
    </div>

  )
}

export default LoginSideMenu


