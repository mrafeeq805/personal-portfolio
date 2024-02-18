import React from 'react'
import { portfolioDetails } from '../utils/constants'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-medium '>My Works & Portfolio</h1>
            <p className='text-gray-400 mt-3'>Obviously I'am a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
        </div>
        <div className='my-5 grid grid-cols- gap-4'>
            {portfolioDetails.map((item,index)=><PortfolioCard key={index} data={item}/>)}
        </div>
        <div className='w-full flex items-center justify-center'>
            <button className='bg-blue-500 text-white rounded-lg p-2 px-6 flex'>
                
                <span className='text-white'>See More</span>
                <span class="material-symbols-outlined text-white">
                    chevron_right
                </span>
            </button>
        </div>
        
    </div>
  )
}

export default Portfolio