import React from 'react'
import Link from 'next/link'
const CardInfoPage = () => {
  return (
    <div>
        <div className='font-bold m-5'>
            <h1>Enter  your card information:</h1>
        </div>
        <div>
        <input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder='Debit Card Number'
            />
            <div className='flex mr-2'>
                <div>
                <input
             style={{ 
                border: '2px solid #187EB4',
                padding: '6px ',
                
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'1px'
                }}

                placeholder='Expiration MM/YY'
            />
                </div>
                <div>
                <input
             style={{ 
                border: '2px solid #187EB4',
                padding: '6px ',
                
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'1px'
               
                }}

                placeholder='CVV'
            />
                </div>
            </div>
        </div>

        <div className=' font-bold m-5'>
            <h1>Pay with cash transfer:</h1>
            <div className=' flex my-3 '>
             <p>Account Number: </p>
              <p> 0094765247 </p>
            </div>
            <div className=' flex '>
             <p>Account Name: </p>
              <p> RHMS Limited </p>
             </div>
        </div>
        <div className='font-bold m-5'>
            <h1>Screenshot and upload receipt</h1>
        </div>
        <div>

        </div>

        <div  className=" flex m-5   pl-10 font-bold">

        
<button  
 style={{ 
 border: '2px solid #187EB4',
 padding: '5px 35px',
 borderRadius:'20px',
 color: 'white', 
 backgroundColor: '#187EB4', 
 margin:'10px'
 }}
 

 >
  <Link href="/delivery-order-successfully-completed">PLACE ORDER</Link> 

</button>
</div>
      
    </div>
  )
}

export default CardInfoPage
