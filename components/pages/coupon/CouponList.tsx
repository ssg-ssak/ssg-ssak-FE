import React from 'react'
import CouponListWrap from './CouponListWrap'

function CouponList() {
  return (
    <>
      <div className='coupon_list_wrap p-5 pt-6'>
        {/* 정렬div */}
        <div className='coupon_search flex justify-between border h-[40px] w-full border-white border-b-black'>
          <div>
            <select className='text-[14px] font-semibold' name="쿠폰 정렬" id="couponsort">
              <option value="end">마감임박</option>
              <option value="new">최신순</option>
            </select>
          </div>
          <div className='text-[14px] font-semibold flex'>
            <p className='pr-2'>전체다운</p>
            <p className='bg-[url("/images/coupon/downloadlogo.png")] bg-no-repeat bg-[19px_auto] pr-5'></p>
          </div>
        </div>

        {/* 쿠폰 list div */}
        <CouponListWrap/>
      </div>
    </>
  )
}

export default CouponList