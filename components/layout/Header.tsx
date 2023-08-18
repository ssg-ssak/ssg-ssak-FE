import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <header className='main_header'>
      <HeaderTop/>
      <HeaderBottom/>
    </header>
  )
}

export default Header