import TalbeForm from '@/components/pages/mypoint/TalbeForm'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function cardManage() {
  const cardPointLogo="after:ml-[7px] after:w-[27px] after:h-[25px] after:bg-[url('https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png')] after:bg-no-repeat after:bg-cover"
  
  
  return (
    <section className='pt-[106px]'>

        <div className='point_info_cardbox  p-6 bg-white'>
          {/* 총 몇건의 신세계포인트 정보 */}
          <p className='text-[14px] leading-6 mb-[15px] font-medium text-center'>
            <strong>총 3건의</strong> &nbsp;
            <span className='font-semibold'>신세계포인트 카드를 보유하고 있습니다.</span>
          </p>
          {/* 카드 정보 */}
          <div className='cardbox bg-linear_93 m-auto overflow-hidden font-semibold rounded-3xl text-[14px] leading-6 mb-[15px] h-full pb-[2px] shadow-md max-w-sm my-0 '>
            <div className='top_cnt flex items-center relative h-[40px] pr-[12px] pl-[20px] justify-between'>
              <h3 className='tit_img bg-[url("/images/mypoint/cardSinsegaeLogo.png")] w-[113px] h-[20px] bg-cover indent-[-999rem] mt-[1px]'>SHINSEGAE POINT</h3>
              <button className='btn_info w-14 h-6 bg-[url("/images/mypoint/barcodeImage.jpg")] bg-cover'>
                <span className='blind overflow-hidden border-0 absolute z-[-1px] w-[1px] h-[1px]'>신세계포인트 상세 안내</span>
              </button>
            </div>
            {/* 카드안에 바디 정보값 */}
            <div className='item_cnt relative bg-white rounded-[18px] m-h-[160px] h-full mx-[2px] px-[20px] pb-[1px] pt-[73px]'>
              <div className='card_num'>
                <p className='font-bold text-[19px]'>
                  9350
                  <span>-</span>
                  1200
                  <span>-</span>
                  1863
                  <span>-</span>
                  5388
                </p>
                <button className='border bg-white right-[20px] top-[70px] absolute w-9 h-7 rounded pb-[1px] border-[#bcbcbc] text-xs font-semibold'>복사</button>
              </div>

              <dl className='flex justify-between items-center pt-[20px] pb-[5px] leading-6 mb-[15px] '>
                <dt className='text-[13px] font-semibold leading-5'>사용 가능</dt>
                <dd className={`flex items-center text-[16px] leading-7 justify-center font-medium ${cardPointLogo}`}>
                  33
                  </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className='table_cnt0 p-4'>
          <TalbeForm types={"onlinecard"}/>
          <TalbeForm types={"제휴신용카드"}/>
          <TalbeForm types={"오프라인카드"}/>
        </div>

        {/* 신규 포인트카드 등록하기 버튼 && 임시 발급 카드 인증하기 버튼 && 포인트 비밀번호 변경하기 버튼 */}
        <div className='btn_box p-5 pt-0 pb-10'>
          <Link className=' bg-white border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]' 
          href="/mypoint/regPntCard">
          신규 포인트 카드 등록하기
          </Link>
          <Link className=' bg-white border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]'
          href="/spoint/tempcardcert">
          임시 발급 카드 인증하기
          </Link>
          <Link className=' bg-linear_110 border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]'
          href="/mypoint/chgpntpwdcert">
          포인트 비밀번호 변경하기
          </Link>
        </div>

        <div className='banner_list_cnt0 pt-10 px-5 pb-20 bg-[#f5f5f5]'>
          <p className='text-[17px] leading-7 mb-5'>
            다양한 신세계 포인트 <br />
            <strong className='font-semibold text-[#ea035c]'>제휴 신용카드의 혜택</strong>
            을 확인하세요!
          </p>
          <ul>
            <li>
              <Link href="/spoint/pointcard">
                <Image
                src={"/images/mypoint/pointMoveImage.jpg"}
                alt="SHINSEGAE POINT 다양한 카드로 즐기는 포인트 우대쇼핑 혜택, 신세계포인트 제휴신용카드 보기"
                width={770}
                height={650}></Image>
              </Link>
            </li>
          </ul>
        </div>

    </section>
  )
}

export default cardManage