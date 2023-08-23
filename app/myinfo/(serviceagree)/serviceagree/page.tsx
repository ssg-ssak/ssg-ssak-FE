import React from 'react'
import Link from 'next/link'


function page() {


  return (
    <div className='mt-[105px] mb-40'>

      <div className='px-[20px] py-[40px]'>
        <p className='text-[18px] font-semibold leading-9'>서비스 동의 관리</p>
        <p className='text-[13px] mt-[8px] text-gray-500'>신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다.</p>
      </div>

      <div className='flex flex-row h-[44px] bg-gray-50'>
        <Link className='basis-1/2' href='./serviceagree'>
          <div className='text-center text-[#d9044b] font-medium text-sm pt-2.5'>서비스 동의</div>
        </Link>
        <Link className='basis-1/2' href='./clubagree'>
          <div className='text-center text-[#d9044b] font-medium text-sm pt-2.5'>클럽 동의</div>
        </Link>
        </div>

      <div className='px-[20px] pt-[40px] pb-[8px] font-medium'>
        <strong>신세계포인트 제휴사간 통합 서비스</strong>
      </div>


      <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-sm'>
            [선택] 신세계포인트↔SSG.COM 옴니버스를 위한 개인정보 제공 동의
          </p>
          <div className='mt-[4px] text-xs text-gray-500'>
          내용보기 {'>'}
          </div>
        </div>
        <div className='toggle_btn ml-[10px] relative'>
          <input id="check01" type="checkbox" className='absolute w-20 h-9  z-[-1] left-0 top-0'/>
          <label htmlFor="check01"> </label>
        </div>
      </div>

      <div className='px-[20px] py-[6px] text-[11px] text-gray-500 bg-[#f5f5f5]'>
          변경일:2023년 08월 21일
      </div>
        <div className='pt-[40px] pl-[20px] pb-[10px] font-medium'> 
          <strong>사이트 이용 약관 동의</strong>
        </div>
        <div className='container flex flex-1 flex-wrap justify-between px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
          <div className='flex line-'>
            <div className='continer flex-col items-center leading-6'>
              <p className='text-[14px]'>이마트 사이트 이용 약관 <br /> emart.com</p>
              <p className='mt-[4px] text-xs text-gray-500'>내용보기{' >'}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page