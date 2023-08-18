import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { HomeMiddleMenuType } from '@/types/HomeMiddleMenuType'
import HomeMiddleMenusWrap from './HomeMiddleMenusWrap'
import { HomeMiddleMenuData } from '@/datas/HomeMiddleMenuData'

function HomeMiddleMenus() {
  return (
    <div className='main_menu mt-[-24px] mr-[20px] mb-[24px] ml-[20px] relative z-10  bg-white rounded-[8px] shadow-md'>
        {/* <h3 className='hidden'>메인메뉴</h3> */}
        <ul className='flex p-[10px] pl-[19px] items-center justify-between text-xs text-center w-full text-slate-700 gap-4'>
            {
                HomeMiddleMenuData.map((e:HomeMiddleMenuType)=>(
                    <li key={e.id}>
                        <Link href={e.url}>
                            <Image 
                                src={e.src}
                                alt={e.alt}
                                width={e.width}
                                height={e.height}
                            ></Image>
                            {e.contents}
                        </Link>
                    </li>
                ))
                
            }
            
            
        </ul>
    </div>
  )
}

export default HomeMiddleMenus