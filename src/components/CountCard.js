import React from 'react'

const CountCard = ({data}) => {
  return (
    <div className='py-12 border-2 flex flex-col justify-center items-center rounded-lg'>
        <span className='text-xl font-medium md:text-2xl'>{data.count}</span>
        <span className='text-lg md:text-xl'>{data.title}</span>
    </div>
  )
}

export default CountCard