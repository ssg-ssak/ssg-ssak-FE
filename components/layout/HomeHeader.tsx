'use client'
import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import { usePathname } from 'next/navigation';
import { eventsLayoutData } from '@/datas/eventLayoutData'
import EventHeaderBottom from './EventHeaderBottom';


function Header() {
  const pathname = usePathname().split('/')[1];
  return (
    <header className='main_header'>
      <HeaderTop/>
      {
        pathname==="" ? <HeaderBottom/> : pathname==="event" ? <EventHeaderBottom data={eventsLayoutData}/>: null
      }
      
    </header>
  )
}

export default Header