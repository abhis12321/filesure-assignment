import Image from 'next/image'
import React from 'react'

export default function TeamInfo() {
    return (
        <div className='py-12 bg-gray-400/10'>
            <div className='w-[98%] md:w-[80%] max-w-[1300px] mx-auto flex justify-between'>
                <div className="md:w-[48%] flex flex-col justify-between  gap-10 py-4">
                    <h2 className="text-3xl font-bold font-sans tracking-wide">Our team</h2>

                    <p className="text-sm font-semibold text-gray-800">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>

                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="text-4xl font-extrabold">28</div>
                            <div className="text-gray-400 text-sm font-semibold">team members</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-4xl font-extrabold">+100</div>
                            <div className="text-gray-400 text-sm font-semibold">projects</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-4xl font-extrabold">7 years</div>
                            <div className="text-gray-400 text-sm font-semibold">in IT sphere</div>
                        </div>
                    </div>
                    
                    <p className="text-sm font-semibold text-gray-800">All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</p>
                </div>
                <Image src={'/team.png'} alt='img' height={400} width={600} className='' />
            </div>
        </div>
    )
}
