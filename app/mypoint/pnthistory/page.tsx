import React from 'react'
import SortRadio from '@/components/pages/mypoint/SortRadio'
import { pointList } from '@/datas/mypoint/pointListData'
import { pointListType } from '@/types/mypoint/pointListType'

async function pntHistory() {
  const cardPointLogo="after:ml-[7px] after:w-[33px] after:h-[30px] after:bg-[url('https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png')] after:bg-no-repeat after:bg-cover"
  const receiptsEventLogo="before:bg-[url('/images/mypoint/receiptEventLogo.png')] before:absolute before:left-6 before:mt-[-20px] before:bg-no-repeat before:w-10 before:h-10 before:bg-cover before:top-1/2"
  const filterImage="after:w-[20px] after:h-[19px] after:bg-[url('/images/mypoint/filterImage.png')] after:bg-cover after:bg-no-repeat after:inline-block"

  const plusLogo='before:bg-[url("/images/mypoint/plusLogo.jpg")] before:bg-auto before:bg-center before:bg-[length:7px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  const minusLogo='before:bg-[url("/images/mypoint/minusLogo.jpg")] before:bg-auto before:bg-center before:bg-[length:16px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  
  // const res= await fetch("http://10.10.10.185:8000/api/v1/point/list")
  // const data= res.json();
  // console.log(data);
  

  return (
    <section className='pt-[106px]'>
      {/* 포인트 카드 형식 */}
      {/* TODO: 카드 형식을 component로 만들어야됨 */}
      <div className='point_info_cardbox  p-6 bg-white'>
        <div className='cardbox bg-linear_93 m-auto  overflow-hidden rounded-3xl h-full pb-[2px] shadow-md max-w-sm my-0 '>
          <div className='top_cnt flex items-center relative h-[40px] pr-[12px] pl-[20px] justify-between'>
            <h3 className='tit_img bg-[url("/images/mypoint/cardSinsegaeLogo.png")] w-[113px] h-[20px] bg-cover indent-[-999rem] mt-[1px]'>SHINSEGAE POINT</h3>
            <button className='btn_info w-4 h-4 bg-[url("/images/mypoint/cardInfoLogo.png")] bg-cover'>
              <span className='blind overflow-hidden border-0 absolute z-[-1px] w-[1px] h-[1px]'>신세계포인트 상세 안내</span>
            </button>
          </div>
          <div className='item_cnt relative bg-white rounded-[18px] m-h-[160px] h-full mx-[2px] px-[20px] pb-[20px]'>
            <dl className='flex justify-between items-center pt-[24px] pb-[14px] '>
              <dt className='text-[13px] font-semibold leading-5'>사용 가능</dt>
              <dd className={`flex items-center text-[24px] leading-7 font-bold ${cardPointLogo}`}>13</dd>
            </dl>
            <dl className='flex mt-[3px] justify-between'>
              <dt className='grow-[1.3] shrink text-xs font-normal'>적립 예정</dt>
              <dd className='grow-[3.7] shrink text-[13px] font-bold text-right'>0P</dd>
            </dl>
            <dl className='flex mt-[3px] pb-0 '>
              <dt className='grow-[1.3] shrink text-xs font-normal text-left'>소멸 예정</dt>
              <dd className='grow-[3.7] shrink text-[13px] font-bold text-right'>
                <span className='flex text-left justify-between'> <em className='text-[11px] leading-5 font-normal'>2023-09-01</em> <em >0P</em> </span>
                <span className='flex text-left justify-between'> <em className='text-[11px] leading-5 font-normal'>2023-10-01</em> <em>0P</em> </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* 신세계포인트 영수증 한 번에 모아보기 배너 */}
      <div className='collect_receipts_banner bg-[#fcebf1] h-[65px] relative'>
        <div className={`in_box pt-[12px] pl-[65px] my-0 mx-6 ${receiptsEventLogo} `}>
          <p className='text-[13px] font-semibold text-[#d9044b]'>내가 어디서 뭘 샀더라</p>
          <button className='text-xs font-semibold'>신세계포인트 영수증 한 번에 모아보기 {">"}</button>
        </div>
      </div>

      {/* 포인트 내역 리스트 */}
      <div className='point_list_box px-5 pt-[25px] pb-[60px]'>
        <SortRadio types={"mypoint"}/>

        <div className='class_sch flex py-[14px] pr-[6px] items-center justify-between'>
          <div className='sort_select mr-[5px]'>
            <select className='z-[2px] h-[30px] pr-8 pl-[6px] text-[13px]' title="영수증 조회 기간 선택">
              <option value="7">1주일</option>
              <option value="1">1개월</option>
              <option value="3">3개월</option>
              <option value="6">6개월</option>
            </select>
          </div>
          <div className='term text-[12px] from-neutral-400 pr-10'>
            <p>2023-07-25 ~ 2023-08-25</p>
          </div>
          <button className='relative'>
            <span className={`top-0 h-0 font-[1px] left-[-999rem] indent-[-999em] overflow-hidden ${filterImage}`}></span>
          </button>
        </div>
      
        <div className='point_wrap'>
          {/* 포인트 내역 총 적립과 사용 */}
          <div className='point_total flex items-center bg-[#f8f8f8] h-9 px-2'>
            <p className={`mr-4 text-[#ea035c] text-[13px] font-semibold align-top ${plusLogo}`}>
              <span>적립</span>
              <span>32P</span>
            </p>
            <p className={`mr-4 text-[13px] font-semibold align-top ${minusLogo}`}>
              <span>사용</span>
              <span>0P</span>
            </p>
          </div>
          
          <ul className='point_history pr-[5px] pl-2'>
            {
              pointList.map((p:pointListType)=>(
                <li key={p.id} className='flex border-b items-center relative flex-wrap min-h-[74px]'>
                  <p className={`w-[90px] text-[#ea035c] text-sm font-semibold ${plusLogo}` }>
                    {p.point}P
                    <span className='block text-[11px] font-normal pl-[23px] pt-[2px]'>{p.type}</span>
                  </p>
                  <p className='flex flex-1 flex-wrap items-center text-[14px] leading-6 px-2 font-semibold'>
                    {p.store} <br/>
                    
                      {
                        p.sub_type &&
                        <span className='text-[11px] pt-1 leading-3 text-[#767676] w-full'>
                          {p.sub_type}
                        </span>
                      }
                    
                  </p>
                  <div className='absolute top-4 right-[5px]'>
                    <p className='text-[11px] leading-5 text-[#767676] min-w-[62px]'>{p.date}</p>
                    {
                      p.type==="결재적립"?
                      <button className='text-[12px] text-[#767676] mt-2'>영수증 보기 {">"}</button>
                      :null
                    }                    
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </section>
    
  )
}

export default pntHistory