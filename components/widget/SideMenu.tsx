'use client'

import React from 'react'
import styles from './SideMenu.module.css'
import Logo from '../ui/header/Logo'
import Link from 'next/link'
import './SideMenu.module.css'
import Image from 'next/image'

function SideMenu(props: {isOpened: Boolean, setIsOpened:React.Dispatch<React.SetStateAction<Boolean>>}) {
	
	const {isOpened, setIsOpened}=props
  
  return (
		<>
      {/* sidemenu 안에 div */}
      <div className={isOpened ? `${styles.sidemenuwrap} ${styles.open}` : `${styles.sidemenuwrap}` }>
        <div className={styles.lnb_header}>
          <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'} />
        </div>

        {/* 로그인 회원가입 버튼 div */}
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
        
        {/* 즐겨찾기 div */}
        <div className='lnb_favorite bg-[#fff9ea] relative pt-[26px] pb-[24px]'>
          <div className='lnb_favorit_list px-[10px]'>
            <div className='favorit_list_cnt flex'>
              <p className={styles.menu_box}>
                <Link className={styles.menu} href="/">
                  <Image
                  src="/images/point_image.png"
                  alt="포인트 내역"
                  width={40}
                  height={30}
                  ></Image>
                  포인트 내역
                </Link>
              </p>
              <p className={styles.menu_box}>
                <Link className={styles.menu} href="/">
                  <Image 
                  src="/images/point_pw_change.png"
                  alt="포인트 비밀번호 변경"
                  width={40}
                  height={30}
                  ></Image>
                  포인트 비밀번호 변경
                </Link>
              </p>
              <p className={styles.menu_box}>
                <Link className={styles.menu} href="/">
                  <Image
                    src="/images/smart_reciept.png"
                    alt="스마트 영수증"
                    width={40}
                    height={30}
                    ></Image>
                    스마트 영수증
                </Link>
              </p>
            </div>
          </div>
          <p className='select_txt_box pt-[18px] pb-[58px] h-[80px] mx-[24px] border-dashed border-[1px] border-[#f8b404] flex'>
            <button className='ico_btn ml-2 boder-solid border-[1px] left-[10px] border-[#f8b404] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
              <Image 
                src="/images/favorit_plus.png"
                alt="즐겨찾기 메뉴 선택"
                width={24}
                height={24}
              ></Image>
            </button>
            <span className='txt text-[11px] ml-[6px] leading-5 tracking-[-.5px] font-[500]'>
              <button className='txt_line0 text-[13px] font-[700] bg-[#f1d284]'>즐겨찾기 메뉴 선택</button>
              에서<br/>
              나만의 즐겨찾기 메뉴를 설정할 수 있어요!
            </span>
          </p>
        </div>

			</div>
      <div className={isOpened ? styles.overlay : ''} onClick={()=>setIsOpened(false)}>
			</div>
    </>
    
  )
}

export default SideMenu