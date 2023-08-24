import Logo from '@/components/ui/header/Logo'
import React from 'react'
import LoginForm from '@/components/pages/login/loginForm'

function Login() {
  return (
    <section className='flex flex-col items-center pt-20 gap-10'>
      <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'}></Logo>
      <LoginForm />
    </section>
  )
}

export default Login