'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react';

function HeaderUserStatus() {
  const [point,setPoint]=useState<number>(-1);
  const token=useSession().data?.user["token"];
  // console.log(token);

  

  useEffect(()=>{
    const getFetch = async () => {
      try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/point/possible`,{
            method:'GET',
            headers:{
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response=>response.json())
          .then(data=>{
            // console.log(data);
            setPoint(data.possiblePoint)
          })

      } catch (error) {
          console.log('point/possible 에러나면 이쪽으로');
          
      }
    }
    getFetch();
  },[token])
  return (
    <>
      <div className='flex gap-1'>
        <Image
        src="/images/home/homebarcode.png"
        alt="바코드이미지"
        width={27}
        height={15}
        ></Image>
        {point}
        <Image
        src="https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png"
        alt="포인트로고이미지"
        width={25}
        height={22}
        ></Image>
      </div>
      
      
    </>
  )
}

export default HeaderUserStatus