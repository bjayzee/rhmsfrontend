import React from 'react'

const BuyNowPayLater = () => {
  return (
    <div>
        <div className='m-5 font-bold'>
            <p className=" text-2xl font-bold mt-10 my-custom-font   ">
                If you want it, you can have it with BNPL(Buy Now Pay Later).
            </p>

            <p> Get th latest iPhone and pay at the set pace</p>

            <p>Get finance from any of our partner</p>
        </div>
        <div className='flex font-bold mx-12 gap-12 text-red'>
            <div>
                <p>Clan Africa</p>
                <p>Keza</p>
                <p>Klump</p>
                <p>Payfi</p>
                <p>Zilla</p>
            </div>
            <div>
                <img src='iwatchy.png' width={100} height={100}/>
            </div>
        </div>

        <div className='m-5'>
            <p >Why choose BNPL?</p>
            <div className='ml-3'>
            <li>Stay Ahead of the Curve: Access the newest iPhones immediately
                and stay at the forefront of innovation.
            </li>
            <li>Flexible Payment Plan: Tailored payment plans that suit your financial
                comfort. Enjoy your iPhone while comfortably managing payments.
            </li>
            <li>No Compromises: No need to compromise on the model 
                you desire. Choose the Iphone that matches your lifestyle and perfection
            </li>
            <li>Hassle-Free Application: Simple, fast, and hassle-free
                application process to get you started on your iPhone journey
            </li>
            </div>
        </div>
    </div>
  )
}

export default BuyNowPayLater