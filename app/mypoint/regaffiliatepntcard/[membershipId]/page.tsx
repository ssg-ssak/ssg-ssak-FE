'use client'
import React from 'react'
import MemberShipCard from '@/components/pages/mypoint/MemberShipCard'
import { usePathname } from 'next/navigation'

function MembershipCard() {
  const params=usePathname().split('/')[3];
  return (
    <MemberShipCard types={params}/>

    
  )
}

export default MembershipCard