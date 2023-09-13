import Link from 'next/link'
import React from 'react'

function Blackbutton(props:{contents:string, url:string}) {
  const {contents,url}=props;

  return (
    <Link className=' bg-[#ea035c] text-white border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]' 
      href={url}>
      {contents}
    </Link>
  )
}

export default Blackbutton