import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function ProjectDetails({project}) {
  return (
    <div className='w-full flex justify-between'>
      <div className="md:w-[55%] flex flex-col gap-8">
        <h2 className="text-3xl font-bold font-sans tracking-normal pt-16 pb-4">Project 1</h2>
        <p className="text-gray-800">Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels</p>

        <p className="text-sm text-gray-500 font-semibold">Business anallysis / iOS / Android / UI/UX Design</p>

        <div className="flex items-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
                <FontAwesomeIcon size='xs' icon={faLocationDot} className='h-[.9rem] text-yellow-500' />
                <div className="text-sm font-medium">India</div>
            </div>
            <div className="flex items-center gap-2">
                <FontAwesomeIcon size='xs' icon={faBriefcase} className='h-[.8rem] text-yellow-500' />
                <div className="text-sm font-medium">Real Estate</div>
            </div>
        </div>

        <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2">
                <div className="font-extrabold text-lg text-black tracking-wider">400%</div>
                <div className="text-xs text-gray-400">User Growth</div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-extrabold text-lg text-black tracking-wider">+200 000</div>
                <div className="text-xs text-gray-400">Active Users</div>
            </div>
        </div>
        
        <div className="flex gap-8">
            <Image src={'/apple-app-store.png'} alt='img' height={50} width={200} className='h-[3rem] rounded-lg' />
            <Image src={'/google-app-store.png'} alt='img' height={50} width={200} className='h-[3rem] rounded-lg' />
        </div>

      </div>
      <Image src={'/project.png'} alt='preview' height={500} width={500} className='' />
    </div>
  )
}
