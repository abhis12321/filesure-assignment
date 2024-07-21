import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function DevelopmentCycle() {
    return (
        <div className='py-10'>
            <div className="w-full [background:url('/planet.png')] bg-contain h-[140px] border-y-[1px] border-gray-300" />
            <div className="w-[98%] md:w-[80%] max-w-[1300px] mx-auto flex justify-between py-10">
                <div className="flex flex-col gap-4 max-w-[500px]">
                    <h2 className="text-3xl font-bold font-sans tracking-normal">Full development cycle</h2>
                    <p className="text-[10px] font-semibold py-2">We use proved technologies</p>
                    
                    <h2 className="text-[1rem] font-bold font-sans tracking-normal text-gray-800">Web</h2>
                    <div className="text-sm tracking-wide font-medium text-gray-700">
                        PHP / Javascrip / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / Go lang / django / Python 
                    </div>
                    
                    <h2 className="text-[1rem] font-bold font-sans tracking-normal text-gray-800">Mobile</h2>
                    <div className="text-sm tracking-wide font-medium text-gray-700">
                        Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation 
                    </div>
                    
                </div>

                <div className="flex flex-col gap-4">
                    <Link href={'/'} className='w-fit flex items-center justify-center hover:underline text-gray-950/65 font-medium hover:text-gray-950'>iOS development <FontAwesomeIcon size='xs' icon={faArrowRight} className='h-[1rem] text-lime-600/50' /></Link>
                    <Link href={'/'} className='w-fit flex items-center justify-center hover:underline text-gray-950/65 font-medium hover:text-gray-950'>Android development <FontAwesomeIcon size='xs' icon={faArrowRight} className='h-[1rem] text-lime-600/50' /></Link>
                    <Link href={'/'} className='w-fit flex items-center justify-center hover:underline text-gray-950/65 font-medium hover:text-gray-950'>Web development <FontAwesomeIcon size='xs' icon={faArrowRight} className='h-[1rem] text-lime-600/50' /></Link>
                    <Link href={'/'} className='w-fit flex items-center justify-center hover:underline text-gray-950/65 font-medium hover:text-gray-950'>UI/UX design <FontAwesomeIcon size='xs' icon={faArrowRight} className='h-[1rem] text-lime-600/50' /></Link>
                    <Link href={'/'} className='w-fit flex items-center justify-center hover:underline text-gray-950/65 font-medium hover:text-gray-950'>Testing <FontAwesomeIcon size='xs' icon={faArrowRight} className='h-[1rem] text-lime-600/50' /></Link>
                    <Link href={'/'} className='w-fit flex items-center justify-center hover:underline text-gray-950/65 font-medium hover:text-gray-950'>Launch <FontAwesomeIcon size='xs' icon={faArrowRight} className='h-[1rem] text-lime-600/50' /></Link>
                    <Link href={'/'} className='w-fit flex items-center justify-center hover:underline text-gray-950/65 font-medium hover:text-gray-950'>IT consulting <FontAwesomeIcon size='xs' icon={faArrowRight} className='h-[1rem] text-lime-600/50' /></Link>
                </div>
            </div>
        </div>
    )
}
