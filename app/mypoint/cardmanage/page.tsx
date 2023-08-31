import TalbeForm from '@/components/pages/mypoint/TalbeForm'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Card from '@/components/pages/mypoint/Card'

function cardManage() {
  
  return (
    <section className='pt-[106px]'>

        <div className='point_info_cardbox  p-6 bg-white'>
          {/* 총 몇건의 신세계포인트 정보 */}
          <Card types={"cardmanage"}/>
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