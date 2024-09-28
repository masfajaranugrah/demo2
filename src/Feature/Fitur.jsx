import React from 'react'
import { IoTrendingUpOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrMultimedia } from "react-icons/gr";

const Fitur = () => {
  return (
    <div>
        <section className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="services">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div> 

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                                <IoTrendingUpOutline className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Grow Your Business</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right py-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <IoTrendingUpOutline className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                        <FaMoneyBillWave className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Drive More Sales</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right py-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <FaMoneyBillWave className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                            <BiWorld className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Handled By Expert</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right my-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <BiWorld className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                            <FaUsers className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Discussion For Idea</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right py-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <FaUsers className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                            < MdWeb className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Web Design</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right py-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <MdWeb className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                            <  FaNetworkWired   className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Network Security</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right py-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <FaNetworkWired className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                            <GrMultimedia className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Social Media</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right py-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <GrMultimedia className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 

                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-[#2a52c3] text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                            <MdOutlineDesignServices className="size-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <a href="" className="title text-lg font-semibold hover:text-[#2a52c3]">Design & Branding</a>
                            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <a href="" className="text-[#2a52c3]">Read More <i className="fa-solid fa-arrow-right py-10"></i></a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                        <MdOutlineDesignServices className=" size-48 text-[#2a52c3] opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div> 
                </div> 
            </div> 
        </section>
    </div>
  )
}

export default Fitur
