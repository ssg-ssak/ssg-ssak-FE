'use client'
import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import { usePathname } from 'next/navigation';

function Header() {
  const pathname=usePathname();
  return (
    <header className='main_header'>
      <HeaderTop/>
      {
        pathname==="/login"?null:<HeaderBottom/>
      }
      
    </header>
  )
}

export default Header