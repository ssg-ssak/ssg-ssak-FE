'use client'
import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import { usePathname } from 'next/navigation';
import { eventsLayoutData } from '@/datas/eventLayoutData';
import EventHeaderBottom from './EventHeaderBottom';
import { MypointLayoutData } from '@/datas/MypointLayoutData';
import MypointHeaderBottom from './MypointHeaderBottom';

function Header() {
  const pathname=usePathname().split('/')[1];
  // console.log(pathname);
  
  return (
    <header className='main_header'>
      <HeaderTop/>
      {
        pathname==="" 
          ? <HeaderBottom/>     //true 홈 헤더 바텀 가져오기
          : pathname==="event"  //false일때는 pathname이 event 인가? 다시 3항 연산자

            ? <EventHeaderBottom data={eventsLayoutData}/>  //true 이면 eventbottom가져오고
            : pathname==="mypoint"        // false이면 pathname이 mypoint냐?

              ? <MypointHeaderBottom data={MypointLayoutData}/>  //true 이면 mypointbottom가져오고
              : null        //false이면 null
      }
      
    </header>
  )
}

export default Header