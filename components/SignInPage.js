import Link from 'next/link'
import React from 'react'


const SignInPage = () => {
  return (
    <div>
        <div className='m-5 font-bold'>
            <h1>Sign in</h1>
        </div>
        <div className='pl-5'>
            <input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder='Email or Phone Number'
            />

            <input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder='Password'
            />
            <div className='font-bold '>
            <p  style={{ 
                color: '#187EB4', 
                marginRight:'10px'
                }}>Forgot Password?</p>
            </div>


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
           }}>
            <Link href="/checkoutPage">Sign In</Link> 
          </button>
          </div>
      
    </div>
  )
}

export default SignInPage
