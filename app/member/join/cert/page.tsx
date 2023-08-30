'use client'
import React, { useState } from 'react'

function Cert() {
  const [checked,setChecked]=useState<string>("phone");

  //TODO: 배경안에 체크모양
  const iafter="after:bg-[url('/images/signup/ilogo.png')] after:bg-[98%_auto]"
  const PhoneImageOff="text-[#767676] after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[45px] after:h-[40px] after:left-[44%] after:ml-[-10px] after:top-[15px] after:bg-[85px_auto] after:bg-[right_0px_top_2px]"
  const PhoneImageOn="font-semibold after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[50px] after:h-[40px] after:left-[50%] after:ml-[-10px] after:bg-[85px_auto] after:top-[15px]"
  const CardImageOff="text-[#767676] after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[50px] after:h-[40px] after:left-[37%] after:ml-[-10px] after:bg-[85px_auto] after:top-[15px] after:bg-[left_50px_top_-46px]"
  const CardImageOn="font-semibold after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[50px] after:h-[40px] after:left-[47%] after:ml-[-10px] after:bg-[85px_auto] after:top-[15px] after:bg-[left_0px_top_-46px]"
  const liOn="bg-linear_93"
  const liOff="bg-slate-100"

  const  handleChecked= async (e: React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
    const target = e.currentTarget;
    const id = target.dataset.id;
    // console.log(id);
    if(id!==undefined){
      setChecked(id);
      // console.log(checked);
    }
      
    
    
  }

  return (
    <section className='pt-[56px]'>
      <div className='py-10 px-5'>
        <div className='relative'>
          <ol className='flex relative mb-4'>
            <li className='bg-[url("/images/signup/libackground.png")] bg-cover relative rounded-[50%] w-5 h-5 mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px]  ${iafter}`}>현재 1단계</i>
            </li>
            <li className='relatve bg-[#e8e8e8] rounded-[50%] w-[20px] h-[20px] mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px] ${iafter}`}>현재 2단계</i>
            </li>
            <li className='relatve bg-[#e8e8e8] rounded-[50%] w-[20px] h-[20px] mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px] ${iafter}`}>현재 3단계</i>
            </li>
            <li className='relatve bg-[#e8e8e8] rounded-[50%] w-[20px] h-[20px] mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px] ${iafter}`}>현재 4단계</i>
            </li>
          </ol>
          <p className='text-[24px] leading-8 font-semibold'>본인인증</p>
          <p className='text-[13px] leading-5 mt-2 text-[#767676]'>본인인증 수단을 선택해주세요.</p>
        </div>
      </div>

      <div>
        <ul className='flex h-[88px] my-0 mx-5 relative'>
          <li data-id='phone' className={`flex flex-1 z-[1px] h-full items-center justify-center p-[2px] rounded-lg  ${checked==="phone"?liOn:liOff}`} onClick={handleChecked}>
            <p className={`relative block w-full h-full rounded-md bg-white pt-[53px] text-[13px] text-center  ${checked==="phone"?PhoneImageOn:PhoneImageOff}`}>
              휴대폰인증
            </p>
          </li>
          <li data-id='card' className={`flex flex-1 z-[1px] h-full items-center justify-center p-[2px] rounded-lg  ${checked==="card"?liOn:liOff}`} onClick={handleChecked}>
            <p className={`relative block w-full h-full rounded-md bg-white pt-[53px] text-[13px] text-center ${checked==="card"?CardImageOn:CardImageOff}`}>
              카드인증
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Cert