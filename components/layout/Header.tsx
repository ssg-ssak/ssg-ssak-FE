import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderSwiper from './HeaderSwiper'


export interface eventsLayoutType{
  id:number,
  event_name:string,
  url:string
}

function Header({data}:{data:eventsLayoutType[]}) {
  return (
    <header className='main_header'>
      <HeaderTop/>
      <HeaderSwiper data={data}/>
    </header>
  )
}

export default Header