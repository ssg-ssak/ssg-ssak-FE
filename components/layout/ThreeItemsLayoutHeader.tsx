import React from 'react'
import HeaderTop from './HeaderTop'
import EventHeaderBottom from './EventHeaderBottom'
import { HeaderBottomType } from '@/types/HeaderBottomType'


function Header({data}:{data:HeaderBottomType[]}) {
  return (
    <header className='main_header'>
      <HeaderTop/>
      <EventHeaderBottom data={data}/>
    </header>
  )
}

export default Header