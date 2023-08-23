'use client'

import React from 'react'
import {usePathname, useRouter} from 'next/navigation'
import styles from './HeaderPathName.module.css'

function HeaderPathName(props :{pathname:string}) {
  const {pathname}=props
  const router=useRouter();


  const checkPathName=(pathname:String)=>{
    if (pathname==='/couponpage')return "쿠폰"
    if (pathname==='/login')return "로그인"
    if (pathname==='/benefit')return "마이혜택"
    if (pathname==='/ingevents') return "이벤트-진행 이벤트"
    if (pathname==='/ingevents/detail'||'/endevents/detail' || 'winevents/detail') return "이벤트"
    if (pathname==='/endevents') return "이벤트-종료 이벤트"
    if (pathname==='/winevents') return "이벤트-당첨 확인"
  }

  const backPage=()=>{
    router.back()
  }

  return (
    <>
    <div>
      <button className={styles.back_btn} onClick={backPage}>뒤로가기</button>
      <h2 className={styles.gnb_tit}>{checkPathName(pathname)}</h2>
    </div>
    
    </>
    
  )
}

export default HeaderPathName