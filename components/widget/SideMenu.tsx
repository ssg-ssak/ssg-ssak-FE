'use client'

import React from 'react'
import styles from './SideMenu.module.css'
import Logo from '../ui/header/Logo'
import Link from 'next/link'
import './SideMenu.module.css'

function SideMenu(props: {isOpened: Boolean, setIsOpened:React.Dispatch<React.SetStateAction<Boolean>>}) {
	
	const {isOpened, setIsOpened}=props
  
  return (
		<>
      {/* sidemenu 안에 div */}
      <div className={isOpened ? `${styles.sidemenuwrap} ${styles.open}` : `${styles.sidemenuwrap}` }>
        <div className={styles.lnb_header}>
          <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'} />
        </div>

        <div className={styles.lnb_top}>
          <div className={styles.top_cnt}>
            <div className={styles.app_btn_box}>
              <p className={styles.login_txt}>로그인해 주세요.</p>
            </div>
            <div className={styles.bnt_box}>
              <Link className={styles.btn_primary} href={"./login"}>로그인</Link>
              <Link className={styles.btn0} href={"./member/join"}>회원가입</Link>
            </div>
          </div>
        </div>
        
			</div>
      <div className={isOpened ? styles.overlay : ''} onClick={()=>setIsOpened(false)}>
			</div>
    </>
    
  )
}

export default SideMenu