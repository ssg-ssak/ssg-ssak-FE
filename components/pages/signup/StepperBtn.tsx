'use client'
import { SignupType } from '@/types/signup/SignupType'
import { useRouter } from 'next/navigation'
import React, { SetStateAction, useState } from 'react'

function StepperBtn({btnText, stepId, setStepId,signUpData,setSignUpData} : {btnText:string, stepId:number, setStepId:React.Dispatch<SetStateAction<number>> ,signUpData: SignupType, setSignUpData: React.Dispatch<React.SetStateAction<SignupType>>}) {
  const router=useRouter()

  // console.log(stepId);
  

  interface ErrorSignupType{
    userId : string, 
    userName : string,
    birth:string,
    userPassword : string,
    checkPassword :string,
    phoneNumber : string,
    postCode:string,
    address : string,
    detailaddress:string,
  }

  const handleSignupFetch= async ()=>{
    let errText:ErrorSignupType={
      userId : "", 
      userName : "",
      birth:"",
      userPassword : "",
      checkPassword :"",
      phoneNumber : "",
      postCode:"",
      address : "",
      detailaddress:"",
    }

    if (stepId===2){
        // 본인인증 error
      if(signUpData.userName === "" || signUpData.userName === undefined) errText.userName="이름을 입력해주세요"
      if(signUpData.birth === "" || signUpData.birth === undefined) errText.birth="생년월일을 입력해주세요"
      if(signUpData.phoneNumber === "" || signUpData.phoneNumber === undefined) errText.phoneNumber="핸드폰번호를 입력해주세요"
      if(errText.userName !== "" || errText.birth !== "" || errText.phoneNumber !==""){
        if(errText.userName !== ""){
          alert(errText.userName)
        }else if(errText.birth !== ""){
          alert(errText.birth)
        }else {
          alert(errText.phoneNumber)
        }
      }else{
        setStepId(stepId + 1)
      }
    }else if(stepId===4){
      if(signUpData.userId === "" || signUpData.userId === undefined) errText.userId="아이디를 입력해주세요"
      if(signUpData.userPassword === "" || signUpData.userPassword === undefined) errText.userPassword="비밀번호를 입력해주세요"
      if(signUpData.checkPassword !== signUpData.userPassword) errText.checkPassword="비밀번호가 다릅니다"
      if(signUpData.postCode === "" || signUpData.postCode === undefined) errText.postCode="주소를 입력해주세요"
      if(signUpData.detailaddress === "" || signUpData.detailaddress === undefined) errText.detailaddress="상세주소를 입력해주세요"
      if(errText.userId !== "" || errText.userPassword !== "" || errText.checkPassword !=="" || errText.postCode !=="" || errText.detailaddress !==""){
        if(errText.userId !== ""){
          alert(errText.userId)
        }else if(errText.userPassword !== ""){
          alert(errText.userPassword)
        }else if(errText.checkPassword !== "") {
          alert(errText.checkPassword)
        }else if(errText.postCode){
          alert(errText.postCode)
        }else if(errText.detailaddress){
          alert(errText.detailaddress)
        }
      }else{
        // fetch를 해야함 여기서
        setStepId(stepId + 1)
      }
    }

  }

  return (
    <div className='px-4'>
      <div
        className='bg-linear_110 border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]' 
        onClick={
          stepId===5 ? ()=>router.push('/login')
          :
          stepId===2 ? handleSignupFetch
          :
          stepId===4 ? handleSignupFetch
          :
          ()=>setStepId(stepId + 1)}
      >
        {btnText}
      </div>
    </div>
  )
}

export default StepperBtn