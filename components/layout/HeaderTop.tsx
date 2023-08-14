'use client'
import React, { useState } from 'react'

import {usePathname} from 'next/navigation'
import Logo from '@/ui/header/Logo'

function HeaderTop() {
  const [isLogin, setIsLogin] =useState<Boolean>(false)
  const [isOpened, setIsOpened] =useState<Boolean>(false)
  const pathname = usePathname();

  return (
    <>
      {pathname==='/'
      ?
      <div>
      <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'}></Logo>
      HeaderTop
      </div>
      : "other componenet"}
      
    </>
    
  )
}

export default HeaderTop