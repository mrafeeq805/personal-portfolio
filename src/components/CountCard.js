import React from 'react'

const CountCard = ({data}) => {
  return (
    <div className='py-12 border-2 flex flex-col justify-center items-center rounded-lg'>
        <span className='text-xl font-medium'>{data.count}</span>
        <span className='text-lg'>{data.title}</span>
    </div>
  )
}

export default CountCard