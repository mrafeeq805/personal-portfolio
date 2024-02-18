import React from 'react'
import { contactDetails } from '../utils/constants'
import ContactCard from './ContactCard'

const ContactSection = () => {
    return (
        <div className='p-4'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-medium '>Contact Me</h1>
                <p className='text-gray-400 mt-3'>Obviously I'am a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
            </div>
            <div className='my-5 grid grid-cols-1 gap-5'>
                {contactDetails.map((item,index)=><ContactCard key={index} data={item}/>)}
            </div>
            
        </div>
    )
}

export default ContactSection