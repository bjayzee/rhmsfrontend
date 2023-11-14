import React from 'react'

const DeliveryGuestOrderSuccessfulPage = () => {
  return (
    <div>
        <div className='font-bold  m-5'>
            <h1>Order Successfully Completed</h1>
        </div>
        <div className='font-bold m-5'>
           <p>Dear Olakunle</p>
         </div>
         <div className='m-5'>
            <p>Your ordr has been successfully completed ansd is on its way to you and our delivery team will contact you.
                Here are the details of your order:
            </p>
            <p>Non refundable Delevery fee of #3000 has been charged.</p>
            <li>
                Order Number: 2910383
            </li>
            <li>Oder  Date: 03/10/2023</li>
            <li>Shipping Address: 72, Adebisi Popoola Crescent,
                Lekki Phase 1
            </li>


         </div>
         <div className='m-5'>
            <h2 className='font-bold'>Order Summary:</h2>
            <p className='font-bold'>Item</p>
            <div className='flex justify-between'>
            <p>iPhone 15 512GB unlocked</p>
            <p>#12000</p>
            </div>
            <div className='flex justify-between'>
            <p>Amount due on delivery </p>
            <p>#12000</p>
            </div>
         </div>
         <div className='m-5'>
            <p className='font-bold'>You will receive a tracking number shortly to monitor the progress of your shippment.</p>
            <p>If you have any inquiries or concerns regarding your order, feel free to reach out to our customer support team at 
    
            </p>
            <p className='font-bold'> customer_support@rhms.com,0r on 09037422323</p>
           
         </div>
         <div className='font-bold m-5'>
         <p > Thank you for choosing RHMS</p>
         </div>

      
    </div>
  )
}

export default DeliveryGuestOrderSuccessfulPage
