import React from 'react'
import HeaderTop from './HeaderTop'
import MypointHeaderBottom from './MypointHeaderBottom'
import { HeaderBottomType } from '@/types/HeaderBottomType'


function OverflowLayoutHeader({data}:{data:HeaderBottomType[]}) {
  return (
    <header className='main_header'>
      <HeaderTop/>
      <MypointHeaderBottom data={data}/>
    </header>
  )
}

export default OverflowLayoutHeader