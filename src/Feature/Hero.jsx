import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
       <section className="relative table w-full py-36 lg:py-64 overflow-hidden" id="home">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-[url('@/assets/images/Hero.jpg')] bg-no-repeat bg-center bg-cover"></div>
            </div>
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <div className="text-center">
                        <a href="#!" data-type="youtube" data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white  text-teal-500 dark:text-white">
<FaPlay className='text-[#2a52c3]'/>                        
</a>
                    </div>

                    <h4 className="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5">We Collaboration Easy & Fast</h4>
                
                    <p className="text-white/70 text-lg max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                
                    <div className="relative mt-8">
                        <a href="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#2a52c3] text-white">Get Started</a>
                    </div>
                </div>
            </div> 
       </section> 

  


        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <a href="#about">
                    <i ></i>
                    <FaArrowDown className="mdi mdi-arrow-down absolute top-0 start-0 p-4 end-0 text-center inline-flex 
                    items-center justify-center rounded-full bg-white  h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"/>
                    </a>
            </div>

            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div> 
    </div>
  )
}

export default Hero
 