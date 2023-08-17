import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function HomeImage() {
  return (
    <div>
        <h3 className='hidden'>메인 비주얼 배너</h3>
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <Image
                        src="https://s3-alpha-sig.figma.com/img/c968/e86a/f946135e8fc03e6c4e613aba98261b1f?Expires=1693180800&Signature=CkCmRuIe5s8zKtFIIK6WTSA4zRqFxyjG06ZMqxmLVFtk1urDzY~JgLBtHZ9m6osmXR4rVXci~a~aCZamPuV0befu88VLfr6K~oMxjS7aTpOij5uxKVT1R8Ad1N5Pg-MOoX0dBI2sBsQvsD8lOOm0IoAOc1vcvISTMsbcpmpLjkzXy30Gj6SdmtiuHqRzeL-DhnWj6VhESevure73IpgWN4Yx2dQjpF7CtXq1uxOeAbSTFEsLtQouT9FblKvx~44Y2-L4YAP1KyIVh5C4psjW4K-v3mTmZlBYNS~LNxdKpOFscDFRhHJb85VXP3CngMinKs8XWcHC8EA4Kd-M~RMfzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="신세계포인트 마케팅 수신 동의 경품 이벤트 "
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