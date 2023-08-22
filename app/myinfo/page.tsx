import React from 'react'

function page() {
  return (
    <div className='mt-40 mb-50'>
      <div className='px-[20px] py-[40px]'>
        <h1 className='text-[20px] font-medium'>서비스 동의 관리</h1>
        <div className='text-[14px] mt-[8px]'>신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다.</div>
      </div>
      <div className='flex flex-row justify-stretch h-[44px]'>
        <div className='basis-1/2 text-center text-[#d9044b] font-medium text-sm pt-2.5'>서비스 동의</div>
        <div className='basis-1/2 text-center text-[#d9044b] font-medium text-sm pt-2.5'>클럽 동의</div>
      </div>
      <div className='px-[20px] pt-[40px] pb-[20px] font-medium block'>
        <strong>신세계포인트 제휴사간 통합 서비스</strong>
      </div>
      <div className='flex px-[20px] py-[16px]'>
        <div className='flex-col w-[284px]'>
          <div className='h-[48px] text-sm'>
            [선택] 신세계포인트↔SSG.COM 옴니버스를 위한 개인정보 제공 동의
          </div>
        <div className='mt-[4px] text-xs'>
          내용보기
        </div>
        </div>
      </div>
      <div className='px-[20px] py-[6px] text-[4px] bg-[#f5f5f5]'>
          변경일:2023년 08월 21일
        </div>
        <div className='px-[20px] pt-[40px] pb-[20px] font-medium block'>
        <strong>사이트 이용 약관 동의</strong>
      </div>
    <div className='flex flex-row w-[157.2px]'>
      <div className='flex-col h-[48px]'>
      <div>이마트 사이트 이용 약관 <br /> emart.com</div>
      <div>내용보기</div>
      </div>
      <div></div>
      <div></div>
    </div>
    </div>
  )
}

export default page