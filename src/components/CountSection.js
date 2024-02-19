import React from 'react'
import CountCard from './CountCard'
import { countDetails } from '../utils/constants'

const CountSection = () => {
  return (
    <div className='grid grid-cols-2 gap-5 p-4 md:grid-cols-4'>
        {countDetails.map((item,index) => <CountCard key={index} data={item}/>)}
    </div>
  )
}

export default CountSection