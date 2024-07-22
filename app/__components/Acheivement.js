import { faCreativeCommonsSampling } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faBowlFood, faBriefcase, faBuildingColumns, faBullseye, faCar, faCirclePlay, faGamepad, faGraduationCap, faHeartCirclePlus, faMobile, faOm, faPersonDigging, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import ProjectDetails from './ProjectDetails'

export default function Acheivement() {
    return (
        <div className='py-10 bg-gray-400/10'>
            <div className='w-[98%] md:w-[80%] max-w-[1300px] mx-auto'>
                <h2 className="max-w-[450px] text-3xl font-bold font-sans tracking-normal">Developed more than <span className="text-lime-600">100</span> projects in <span className="text-lime-600">30</span> industries</h2>
                <div className="w-full flex gap-8 flex-wrap items center justify-between py-5">
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-3 bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faMobile} className='h-[1.2rem]'/></div>
                        <div className="">Social media</div>
                    </div>
                    
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-2 bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faGraduationCap} className='h-[1.2rem]'/></div>
                        <div className="">Education</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="p-[10px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faBullseye} className='h-[1.2rem]'/></div>
                        <div className="">AR Technology</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="p-[10px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faCreativeCommonsSampling} className='h-[1.2rem]'/></div>
                        <div className="">Fitness and Sport</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-3 bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faCar} className='h-[1.2rem]'/></div>
                        <div className="">Auto Transport</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-2 bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faTv} className='h-[1.2rem]'/></div>
                        <div className="">TV series</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="p-[10px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faBuildingColumns} className='h-[1.2rem]'/></div>
                        <div className="">Bank</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="p-[10px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faHeartCirclePlus} className='h-[1.2rem]'/></div>
                        <div className="">Medicine, Health</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="p-[10px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faBriefcase} className='h-[1.2rem]'/></div>
                        <div className="">Startups</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-[9px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faPersonDigging} className='h-[1.2rem]'/></div>
                        <div className="">Construction</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-[11px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faBowlFood} className='h-[1.2rem]'/></div>
                        <div className="">Restaurant, Food delivery</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="p-[10px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faOm} className='h-[1.2rem]'/></div>
                        <div className="">Religion</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-2 bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faGamepad} className='h-[1.2rem]'/></div>
                        <div className="">Game projects</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="py-[10px] px-3 bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faBagShopping} className='h-[1.2rem]'/></div>
                        <div className="">Marketplaces</div>
                    </div>
                    <div className="w-full xs:w-[48%] sm:w-[30%] flex gap-4 items-center justify-start">
                        <div className="p-[10px] bg-white rounded-full text-yellow-600"><FontAwesomeIcon size='xs' icon={faCirclePlay} className='h-[1.2rem]'/></div>
                        <div className="">Online cources</div>
                    </div>

                </div>


                
                <h2 className="max-w-[450px] text-3xl font-bold font-sans tracking-normal pt-16 pb-4">Projects we are proud of</h2>
                <p className="font-medium text-sm">Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership</p>

                <div className="flex items-center justify-start gap-8 text-sm py-10">
                    <Link href={'/'} >Project 1</Link>
                    <Link href={'/'} >Project 2</Link>
                    <Link href={'/'} >Project 3</Link>
                    <Link href={'/'} >Project 4</Link>
                    <Link href={'/'} >Project 5</Link>
                </div>
                <ProjectDetails />
            </div>
        </div>
    )
}
