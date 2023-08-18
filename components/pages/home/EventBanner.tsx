'use client'
import React from 'react'
import EventBannerWrap from './EventBannerWrap'
import { eventBannerType } from '@/types/eventType'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import './eventBanner.module.css';

export const EventBanner = ({data,h3_text}:{data:eventBannerType[], h3_text?:string}) => {
  return (
    <>
    <h3 className='hidden'>{h3_text??"title"}</h3>
    <div className='slider_wrap mb-[2px]'>
        <ul>
            <Swiper
                scrollbar={{
                    hide:true,
                }}
                modules={[Scrollbar]}
                className='mySwiper'>
    {
        data.map((event:eventBannerType)=>(
            <SwiperSlide
                key={event.id}
            >
                <EventBannerWrap
                url={event.url}
                imgUrl={event.imgUrl}
                imgAlt={event.imgAlt}
            />
            </SwiperSlide>
            
        ))
    }
            </Swiper>
        </ul>
    </div>
    </>
  )
}
