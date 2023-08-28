import React from 'react'

function cardManage() {
  const cardPointLogo="after:ml-[7px] after:w-[27px] after:h-[25px] after:bg-[url('https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png')] after:bg-no-repeat after:bg-cover"
  
  
  return (
    <section className='pt-[106px]'>

        <div className='point_info_cardbox  p-6 bg-white'>
          {/* 총 몇건의 신세계포인트 정보 */}
          <p className='mb-4 text-[14px] font-medium text-center'>
            <strong>총 3건</strong>의 &nbsp;
            <span>신세계포인트 카드를 보유하고 있습니다.</span>
          </p>
          {/* 카드 정보 */}
          <div className='cardbox bg-linear_93 m-auto  overflow-hidden rounded-3xl h-full pb-[2px] shadow-md max-w-sm my-0 '>
            <div className='top_cnt flex items-center relative h-[40px] pr-[12px] pl-[20px] justify-between'>
              <h3 className='tit_img bg-[url("/images/mypoint/cardSinsegaeLogo.png")] w-[113px] h-[20px] bg-cover indent-[-999rem] mt-[1px]'>SHINSEGAE POINT</h3>
              <button className='btn_info w-14 h-6 bg-[url("/images/mypoint/barcodeImage.jpg")] bg-cover'>
                <span className='blind overflow-hidden border-0 absolute z-[-1px] w-[1px] h-[1px]'>신세계포인트 상세 안내</span>
              </button>
            </div>
            

            <div className='item_cnt relative bg-white rounded-[18px] m-h-[160px] h-full mx-[2px] px-[20px] pb-[10px] pt-[73px]'>
              
              <div className='card_num'>
                <p className='font-bold text-[19px]'>
                  9350
                  <span>-</span>
                  1200
                  <span>-</span>
                  1863
                  <span>-</span>
                  5388
                </p>
                <button className='border bg-white right-[20px] top-[70px] absolute w-9 h-7 rounded pb-[1px] border-[#bcbcbc] text-xs font-semibold'>복사</button>
              </div>

              <dl className='flex justify-between items-center pt-[10px] pb-[14px] '>
                <dt className='text-[13px] font-semibold leading-5'>사용 가능</dt>
                <dd className={`flex items-center text-[16px] leading-7 justify-center font-medium ${cardPointLogo}`}>13</dd>
              </dl>

            </div>

          </div>
        </div>


    </section>
  )
}

export default cardManage