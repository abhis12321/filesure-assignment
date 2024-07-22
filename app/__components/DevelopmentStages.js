import Image from 'next/image'
import React from 'react'

export default function DevelopmentStages() {
    return (
        <div className='py-10 bg-gradient-to-tr to-gray-400/10'>
            <h2 className="w-[98%] md:w-[80%] max-w-[1300px] mx-auto text-3xl font-bold font-sans tracking-normal">Application Development Stages</h2>
            <div className='w-[98%] md:w-[80%] max-w-[1300px] mx-auto flex gap-10 items-center justify-between'>
                <div className="flex flex-col gap-8 py-8">
                    <div className="max-w-[400px] flex flex-col bg-white rounded-lg shadow-[0_0_2px_gray] p-6 gap-6">
                        <div className="flex items-center justify-start gap-6">
                            <Image src={'/analysis.png'} alt='img' height={50} width={50} className='' />
                            <h2 className="text-xl font-semibold">Analysis</h2>
                        </div>
                        <p className="text-sm text-gray-800">We craft precise technical specs, aligning with your business, technology and user requirements</p>
                    </div>

                    <div className="max-w-[400px] flex flex-col bg-white rounded-lg shadow-[0_0_2px_gray] p-6 gap-6">
                        <div className="flex items-center justify-start gap-6">
                            <Image src={'/design.png'} alt='img' height={50} width={50} className='' />
                            <h2 className="text-xl font-semibold">Design</h2>
                        </div>
                        <p className="text-sm text-gray-800">We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
                    </div>
                    <div className="max-w-[400px] flex flex-col bg-white rounded-lg shadow-[0_0_2px_gray] p-6 gap-6">
                        <div className="flex items-center justify-start gap-6">
                            <Image src={'/coding.png'} alt='img' height={50} width={50} className='' />
                            <h2 className="text-xl font-semibold">Development</h2>
                        </div>
                        <p className="text-sm text-gray-800">We create an extensible architecture, write clean and stable code. We integrate with customer technologies.</p>
                    </div>

                </div>

                <Image src={'/phone.png'} alt='phone' height={600} width={400} className='h-[550px] w-auto rounded-2xl' />

                <div className="flex flex-col gap-8 py-8">
                    <div className="max-w-[400px] flex flex-col bg-white rounded-lg shadow-[0_0_2px_gray] p-6 gap-6">
                        <div className="flex items-center justify-start gap-6">
                            <Image src={'/testing.png'} alt='img' height={50} width={50} className='' />
                            <h2 className="text-xl font-semibold">Testing</h2>
                        </div>
                        <p className="text-sm text-gray-800">We carry out functional testing and do bug fixes. We Adapt the application to different phone resolutions.</p>
                    </div>

                    <div className="max-w-[400px] flex flex-col bg-white rounded-lg shadow-[0_0_2px_gray] p-6 gap-6">
                        <div className="flex items-center justify-start gap-6">
                            <Image src={'/launching.png'} alt='img' height={50} width={50} className='' />
                            <h2 className="text-xl font-semibold">Launching</h2>
                        </div>
                        <p className="text-sm text-gray-800">We design the application page and publish it in the App Store and Google Play stores</p>
                    </div>
                    <div className="max-w-[400px] flex flex-col bg-white rounded-lg shadow-[0_0_2px_gray] p-6 gap-6">
                        <div className="flex items-center justify-start gap-6">
                            <Image src={'/support.png'} alt='img' height={50} width={50} className='' />
                            <h2 className="text-xl font-semibold">Support</h2>
                        </div>
                        <p className="text-sm text-gray-800">We monitor the stability of the application, update it for new devices and versions of the iOS and Android.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
