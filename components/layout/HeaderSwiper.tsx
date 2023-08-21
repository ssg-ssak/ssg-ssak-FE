import Link from 'next/link'
import React from 'react'


function HeaderSwiper() {
  

  // props로 던져주기
  return (
    <div className='py-4 m-0'>
      <nav>
        <ul className='flex gap-10 text-sm pt-2 justify-evenly'>
          <li className='flex'>
            <Link href="/ingevents">진행 이벤트</Link>
          </li>
          <li>
            <Link href="/endevents">종료 이벤트</Link>
          </li>
          <li>
            <Link href="/winevents">당첨 확인</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderSwiper