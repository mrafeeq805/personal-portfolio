import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div className='rounded-xl p-6 shadow-sm shadow-gray-300 flex flex-col gap-3'>
        <div className=''>
            <img className='h-16' src={data.icon} alt='logo' />
        </div>
        <span className='text-lg font-medium text-gray-700'>{data.title}</span>
        <p className='text-gray-400'> {data.description}</p>
        <span className='text-blue-500'>Read More </span>
    </div>
  )
}

export default ServiceCard