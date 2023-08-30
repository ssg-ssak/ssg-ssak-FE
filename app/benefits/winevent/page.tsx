'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

function myevent() {

  const pathname=usePathname()

  return (
    <>

      <div role="tablist" className='flex flex-row h-[44px] basis-1/2 text-center mt-[105px] text-[#505050] font-semibold text-[13px] 
      pt-2.5'>

  <div role="tab" className={pathname==='/benefits/myevent' ?`basis-1/2 text-center text-[13px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8]` : `basis-1/2 text-center text-[#505050] text-[13px] pt-2.5`}>
  <Link href="/benefits/myevent">
    참여한 이벤트(0)
    </Link>
  </div>

  <div role="tab" className={pathname==='/benefits/winevent' ?`basis-1/2 text-center text-[13px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8]` : `basis-1/2 text-center text-[#505050] text-[13px] pt-2.5`}>
  <Link href='/benefits/winevent'>
    당첨 확인(0)
    </Link>
  </div>
  </div>

    <div className='pt-[16px] pb-[60px]'>
      <div className='py-[40px] mx-[40px] mb-[60px] border border-dashed'>
        <p className='pt-[64px] text-center'>당첨 이벤트가 없습니다.</p>
      </div>
    </div>

    </>
  )
}

export default myevent