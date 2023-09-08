'use client'
import React from 'react'
import MemberShipCard from '@/components/pages/mypoint/MemberShipCard'
import { usePathname } from 'next/navigation'

function MembershipCard() {
  const params=usePathname().split('/')[3];
  console.log(params);
  
  return (
    <MemberShipCard types={params}/>

    
  )
}

export default MembershipCard