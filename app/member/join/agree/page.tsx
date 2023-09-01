import ShinsegaePointCert from '@/components/ui/cert/ShinsegaePointCert'
import React from 'react'

function Agree() {
  const iafter="after:bg-[url('/images/signup/ilogo.png')] after:bg-[98%_auto]"

  return (
    <section className='pt-[56px]'>
      <div className='py-10 px-5'>
        <div className='relative'>
          <ol className='flex relative mb-4'>
            <li className='bg-[#ff8843] bg-cover relative rounded-[50%] w-5 h-5 mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px]  ${iafter}`}>현재 1단계</i>
            </li>
            <li className='relatve bg-[url("/images/signup/libackground.png")] bg-cover rounded-[50%] w-[20px] h-[20px] mr-[10px]'>
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
          <p className='text-[22px] leading-8 font-semibold'>약관동의</p>
        </div>
      </div>

      <ShinsegaePointCert />
    </section>
  )
}

export default Agree