import React from 'react'
import { workDetails } from '../utils/constants'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-medium '>Work Participation</h1>
            <p className='text-gray-400 mt-3'>Obviously I'am a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
            <button className='rounded-lg px-6 p-2 bg-blue-500'>
              <span className='text-white'>See More</span>
              <span></span>
            </button>
        </div>
        <div className='my-5 grid gap-2'>
            {workDetails.map((item,index)=><ExperienceCard key={index} data={item}/>)}
        </div>
    </div>
  )
}

export default Experience