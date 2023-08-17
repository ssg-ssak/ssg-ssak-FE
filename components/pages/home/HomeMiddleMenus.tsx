import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { HomeMiddleMenuType } from '@/types/HomeMiddleMenuType'
import HomeMiddleMenusWrap from './HomeMiddleMenusWrap'
import { HomeMiddleMenuData } from '@/datas/HomeMiddleMenuData'

function HomeMiddleMenus() {
  return (
    <div className='main_menu mt-[-24px] mr-[20px] mb-[24px] ml-[20px] relative z-10 bg-white rounded-[8px] shadow-md'>
        {/* <h3 className='hidden'>메인메뉴</h3> */}
        <ul className='flex p-[10px] pl-[19px] items-center justify-between text-xs text-center w-full text-slate-700 gap-4'>
            {
                HomeMiddleMenuData.map((e:HomeMiddleMenuType)=>(
                    // <HomeMiddleMenusWrap
                    //     key={e.id}
                    //     url={e.url}
                    //     src={e.src}
                    //     alt={e.alt}
                    //     width={e.width}
                    //     height={e.height}
                    //     contents={e.contents}
                    // />
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
            
            {/* <li>
                <Link href="/">
                    <Image className='ml-[1px]'
                        src="data:image/png;base64,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"
                        alt="출석체크 로고"
                        width={45}
                        height={45}
                    ></Image>
                    출석체크
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className='ml-[1px]'
                        src="data:image/png;base64,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"
                        alt="럭키룰렛 로고"
                        width={45}
                        height={45}
                    ></Image>
                    럭키룰렛
                </Link>
            </li>
            <li>
                <Link className='' href="/">
                    <Image className='ml-[5px]'
                        src="https://s3-alpha-sig.figma.com/img/5208/411c/73b3ab5a7bf1f61e0ed587d6abf5c61b?Expires=1693180800&Signature=AuIdv4MIpnWaANfoTgcGjMLUW-UseAwBU35XQFopceRbvvw~egFTdrxbu4nsuvFj4w8Ug2uC0b2tjlPwLh~k4hyMGiUiDcdXNp~DPvTa7VlII8s36zh5Xwh~5isfKDQg~3koxI-smOMj-9sK--P2tjwo0ve285MEaW25q0bL2KPYmewLLtw7Ivk5t6hIZPH8X2icycchTSGYDG0tU-YwepHELNSiIlqRlEdqLStJDM307pDQhlQ6nmz759~x-KNBk4~eNg3s8-QyUhsv5MYBtWYriTGzq6dmXps~h~EySjhv41tIW3ab1ht5XUwDTbeDfgh9WttPUsDM9E4UiFfVkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="운세서비스 로고"
                        width={45}
                        height={45}
                    ></Image>
                    운세서비스
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className='mr-[2px]'
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU/SURBVHgB7Z1BbttGFIZ/Cga6JYpuujJ9grhA9qE33Ta9QK0bxAi6rpx9ATknUNIL1Nl2Y2YfIOoJSKEFuika7YoACSbvkTMCTZOiSM5QQ3I+4JkipITkr9+Pj8/DoQfLEEI8osW5DD+3VJFnKyORy7WMxPO8P2ERHo4MCfuEFqEMJaouImTC35LwbzE1WFyKJcUH0R8xxUp+seOFDtCnWPQsbhUxxSXFKcaCsEvgMlZiyIIL+wUuwqlsWILTDj8TwxE4T0xxCQNorTpoJwNarJBVEEMmophTpbKBJmbQBIn8jBbvMXyRmZBiLY/JDkSWi5divCyhgU6pQ2Sp4ndkFxpjJqEIu6SS1kJLke8oAkyDBB3EbpWjRdaPmJLITEARyWNvTGNHyw1F0NuTGBLcvAqbNq0aOVqmi1tMV2SGj/1WNLy4OdjRE8zJdSRokLObCB3DiVyEW7AXJPa27oMHpQ5ZSwZwFOGydnHIB2sdLbKroxs49nFFrn657wN7hZZ5mS+rp3zyOwROHeetL2hI6DvRktVqJXzfF/zfDCmCIEj3vQV3aCnypejA6enpYMQtBhukJZVNKK9C5AAdSzn6NUqXnx7/iiFx8u7ndEkaoAWcQs7KqpCqqoO/mQCOpvC5rNTVD4SWbr6Coy1XpOGD4qHM0Qs4ulDq6pP8inTzHAb57d93eP73G2w//Y9jEnz1NX759nv89M1jGIBd/TKfq4uOfgLDvPjnj6OLzCQf/8Pzv97AEA9cXRT6GobZ0AEyfFY/ZjDbz0a/8HvnuZ3QIhsqFcChC1/khp/lHT2HQzdP1Yu80CEcupmrF6nQLm0YY5c+lKOfwmGKkH+oOlr7uAxqzGC73e56Bwpbeh9qP4r7x1AHDxoJKV7McitaWS6XoA4ehgYbZLHQenGcmtijHMIv3qMnVFevqjvGbtps9vfP+TNxHMPkfmjmO3b08Gw3PB5xjrZq3FySJBgh5+zosQ9QtAGfhXZ/eDVP6ugADtPY52iuKLgi0BFnZ2ewBJc6esLnOrqXQlLRc/1qzX5ou1nIsR8ndE+w0LVDTh2d2Von9EirDvuEHikJ9zp41Lo1l+Ej7XU4R/fEmoW2au6hkZIKvYbDNJsZnZ1ZaGvSR5uqw6LqohTWWF2wOFebI+IfJ7mVEBYwwqojNbFydASHKdIhq7t7WKiL9QE9tEwn1r1LaDvpCSTfVHoFh24i9SIv9C0cunmtXty7/a2P9DGh1LFLG0yxH+3u+dbHdX6l6Gh2M4+1MubqCTk6yN8bPitsnK8Qnau786p4A/6DW5RNu3oijg6KQs9KdsCoq3lYrNyOscj3Pqp6J+o9A9x4JdNJVP1xlif5MNJosmXctIFx0EyCCpNWTowi3MwzbZiTm1+XvVE3Aw1PJRHCcQgRiXxR9aab6kcPtVP97B1AQ/8wQQ+3LY+Aa69mPqXakUpy9iuXq6u58WpmCGNqp2NjZG3N+drdHXCfe/2MfRw09k7W1j8iK18cGQkaFAoHOVoh3PykigQN55JuJDQj3LTG5qc1ZuQGQkwzjSRoITLT2NGKCaaRBH1PPc/IGvsC03A2DxloLTLTacQ/iy3LmzHX2XxsF57Gh990Qgz3sU1V8LFoe+BN6xxdhnCPcOoXkc3UG4vhodXFvUA7HIjhPNqJBV6IkjlFB4PIBF8JOxm+wEVEJvilsCOljE/gMugAQ5G5PBb9weJyKgtxBLRWHW2QB/4DshZsCH2o54RHFG+pgohwRI4udBGRTaYVUKgHsftyfd8D2JWovOQ+xFreMmINXwANxTHcPnJhHgAAAABJRU5ErkJggg=="
                        alt="영수증 로고"
                        width={45}
                        height={45}
                    ></Image>
                    영수증
                </Link>
            </li> */}
        </ul>
    </div>
  )
}

export default HomeMiddleMenus