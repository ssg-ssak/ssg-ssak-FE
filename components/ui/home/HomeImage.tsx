'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function HomeImage(props:{url:string, imgUrl:string, imgAlt:string}) {
    const {url,imgUrl,imgAlt}=props

  return (
    <div>
        <h3 className='hidden'>메인 비주얼 배너</h3>
        <div>
            <ul>
                <li>
                    <Link href={url}>
                        <Image
                        src={imgUrl}
                        alt={imgAlt}
                        width={500}
                        height={362}
                        >
                        </Image>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default HomeImage