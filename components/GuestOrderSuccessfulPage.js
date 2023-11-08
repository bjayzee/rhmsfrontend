import React from 'react'

const GuestOrderSuccessfulPage = () => {
  return (
    <div>
         <div className='font-bold m-5'>
           <p>Dear Olakunle</p>
         </div>

         <div className='font-bold m-5'>
           <h1>Ready to pick up your order?</h1>
           <h1>Here is the details for your order</h1>
         </div>

         <div className='font-bold m-5'>
           <h3>Pick up to be completed by: wed october 4</h3>
         </div>
         <div className='flex justify-between m-5'>
          <div>
          <img src="iphoneS.png" alt="iphoneS.png" />
          </div>
          <div >
            <p className='font-bold'> iPhone 15 512GB unlocked #2000</p>
            <p className='font-bold'>Sales Terms:</p>
            <p>Pick up at the store</p>
          </div>
         </div>
         <hr/>
         
         <div className='flex justify-between m-5 font-bold'>
           <p>Payment due:</p>
           <p>#1200</p>
           
         </div>
        <div className='pl-4 m-2'><p>To be paid before pick up</p></div>
         <hr/>
        
        <div className='font-bold m-5'>
          <p>Pick up details</p>
        </div>
        <div className='flex justify-between font-bold m-5' >
          <div>
            <h2>Pick up by:</h2>
            <p>Adekunle Adefokun</p>
          </div>
          <div>
            <h2>Contact information:</h2>
            <p>adefokun@live.com</p>
            <p>09087654321</p>
          </div>

        </div>
        <div className='flex justify-between font-bold m-5' >
          <div>
            <h2>Pick up store address:</h2>
            <p>72, Adebisi Popoola  </p>
            <p>Lekki Phase1, Lagos</p>
          </div>
          <div>
           
          </div>

        </div>
    </div>
  )
}

export default GuestOrderSuccessfulPage
