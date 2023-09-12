'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'


function mycoupon() {

  const pathname=usePathname()

  return (

  <>
    <div role="tablist" className='flex flex-row mt-[110px] h-[44px] basis-1/2 text-center text-[#505050] text-[14px]'>
      <LoginRedirectModal/>
      <div role="tab" className={pathname==='/benefits/mycoupon' ?`basis-1/2 text-center text-[14px] font-semibold text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
        <Link href="/benefits/mycoupon">
          사용가능 쿠폰 (0)
        </Link>
      </div>

      <div role="tab" className={pathname==='/benefits/endcoupon' ?`basis-1/2 text-center text-[14px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6 font-semibold` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
        <Link href='/benefits/endcoupon'>
          사용완료/기간만료 쿠폰 (0)
        </Link>
      </div>

  </div>

    <div className='px-[20px] pt-[10px] pb-[60px]'>
    <div className='flex justify-between h-[46px] border-b border-black'>
      <div>
        <button>
        <select className='text-[14px]'>
          <option value="deadline">마감임박</option>
          <option value="deadline">최신순</option>
        </select>
        </button>
      </div>
      <div className='text-[11px]'>
          더 많은 쿠폰 보기 {'>'}
      </div>
    </div>

    <li className='list-none flex flex-row w-[350px] border-b'>
      <div role='coupon_headline flex flex-col'>
        <div role='coupon_point_box'>할인</div>
        <div>이마트</div>
      </div>
      <div className='pl-[18px] w-[252px]'>
        <p className='text-[11px] text-[#767676]'>이마트24(일부 매장 제외)</p>
        <p className='pt-[1px] pb-[12px] font-semibold'>1만원 이상 구매 시 1천원 할인</p>
        <p className='text-[11px] text-[#767676]'>2023-08-01~2023-08-31 <span className='border-l pl-[7px] ml-[7px] text-[#C85208]'>1일 남음</span></p>
        <div className='flex justify-between pt-[12px] mt-[12px]'>
        <div>이마트</div>
        <div className='text-[11px]'>사용하기</div>
      </div>
      </div>

    </li>

  </div>

    </>
  )
}

export default mycoupon