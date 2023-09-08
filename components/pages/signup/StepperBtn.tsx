'use client'
import { useRouter } from 'next/navigation'
import React, { SetStateAction } from 'react'

function StepperBtn({btnText, stepId, setStepId} : {btnText:string, stepId:number, setStepId:React.Dispatch<SetStateAction<number>>}) {
  const router=useRouter()

  return (
    <div className='px-4'>
      <div
        className='bg-linear_110 border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]' 
        onClick={stepId===5?()=>router.push('/login'):()=>setStepId(stepId + 1)}
      >
        {btnText}
      </div>
    </div>
  )
}

export default StepperBtn