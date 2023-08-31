'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


function attend() {

  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <div>
        <Image
          src={`/images/benefits/attend.png`}
          alt='출석체크'
          width={390}
          height={447}>
        </Image>
      </div>
      <div role='chcheck_calendar_box'>
        <ul role='chcheck_calendar_space'>
        </ul>
      </div>
      <div>
      <Calendar onChange={onChange} value={value} />
      </div>

      <div>
        <Image
          src={`/images/benefits/attendterms.png`}
          alt='출석체크 방법'
          width={390}
          height={423}>
        </Image>
      </div>
    </>
  )
}

export default attend