import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className='pt-[76px]'>
      <div className='py-10 px-5'>
        <p className='text-[20px] leading-7 break-keep'>
          입력하신 정보로 가입된
          <strong>아이디</strong>는
          <br/>
          아래와 같습니다.
        </p>
      </div>
      <div className='pt-0 px-5 pb-[60px]'>
        <div className='mb-10'>
          <dl className='flex gap-3'>
            <dt>아이디</dt>
            <dd>sdfsdfsdf</dd>
          </dl>
        </div>
        <div>
          <Link className=' bg-linear_110 border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]' href={"/login"}>로그인</Link>
        </div>

      </div>
    </section>
  )
}

export default page