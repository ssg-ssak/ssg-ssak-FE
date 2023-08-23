import WinEventImageWrap from '@/components/pages/event/WinEventImageWrap'
import { IngEventData } from '@/datas/ingEventData'
import { EventImageType } from '@/types/EventImageDataType'
import React from 'react'

function Winevent() {
  return (
    <section className='pt-[120px]'>
      
      {/* 이벤튼 li list */}
      <div className='pb-[60px]'>
        <ul>
            {
              IngEventData.map((e:EventImageType)=>(
                <li className='text-center relative' key={e.id} >
                  <WinEventImageWrap
                  linkurl={e.url}
                  src={e.imgUrl}
                  alt={e.alt}
                  title={e.title}
                  regdate={e.regdate}
                  />
                </li>
              ))
            }

        </ul>
      </div>
      
    </section>
  )
}

export default Winevent