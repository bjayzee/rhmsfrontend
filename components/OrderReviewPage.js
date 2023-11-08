import React from 'react'
import Link from 'next/link'

const OrderReviewPage = () => {
  return (
    <div>
        

         <div className='font-bold m-5'>
           <h1>Ready to place your order?</h1>
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
            <p>Payment after delivery</p>
          </div>
         </div>
         <hr/>
         
         <div className='flex justify-between m-5 font-bold'>
           <p>Delivery Details</p>
           <p>Delivers to:</p>
            <p>Adekunle Adefokun</p>        
            <p>72, Adebisi Popoola</p>   
            <p>Lekki phase 1</p>
            <p>Lagos</p>
         </div>
        <div className='pl-4 m-2'>
            <p>Contact Infomation:</p>
            <p>a*******gmail.com</p>
            <p>*******39</p>
            </div>
         <hr/>
        
        <div className='font-bold m-5'>
          <p>Pick up details</p>
          <p>Payment with:</p>
          <p>MasterCard****6678</p>
        </div>
        <div className='flex justify-between font-bold m-5' >
          <div>
            <h2>Payment charge</h2>
            
          </div>
          <div>
           
            <p>#3000</p>
          
          </div>

        </div>


        <div  className="  m-5   pl-10 font-bold">
          <button  
           style={{ 
           border: '2px solid #187EB4',
           padding: '5px 35px',
           borderRadius:'20px',
           color: 'white', 
           backgroundColor: '#187EB4', 
        //    margin:'15px'
           }}>
            <Link href="/card-info-page">MAKE PAYMENT</Link> 
            
          </button>

          
            <div className=' flex '>
         
            <p style={{ color: '#187EB4' }}>Terms and Conditions</p>
            <p className='mx-1'>Applied</p>
          </div>
          </div>
          <div className=' flex font-bold mb-5'>
         
            
          </div>
        
    </div>
  )
}

export default OrderReviewPage
