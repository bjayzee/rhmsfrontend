import Link from 'next/link';
import React from 'react';

export default function CheckoutPage() {
  return (
    <div>

     <div className='font-bold m-5'>
      <h2>Checkout:</h2>
    </div>

    <div className='font-bold m-5'>
      <h2>1 used iPhone 11 Pro Max 512GB unlocked pink</h2>
    </div>

    <div className='flex justify-between m-5'>
      <p>Price</p>
      <p>#2000</p>

      
        
     
    </div>

    <div className='font-bold m-5'>
      <h1>How would you like to get your order?</h1>
      
        
     
    </div>
    <div  className=" flex ">
      <button  
        style={{ 
           border: '2px solid #187EB4',
           padding: '5px 30px',
           borderRadius:'10px',
           color: '#187EB4', 
           margin:'10px'
           }}>
    I'w like it delivered
    <Link href="/deliveryInfoPage"> I'w pick it up</Link>
    </button>

    <button  
style={{ 
  
  border: '2px solid #187EB4',
   padding: '5px 30px',
   borderRadius:'10px',
   color: '#187EB4', 
   margin:'10px'
   
    }}>
    <Link href="/pickUpStorePage"> I'w pick it up</Link>
    
    </button>

    
</div>


<div className='flex justify-between m-5'>

<div className='font-bold'>
      <p>Please note: We charge #3000 </p>
      <p>upfront for delivery payment</p>
      
        
     
</div>
    <div>
      
    </div>
</div>





<div  className=" flex justify-center items-center">
<button  
style={{ 
  backgroundColor: '#187EB4',
   padding: '10px 35px',
   borderRadius:'20px',
   color: 'white', 
   margin:'30px' }}>
    ENTER ADDRESS
    </button>

    
</div>
    </div>
  );
}
