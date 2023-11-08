"use client"; 

import Link from 'next/link';
import React, { useState } from 'react';

const DeliveryInfoPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
       <div className='font-bold pl-5 m-5'>
            <h1>Where should we complete your order:</h1>
        </div>
        <div className='font-bold pl-5 m-3'>
            <h2>Check and use save address below</h2>
        </div>

        <div className='flex justify-between m-5'>
            <div>
                <p>Delivers to:</p>
                <p>Adekunle Adefokun</p>
                <p>72, Adebisi Popoola</p>
                <p>Lekki, phase 1</p>
                <p>Lagos</p>
            </div>
            <div className='pt-20 w-100 h-100'>
                <input type='checkbox'
                style={{ width: '8rem', height: '2rem' }}
                 onChange={handleCheckboxChange}
                />
            </div>
        </div>
        <div className='mx-7 font-bold'>
            <h1 className='justify-center pl-20'>OR</h1>
            <h2>Enter you name, address and contact</h2>
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

                placeholder='Street Address'
            />

<input
             style={{ 
                border: '2px solid #187EB4',
                padding: '8px 80px',
                borderRadius:'10px',
                color: '#187EB4', 
                margin:'10px'
                }}

                placeholder=' House number'
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

                placeholder='City'
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

                placeholder='State'
            />
                </div>
            </div>

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
           }}
           id="myCheckbox"
          checked={isChecked}
           disabled={!isChecked}
           >
            <Link href="/order-review-page">BOOK APPOINTMENT</Link> 
         
          </button>
          </div>
    </div>
  )
}

export default DeliveryInfoPage
