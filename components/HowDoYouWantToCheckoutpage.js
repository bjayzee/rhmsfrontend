// import React from 'react'
// import Link from 'next/link';
// const HowDoYouWantToCheckoutPage = () => {
//   return (
//     <div>
//         <div className='text-xl font-bold pl-15 m-5'>
//             <h2>How do you want to checkout?</h2>
//         </div>
//         <div  className=" flex m-5    font-bold">
//           <button  
//            style={{ 
//            border: '2px solid #187EB4',
//            padding: '5px 35px',
//            borderRadius:'10px',
//            color: '#187EB4', 
//            margin:'10px'
//            }}>
//            <Link href='signin-page'>Sign in</Link>  
//           </button>

//           <button  
//              style={{ 
  
//                 border: '2px solid #187EB4',
//                 padding: '5px 30px',
//                 borderRadius:'10px',
//                 color: '#187EB4', 
//                 margin:'10px'
   
//               }}>
    
//                   <Link href="/checkoutPage">As a guest</Link>   
//              </button>

    
// </div>
      
//     </div>
//   )
// }

// export default HowDoYouWantToCheckoutPage



"use client";
import React from "react";
import Link from "next/link";

const HowDoYouWantToCheckoutPage = () => {
  return (
     <div className="h-80 px-5">
      <h2 className="font-bold py-10 text-[#000000] text-[20px]">How do you want to checkout?</h2>
      <div className="flex space-x-5 font-bold">
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] px-10 py-5 rounded-2xl flex items-center justify-center" href="/signin-page">Sign in</Link>
        <Link className="border-2 w-1/2 border-[#D3D3D3] text-[#187EB4] px-10 py-5 rounded-2xl flex items-center justify-center" href="/checkoutPage">As a guest</Link>
      </div> 
    </div>
  );
};

export default HowDoYouWantToCheckoutPage;
