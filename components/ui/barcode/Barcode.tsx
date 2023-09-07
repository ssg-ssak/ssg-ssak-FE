import React from 'react'


function Barcode(props:{barcodenumber:string}) {
  const barcodenumber=props.barcodenumber
  var Barcode1 = require('react-barcode');


  return (
    <div className='p-2 '>
      <Barcode1 
      value={barcodenumber} 
      format={"CODE128"} 
      width={2.63} 
      height={48} 
      fontOptions={"bold"} 
      displyValue={true} 
      textAlign={"right"} 
      fontSize={13} 
      margin={9}
      ></Barcode1>
    </div>
  )
}

export default Barcode