import React from 'react'
import { skillDetails } from '../utils/constants'
import SkillCard from './SkillCard'

const SkillExpertise = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-medium '>Skill Expertise</h1>
            <p className='text-gray-400 mt-3'>Obviously I'am a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
        </div>
        <div className='my-5 grid grid-cols-2 gap-4'>
            {skillDetails.map((item,index)=><SkillCard key={index} data={item}/>)}
        </div>
        
    </div>
  )
}

export default SkillExpertise