import React from 'react'
import Link from 'next/link';
const HowDoYouWantToCheckoutPage = () => {
  return (
    <div>
        <div className='font-bold pl-20 m-5'>
            <h2>How do you want to checkout?</h2>
        </div>
        <div  className=" flex m-5   pl-10 font-bold">
          <button  
           style={{ 
           border: '2px solid #187EB4',
           padding: '5px 35px',
           borderRadius:'10px',
           color: '#187EB4', 
           margin:'10px'
           }}>
           <Link href='signin-page'>Sign in</Link>  
          </button>

          <button  
             style={{ 
  
                border: '2px solid #187EB4',
                padding: '5px 30px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
   
              }}>
    
                  <Link href="/checkoutPage">As a guest</Link>   
             </button>

    
</div>
      
    </div>
  )
}

export default HowDoYouWantToCheckoutPage
