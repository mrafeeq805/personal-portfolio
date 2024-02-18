import React from 'react'

const ContactCard = ({data}) => {
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center'>
        <span className='text-4xl material-symbols-outlined'>{data.icon}</span>
        <span className='text-xl font-medium'>{data.title}</span>
        <span className='text-gray-400 text-center'>{data.description}</span>
        <span className='text-blue-500'>{data.info}</span>
    </div>
  )
}

export default ContactCard