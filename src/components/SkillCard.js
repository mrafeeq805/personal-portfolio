import React from 'react'

const SkillCard = ({data}) => {
  return (
    <div className='relative'>
        <div className='rounded-full h-24 w-24 shadow-md shadow-gray-400 p-4'>
            <img className='h-full w-full ' src={data.icon} alt='img'/>
        </div>
        <div className='bg-blue-100 h-max px-2 w-max absolute top-2 right-12 rounded-lg'>
            <span className='text-blue-500 text-sm'>{data.percentage}</span>
        </div>
    </div>
  )
}

export default SkillCard