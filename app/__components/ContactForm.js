"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export default function ContactForm() {
    const [name , setName] = useState("My Name");
    const [mobileNo , setMobileNo] = useState("0000000000");
    const [businessName , setBusinessName] = useState("ABC Technologies PVT LTD");
    const [email , setEmail] = useState("example@gmail.com");

    return (
        <div className='max-w-[600px] bg-white px-6 py-4 rounded-xl flex gap-8 items-end'>

            <form className="flex flex-wrap items-center justify-between">
                <h3 className="font-bold text-gray-800 tracking-wider">Leave your contacts and we will call you back within 30 minutes</h3>
                <div className="w-[48%] min-w-[200px] flex flex-col border-b-[1px] border-gray-500/40 my-2">
                    <label htmlFor="" className="text-[12px] font-medium text-gray-700/60 font-sans">Full name</label>
                    <input type="text" className='outline-none text-sm py-1' value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div className="w-[48%] min-w-[200px] flex flex-col border-b-[1px] border-gray-500/40 my-2">
                    <label htmlFor="" className="text-[12px] font-medium text-gray-700/60 font-sans">Phone number</label>
                    <div className="flex gap-2 items-center justify-center text-sm w-full py-1">
                        {/* <Image /> */}
                        <div className=""> +{91} </div>
                        <input type="number" className='outline-none w-[80%]' value={mobileNo} onChange={e => setMobileNo(e.target.value)}/>
                    </div>
                </div>
                <div className="w-[48%] min-w-[200px] flex flex-col border-b-[1px] border-gray-500/40 my-2">
                    <label htmlFor="" className="text-[12px] font-medium text-gray-700/60 font-sans">Business name</label>
                    <input type="text" className='outline-none text-sm py-1' value={businessName} onChange={e => setBusinessName(e.target.value)}/>
                </div>
                <div className="w-[48%] min-w-[200px] flex flex-col border-b-[1px] border-gray-500/40 my-2">
                    <label htmlFor="" className="text-[12px] font-medium text-gray-700/60 font-sans">Business email</label>
                    <input type="email" className='outline-none text-sm py-1' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
            </form>
            <button className="py-2 px-6 my-2 bg-lime-600/70 hover:bg-lime-600 rounded-lg h-fit text-white text-xs">Get consultation</button>
        </div>
    )
}
