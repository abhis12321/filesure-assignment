import { faMobile , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex items-center justify-between px-6 h-[4.5rem] shadow-[0_0_1px_gray] font-medium'>
        <div className="flex">
            <Image src={'/logo.png'} alt='logo' height={50} width={100} className='h-[3.5rem] w-fit' />
        </div>

        <div className="flex gap-8">
            <Link href={'/'} className='hover:scale-110 hover:text-indigo-600'>Services</Link>
            <Link href={'/'} className='hover:scale-110 hover:text-indigo-600'>Media</Link>
            <Link href={'/'} className='hover:scale-110 hover:text-indigo-600'>Cases</Link>
            <Link href={'/'} className='hover:scale-110 hover:text-indigo-600'>FAQ</Link>
            <Link href={'/'} className='hover:scale-110 hover:text-indigo-600'>Contacts</Link>
        </div>

        <div className="flex gap-8 text-lime-600 text-sm">
            <div className="hover:text-lime-400 cursor-default flex gap-3 items-center justify-center">
                <FontAwesomeIcon size='xs' icon={faMobile} className='h-[1.2rem]' />
                <div className="">+91 0000000000</div>
            </div>
            <div className="hover:text-lime-400 cursor-default flex gap-3 items-center justify-center">
            <FontAwesomeIcon size='xs' icon={faEnvelope} className='h-[1.2rem]' />
                <div className="">example@gmail.com</div>
            </div>
        </div>
    </div>
  )
}
