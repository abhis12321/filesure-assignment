import { faEnvelope, faFile, faLocationDot, faMobileButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-[98%] md:w-[80%] max-w-[1300px] mx-auto flex gap-10 p-4 my-8 flex-col justify-between bg-black/95 rounded-lg'>
            <div className="w-full flex items-center justify-center">
                <Image src={'/logo-2.png'} alt='img' height={50} width={200} className='rounded'/>
            </div>
            <div className="flex justify-between text-white">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                        <FontAwesomeIcon size='1x' icon={faMobileButton} className='h-[.9rem]' />
                        <div className="">Contact nums</div>
                    </div>
                    <div className="">+91 0000000000</div>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                        <FontAwesomeIcon size='1x' icon={faEnvelope} className='h-[.9rem]' />
                        <div className="">Gmail</div>
                    </div>
                    <div className="">demo@gmail.com</div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                        <FontAwesomeIcon size='1x' icon={faLocationDot} className='h-[.9rem]' />
                        <div className="">Adress</div>
                    </div>
                    <div className="">Mumbai, India</div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                        <FontAwesomeIcon size='1x' icon={faFile} className='h-[.9rem]' />
                        <div className="">Leave a request</div>
                    </div>
                    <div className="">Leave a request</div>
                </div>
            </div>
            <p className="text-xs text-gray-400 font-medium text-center mx-auto">We work throughout the world</p>
        </div>
    )
}
