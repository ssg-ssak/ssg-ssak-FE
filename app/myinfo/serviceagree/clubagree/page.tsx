import React from 'react'

function clubagree() {
  return (
    <div>

      <div>
      <p className='text-[10.5px] mt-[20px] ml-[20px] text-[#eb0000]'>
        ※ 각 클럽 서비스별 하단 확인 버튼을 눌러야 변경 내용이 저장됩니다.
      </p>
      </div>


        <div className='px-[20px] pt-[40px] pb-[8px] font-medium '>
        <strong>맘키즈 클럽</strong>
      </div>

      <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-[13px] '>
            [선택] 맘키즈 클럽 헤택을 위한 부가 정보 수집 및 이용 동의
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

      <div className='mx-[20px] border-b border-black h-[48px] bg-[#fbfbfb] content-center'>
          <button className='text-sm font-bold px-[110px] py-3.5'>
          나의 자녀 정보 열기
          </button>
      </div>

      <div>
      <ul className='pt-[16px] pb-[24px] px-[20px] text-[#767676]'>
        <li className='pl-[7px] text-[9px]'>맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px]'>자녀 정보는 최대 2명까지 입력하실 수 있습니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px]'>맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.
          <br /> (온 오프라인 옴니동의 시 SSG.COM 이용 가능)
        </li>
      </ul>
      </div>
      
      <div  className='btn_box px-[20px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인
          </button>
        </div>
      </div>

      <div>
      <div className='px-[20px] pt-[40px] pb-[8px] font-medium '>
        <strong>차량 서비스</strong>
      </div>

      <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-sm'>
            [선택] 차량 서비스 헤택을 위한 부가 정보 수집 및 이용 동의
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

      <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-sm'>
            [선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용 동의
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

      <div className='mx-[20px] border-b border-black h-[48px] bg-[#fbfbfb] content-center'>
          <button className='text-sm font-bold px-[110px] py-3.5'>
          나의 차량 정보 열기
          </button>
      </div>
      
      <div>
      <ul className='pt-[16px] pb-[24px] px-[20px] text-[#767676]'>
        <li className='pl-[7px] text-[9px]'>이마트, 신세계백화점 방문 시 구매 내역에 따라 등록하신 차량의 주차비가 자동으로 정산됩니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px]'>-자녀 정보는 최대 2명까지 입력하실 수 있습니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px]'>-맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.
          <br /> (온 오프라인 옴니동의 시 SSG.COM 이용 가능)
        </li>
      </ul>
      </div>
      
      </div>
      

    </div>
  )
}

export default clubagree