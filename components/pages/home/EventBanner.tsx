import React from 'react'
import EventBannerWrap from './EventBannerWrap'
import { eventBannerType } from '@/types/eventType'

export const EventBanner = ({data,h3_text}:{data:eventBannerType[], h3_text?:string}) => {
  return (
    <>
    <h3 className='hidden'>{h3_text??"title"}</h3>
    <div className='slider_wrap'>
        <ul>
    {
        data.map((event:eventBannerType)=>(
            <EventBannerWrap
                key={event.id}
                url={event.url}
                imgUrl={event.imgUrl}
                imgAlt={event.imgAlt}
            />
        ))
    }
        </ul>
    </div>
    </>
  )
}
