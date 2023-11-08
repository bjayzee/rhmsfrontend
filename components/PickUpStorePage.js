import React from 'react'
import Link from 'next/link';

const PickUpStorePage = () => {
  return (
    <div>
       <div className='font-bold pl-5 m-5'>
            <h1>Pick up store:</h1>
        </div>
        <div className='font-bold pl-5 m-3'>
            <h2>We need your need your details to find you the nearest store</h2>
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

                placeholder='First Name'
            />

            <input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder='Last Name'
            />

<input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder='Put your address'
            />

<input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder='Email'
            />

<input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder='Phone Number'
            />
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
            <Link href="/guestOrderSuccessfulPage">CHECK STORE</Link> 
          </button>
          </div>
    </div>
  )
}

export default PickUpStorePage
