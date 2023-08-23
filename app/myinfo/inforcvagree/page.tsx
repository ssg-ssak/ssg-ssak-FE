import Link from 'next/link'
import React from 'react'

function page() {
  return (
  <div className='mt-[105px] font-sans'>
        <div className='px-[20px] py-[40px]'>
          <strong className='text-xl text-[#ea035c] font-bold'>
            나에게 딱 알맞는 정보
          <span className='text-black'>
            를 원한다면-
          </span>
          </strong>
      <h1 className='text-sm pt-[8px]'>
          광고정보 수신동의를 하시면 신세계포인트의
          <br />
          다양한 혜택과 소식을 받으실 수 있습니다.
      </h1>
        </div>

      <div className='px-[20px] pb-[40px]'>
        <h1 className='border-b border-black pb-[12px] font-bold'>
          등록된 연락처를 확인하세요.
        </h1>
      <h1 className='text-[13px] pt-[16px] pb-[16px]'>
        휴대폰 번호
        <br />
        010-1234-1234
      </h1>
      <h1 className='text-[13px] pb-[16px]'>
        이메일
        <br />
        jskim4695@naver.com
      </h1>
      <h1 className='text-[13px]'>
        주소
        <br />
        부산 강서구 신호산단1로,*****
      </h1>
        </div>

    <div className='px-[24px] py-[20px] mx-[20px] border rounded-[8px] shadow-[0_3px_8px_rgba(0,0,0,.08)]'>
      <strong className='text-[14px]'>
        연락처 정보 변경이 필요하시나요?
      </strong>
      <div className='text-[13px]'>
          회원정보 수정 메뉴에서 변경하실 수 있습니다.
      </div>
      <br />
      <Link href="/info" className='text-[14px]'>
      회원정보 수정
      </Link>
      </div>

      <div className='px-[20px] py-[40px]'>
        <div className='mb-[22px]'>
        <label className='pt-[1px]'>
        <input className='w-[22px] h-[22px] appearance-none'
        id ="checkbox1"
        type ="checkbox" />
        <span className='text-[11px] pl-[1px]'>[선택]혜택제공 및 분석을 위한 개인정보 제공 및 이용 동의</span>
        </label>
        </div>
        <div>
        <label className='pt-[1px]'>
        <input className='w-[22px] h-[22px]'
        id ="checkbox2"
        type ="checkbox" />
        <span className='text-[11px] pl-[1px]'>[선택]이마트/신세계 공동 개인정보 수집 및 이용 동의</span>
        </label>
        </div>
        <div className='mt-[8px] ml-[11px] pt-[8px] pb-[8px] pl-[20px] border-l border-black'>
          <div className='text-[14px] mb-[16px]'>
            신세계포인트 광고정보 수신동의
          </div>
          <div>
            <input type="checkbox" />
            <label className='text-[11px]'>전체동의</label>
            <br />
            <div className='flex mt-[10px]'>
              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>이메일</label>
              </div>
              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>문자</label>
              </div>
              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>MD</label>
              </div>
              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>TD</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-[12px] px-[20px]'>
        당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함), 제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
        <br />
        ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다.
      </div>

      <div className='px-[20px] py-[40px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인
          </button>
        </div>
      </div>

      <div className='pt-[32px] pb-[80px] px-[20px]'>
        <h3 className='mb-[14px]'>[유의사항]</h3>
        <li className='text-[12px] pl-[7px]'>
        광고정보 수신거부와 관계없이 회원 및 서비스 정책 변경, 주문/배송 안내, 법적 의무사항 등 안내성 고지 사항은 정상 발송됩니다.
        </li>
        <li className='text-[12px] pl-[7px] mt-[4px]'>
        광고정보 수신거부 전 예약 발송된 광고 메시지가 있는 경우 약 1-2일 동안 발송될 수 있습니다.
        </li>
      </div>
  </div>
  )
}

export default page