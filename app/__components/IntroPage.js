import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

export default function IntroPage() {
    return (
        <div className="w-full bg-slate-400/10">
            <div className='h-nav w-[98%] md:w-[80%] max-w-[1300px] mx-auto flex items-center justify-between'>
                <div className="max-w-[650px] flex flex-col gap-6">
                    <div className="text-4xl font-bold">
                        <span className="text-yellow-500">User-Centric Excellence </span>:
                        <span className=""> Our App Development Services Tackles Your Pain Points</span>
                    </div>
                    <div className="font-medium text-gray-800/90">
                        Experience a Seamless Digital Journey with <span className="text-lime-600 font-bold">Desun</span> - Where Everyline of Code Resolves Your Challanges and <span className="text-yellow-500 font-bold">Elevates Your App Experience</span> to Unparalleled Heights
                    </div>
                    <ContactForm button={"Get consultation"}/>
                </div>
                <Image src={'/phone.png'} alt='img' height={500} width={500} className='max-h-[80vh] w-fit relative rotate-[-15deg]' />
            </div>
        </div>
    )
}
