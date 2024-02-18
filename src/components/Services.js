import React from 'react'
import { serviceDetails } from '../utils/constants'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-medium '>Awesome Service</h1>
            <p className='text-gray-400 mt-3'>Obviously I'am a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
        </div>
        <div className='my-5'>
            {serviceDetails.map((item,index)=><ServiceCard key={index} data={item}/>)}
        </div>
    </div>
  )
}

export default Services