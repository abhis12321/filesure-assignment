import React from 'react'
import ContactForm from './ContactForm'

export default function DiscussProject() {
    return (
        <div className='w-full min-h-10 bg-gradient-to-r from-yellow-600 to-lime-600/80 text-white'>
            <div className='w-[98%] md:w-[80%] max-w-[1300px] mx-auto py-8 flex items-center justify-between'>
                <div className="flex flex-col gap-8">
                    <h2 className="max-w-[200px] text-3xl font-bold font-sans tracking-normal">Let's discuss Your Project</h2>
                    <p className="text-xs max-w-[400px]">Let;s figure out how to create an efective application, its cost and terms of its development</p>
                </div>
                <ContactForm button={"Discuss the project"}/>
            </div>
        </div>
    )
}
