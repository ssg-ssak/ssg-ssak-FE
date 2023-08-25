'use client'
import React, { useState } from 'react'
import { SortRadioType } from '@/types/mypoint/SortRadioType'

function SortRadioWrap(props:{props:SortRadioType[]}) {
  const [checked, setChecked]=useState<String>(props.props[0].id);
  // console.log(props);
  
  
  const myPointAfterCheck=" text-[#d9044b] after:absolute after:b-[-1px] after:z-1 after:h-[1px] after:bg-[#d9044b] after:left-0 after:w-full after:block"
  const myPointAfterUncheck="after:absolute after:b-[-1px] after:z-1 after:h-[1px] after:bg-[#767676] after:left-0 after:w-full after:block  after:text-[#767676] "

  const handleOnChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;

    if (name==='sortPointList'){
      setChecked(e.target.id)
      // console.log(name,value);
      
    }
  }
  return (
    <>
    <div className='sort_radio_box flex text-center '>
    {
      props.props.map((e:SortRadioType, idx)=>(
        <div key={idx}  className='flex-1 relative'>
          <input
            className={`absolute left-0 top-0 w-full h-full appearance-none`}
            type="radio" 
            id={e.id} 
            name={e.name}
            onChange={handleOnChange}/>
          <label className={`font-semibold relative text-[14px] h-[42px] leading-10 block ${ checked===e.id ? myPointAfterCheck:myPointAfterUncheck}`} htmlFor={e.id}>{e.contents}</label>
        </div>
      ))
      
    }
    </div>
    </>
  )
}

export default SortRadioWrap