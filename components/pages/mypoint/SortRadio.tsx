'use client'
import { log } from 'console';
import React, { useState } from 'react'

function SortRadio(props:{types:String}) {
  const {types}=props;
  const [checked, setChecked]=useState<String>('sortRadio00');
  
  const myPointAfterCheck=" text-[#d9044b] after:absolute after:b-[-1px] after:z-1 after:h-[1px] after:bg-[#d9044b] after:left-0 after:w-full after:block"
  const myPointAfterUncheck="after:absolute after:b-[-1px] after:z-1 after:h-[1px] after:bg-[#767676] after:left-0 after:w-full after:block  after:text-[#767676] "

  const handleOnChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name}=e.target;

    if (name==='sortPointList'){
      setChecked(e.target.id)
      
    }
  }
  
  return (
    <>
      {
        // sortradio 타입이 mypoint에서 사용되는것인가?
        types==="mypoint"
        ?
        <div className='sort_radio_box flex text-center '>
          <div className='flex-1 relative '>
            <input 
              className={`absolute left-0 top-0 w-full h-full appearance-none`}
              type="radio" 
              id='sortRadio00' 
              name='sortPointList'
              onChange={handleOnChange}/>
            <label className={`font-semibold relative text-[14px] h-[42px] leading-10 block   ${ checked==="sortRadio00" ? myPointAfterCheck:myPointAfterUncheck}`} htmlFor="sortRadio00">전체</label>
          </div>
          <div className='flex-1 relative'>
            <input 
              className='absolute left-0 top-0 w-full h-full appearance-none' 
              type="radio" 
              id='sortRadio01' 
              name='sortPointList' 
              onChange={handleOnChange}/>
            <label className={`font-semibold  relative text-[14px] h-[42px] leading-10 block  ${ checked==="sortRadio01" ? myPointAfterCheck:myPointAfterUncheck}`} htmlFor="sortRadio01">적립/사용</label>
          </div>
          <div className='flex-1 relative'>
            <input 
              className='absolute left-0 top-0 w-full h-full appearance-none' 
              type="radio" 
              id='sortRadio02'
              name='sortPointList' 
              onChange={handleOnChange}/>
            <label className={`font-semibold  relative text-[14px] h-[42px] leading-10 block  ${ checked==="sortRadio02" ? myPointAfterCheck:myPointAfterUncheck}`} htmlFor="sortRadio02">선물</label>
          </div>
          <div className='flex-1 relative'>
            <input 
              className='absolute left-0 top-0 w-full h-full appearance-none' 
              type="radio" 
              id='sortRadio03' 
              name='sortPointList' 
              onChange={handleOnChange}/>
            <label className={`font-semibold relative text-[14px] h-[42px] leading-10 block  ${ checked==="sortRadio03" ? myPointAfterCheck:myPointAfterUncheck}`} htmlFor="sortRadio03">전환</label>
          </div>
        </div>
        :null
      }
    </>
    
    
  )
}

export default SortRadio