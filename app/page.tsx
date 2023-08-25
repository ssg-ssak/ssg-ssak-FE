import HomeMiddleMenus from '@/components/pages/home/HomeMiddleMenus'
import { EventBanner } from '@/components/pages/home/EventBanner'
import { eventDatas } from '@/datas/home/eventData'
import { anotherEventData } from '@/datas/home/anotherEventData'

export default function Home() {
  return (
    <main className='mt-[100px]' >
      <EventBanner
        data={eventDatas}
        h3_text='Home Banner'
      />
      <HomeMiddleMenus />
      <EventBanner 
        data={anotherEventData}
      />
      <EventBanner 
        data={anotherEventData}
      />
      <EventBanner 
        data={anotherEventData}
      />
    </main>
  )

}
