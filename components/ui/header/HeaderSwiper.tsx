import { HeaderBottomType } from '@/types/HeaderBottomType'
import Link from 'next/link'
import React from 'react'



function HeaderSwiper({data}:{data:HeaderBottomType[]}) {
  

  // props로 던져주기
  return (
    <div className='!sticky m-0'>
      <nav>
        <ul className='flex text-sm justify-evenly'>
          {
            data.map((event:HeaderBottomType)=>(
              <li className='w-1/3 py-6 text-center' key={event.id}>
                <Link href={event.url}>{event.layout_name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default HeaderSwiper

