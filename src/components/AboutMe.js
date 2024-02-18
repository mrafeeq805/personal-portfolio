import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-white p-4 rounded-xl -mt-16 z-10 absolute w-11/12 left-4 right-4'>
        <div className='border-2 bg-slate-50 rounded-xl p-4'>
            <span>Personal Details</span>
            <div></div>
            <div className='flex flex-col gap-2 mt-2'>
                <span className='text-sm text-gray-500'>Email: <span className='text-sm text-gray-400'>muhammedrafeeqvr805@gmail.com</span></span>
                <span className='text-sm text-gray-500'>Phone: <span className='text-sm text-gray-400'>+91 799402859</span></span>
                <span className='text-sm text-gray-500'>Place: <span className='text-sm text-gray-400'>Malappuram</span></span>
            </div>
            
        </div>
    </div>
  )
}

export default AboutMe