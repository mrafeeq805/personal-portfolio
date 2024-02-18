import React from 'react'

const PortfolioCard = ({data}) => {
  return (
    <div className='w-full rounded-xl shadow-lg shadow-gray-400'>
        <div className='w-full mb-3'>
            <img className='w-full' src={data.thumbnail} alt='thumb'/>
        </div>
        <div className='flex flex-col gap-2 px-4'>
            <span className='text-xl font-medium'>{data.title}</span>
            <span className='text-gray-400'>{data.description}</span>
            <div className='flex justify-between mb-4 mt-2'>
                <div className='flex gap-2'>
                    <span class="material-symbols-outlined text-gray-500">
                        calendar_today
                    </span>
                    <span className='text-gray-400 text-sm'>{data.date}</span>
                </div>
                <div>
                    <span className='text-gray-400 text-sm'>Read More</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard