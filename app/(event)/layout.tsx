import HomeHeader from '@/components/layout/HomeHeader'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '신세계포인트',
  description: '신세계포인트 이용 저옵는 물론 쇼핑과 라이프 스타일 혜택까지 볼거리가 풍성한 신세계포인트 앱으로 일상에 신세계를 더해보세요.',
}

export const eventsLayoutData=[
  {
    id:1,
    event_name:"진행 이벤트",
    url:"/ingevents",
  },
  {
    id:2,
    event_name:"종료 이벤트",
    url:"endevents"
  },
  {
    id:3,
    event_name:"당첨 확인",
    url:"winevents"
  }
]


export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header data={eventsLayoutData}/>
        {children}
        <Footer/>
        </body>
        
    </html>
  )
}