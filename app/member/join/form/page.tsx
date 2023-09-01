import SnsAcceptCert from '@/components/ui/cert/SnsAcceptCert'
import Linearbutton from '@/components/ui/button/Linearbutton'
import React from 'react'
import SignUp from '@/components/pages/signup/Signup'

function Form() {
  const iafter="after:bg-[url('/images/signup/ilogo.png')] after:bg-[98%_auto]"

  return (
    <section className='pt-[56px]'>
      <div className='py-10 px-5'>
        <div className='relative'>
          <ol className='flex relative mb-4'>
            <li className='bg-[#ff8843] bg-cover relative rounded-[50%] w-5 h-5 mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px]  ${iafter}`}>현재 1단계</i>
            </li>
            <li className='relatve bg-[#ff8843] bg-cover rounded-[50%] w-[20px] h-[20px] mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px] ${iafter}`}>현재 2단계</i>
            </li>
            <li className='relatve bg-[url("/images/signup/libackground.png")] bg-cover rounded-[50%] w-[20px] h-[20px] mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px] ${iafter}`}>현재 3단계</i>
            </li>
            <li className='relatve bg-[#e8e8e8] rounded-[50%] w-[20px] h-[20px] mr-[10px]'>
              <span className='indent-[-999rem] text-[0px]'>1</span>
              <i className={`overflow-hidden absolute z-[-1px] w-[1px] h-[1px] ${iafter}`}>현재 4단계</i>
            </li>
          </ol>
          <p className='text-[22px] leading-8 font-semibold'>정보입력</p>
          <p className='text-[12px] leading-5 mt-2 text-[#767676]'>필수 정보를 정확하게 입력해주세요.</p>
        </div>
      </div>

      <div className='px-6 pb-10'>
        {/* 아이디 입력칸 */}
        <div>
          <p className='text-[14px] font-semibold'>아이디
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-[80%]'>
              <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="text" placeholder='영문,숫자 6~20자리 입력해주세요.'/>
            </div>
            <button className='rounded-lg w-20 h-11 text-center border mt-[10px] text-[13px] font-semibold border-[#EAEAEA]'>중복확인</button>
          </div>
        </div>
        
        {/* 비밀번호 입력칸 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>비밀번호
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-full'>
              <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="text" placeholder='영문,숫자 6~20자리 입력해주세요.'/>
            </div>
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>비밀번호 확인
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-full'>
              <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={8} maxLength={20} type="text" placeholder='대/소문자,숫자,특수문자 중 3가지 이상을 조합하여 8~20자리 입력해주세요.'/>
            </div>
          </div>
        </div>

        {/* 이름 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>이름
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-full '>
              <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' maxLength={20} type="text" placeholder='이름을 입력해주세요.'/>
            </div>
          </div>
        </div>

        {/* 휴대폰번호 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>휴대폰번호
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px]  h-[48px] rounded-lg w-full'>
              <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' placeholder='휴대폰번호를 입력해주세요.'  maxLength={20} type="text" />
            </div>
          </div>
        </div>

        {/* 주소입력 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>자택주소
          <span className='text-red-500'>*</span>
          </p>
          <SignUp/>
          <div className=' mt-2 border-[2px]  h-[48px] rounded-lg w-full'>
            <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' placeholder='상세주소' type="text" />
          </div>
        </div>
      </div>

      <SnsAcceptCert/>
      <Linearbutton contents='확인' url="/member/join/success"/>
    </section>
  )
}

export default Form