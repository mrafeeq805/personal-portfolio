import React from 'react'
import { socialDetail } from '../utils/constants'
import SocialCard from './SocialCard'

const SocialInfo = () => {
    return (
        <div className='p-4'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-medium '>Muhammed Rafeeq K</h1>
                <p className='text-gray-400 mt-3 text-center'>Obviously I'am a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
            </div>
            <div className='my-5 flex gap-4 justify-center'>
                {socialDetail.map((item,index)=><SocialCard key={index} data={item}/>)}
            </div>
        </div>
      )
}

export default SocialInfo