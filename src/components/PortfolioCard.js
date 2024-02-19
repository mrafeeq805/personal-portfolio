import React from 'react'
import PortfolioTags from './PortfolioTags'

const PortfolioCard = ({data}) => {
  return (
    <div className='w-full rounded-xl shadow-lg shadow-gray-400'>
        <div className='w-full mb-3 relative'>
            <div className='flex gap-2 absolute top-3 p-2 flex-wrap'>
                {data.tags.map((item,index) => <PortfolioTags key={index} item={item}/> )}
            </div>
            
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
                <div className='flex gap-4'>
                    <a href={data.live} className='text-blue-500 text-sm underline'>
                        <span className=''>Live</span>
                    </a>
                    <a href={data.github} className='text-blue-500 text-sm underline'>
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard