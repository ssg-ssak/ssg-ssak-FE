import React from "react"
import Link from "next/link"


export default function ServiceAgreeLayout({children}: {
  children: React.ReactNode
}) {
  return (
  <div>

    <div className='mt-[109px] px-[20px] py-[40px] border-t'>
        <p className='text-[18px] font-semibold leading-9'>서비스 동의 관리</p>
        <p className='text-[13px] mt-[8px] text-gray-500'>신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다.</p>
      </div>

      <div className='flex flex-row h-[44px] bg-gray-50'>
          <div className='basis-1/2 text-center text-[#d9044b] font-medium text-[13px] pt-2.5
          active:bg-[#fff3f8]'>
          <Link href="/myinfo/serviceagree">
            서비스 동의
            </Link>
            </div>

          <div className='basis-1/2 text-center text-[#d9044b] font-medium text-[13px] pt-2.5'>
          <Link href='/myinfo/serviceagree/clubagree'>
            클럽 동의
            </Link>
            </div>

    </div>
    {children}
  </div>
  )
}