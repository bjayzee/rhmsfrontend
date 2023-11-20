import React from 'react'

const BuyAccesories = () => {
  return (
    <div>
        <div >
            <p className=" text-2xl font-bold mt-10 my-custom-font m-5  ">
                A fresh approach to ccesories
            </p>

            <p className=" text-lg font-bold  my-custom-font m-5  ">Select accessory by category</p>

            <div className='flex justify-between mx-5 '>
                <p >iPhone</p>
                <p className='pr-40'>Apple watch</p>
            </div>
            <div className='flex justify-between mx-5 '>
                <p className=''>Mac Book</p>
                <p className='pr-40'>iPad</p>
                
            </div>
            <p className='font-bold m-5'>Featured Accessories</p>
            <div className='flex '>
            <div className='m-5 border-color-gray shadow '>
            <div className='flex justify-center mt-3'>
               <img src='watch.png' width={100} height={100}/>
               </div>

                <div className='m-5'>
                <p className='font-bold'>Apple Watch</p>
                <p className='pl-5'>$604</p>
                <button 
                style={{  
                    paddingRight: '5px ',
                    background: '#187EB4' ,
                     color:'white',
                     borderRadius:'5px',
                     margin:'6px',
                     padding:'4px'
                    }}
                >BUY NOW</button>
                <p className='pl-3'>See details</p>
                </div>
            </div>

            <div className='m-5 border-color-gray shadow '>
               <div className='flex justify-center mt-3'>
               <img src='watch.png' width={100} height={100}/>
               </div>

                <div className='m-5'>
                <p className='font-bold '>Apple Watch</p>
                <p className='pl-5'>$604</p>
                <button 
                style={{  
                    paddingRight: '5px ',
                    background: '#187EB4' ,
                     color:'white',
                     borderRadius:'5px',
                     margin:'6px',
                     padding:'4px'
                    }}
                >BUY NOW</button>
                <p className='pl-3'>See details</p>
                </div>
            </div>
            </div>

            <div className='flex '>
            <div className='m-5 border-color-gray shadow '>
            <div className='flex justify-center mt-3'>
               <img src='Mac Card.png' width={100} height={100}/>
               </div>

                <div className='m-5'>
                <p className='font-bold'>Mac mini case</p>
                <p className='pl-5'>$604</p>
                <button 
                style={{  
                    paddingRight: '5px ',
                    background: '#187EB4' ,
                     color:'white',
                     borderRadius:'5px',
                     margin:'6px',
                     padding:'4px'
                    }}
                >BUY NOW</button>
                <p className='pl-3'>See details</p>
                </div>
            </div>

            <div className='m-5 border-color-gray shadow '>
               <div className='flex justify-center mt-3'>
               <img src='iwatchy.png' width={100} height={100}/>
               </div>

                <div className='m-5'>
                <p className='font-bold'>Apple Watch</p>
                <p className='pl-5'>$604</p>
                <button 
                style={{  
                    paddingRight: '5px ',
                    background: '#187EB4' ,
                     color:'white',
                     borderRadius:'5px',
                     margin:'6px',
                     padding:'4px'
                    }}
                >BUY NOW</button>
                <p className='pl-3'>See details</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default BuyAccesories