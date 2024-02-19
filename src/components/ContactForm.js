import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full p-4'>
        <form className='w-full space-y-5'>
          <div className='md:flex md:gap-5'>
            <div className='w-full md:space-y-5'>
              <input className='border-2 rounded-xl p-2 px-4 w-full' placeholder='Your Name'/>
              <input className='border-2 rounded-xl p-2 px-4 w-full' placeholder='Your Email'/>
              <input className='border-2 rounded-xl p-2 px-4 w-full' placeholder='Your Subject'/>
            </div>
            <div className='w-full'>
              <textarea className='border-2 rounded-xl p-2 px-4 w-full min-h-44' placeholder='Your Message'/>
            </div>
          </div>
          
            
            <div className='flex justify-end'>
                <button className='bg-blue-500 rounded-lg p-2 text-white px-4'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm