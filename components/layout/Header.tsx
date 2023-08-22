import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderSwiper from '../ui/header/HeaderSwiper'
import { HeaderBottomType } from '@/types/HeaderBottomType'


function Header({data}:{data:HeaderBottomType[]}) {
  return (
    <header className='main_header'>
      <HeaderTop/>
      <HeaderSwiper data={data}/>
    </header>
  )
}

export default Header