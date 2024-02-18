import React from 'react'

const ExperienceCard = ({data}) => {
  return (
    <div className='relative pt-10'>
        <div className='rounded-md rounded-br-3xl border-[1px] p-6 flex flex-col gap-1'>
            <div className='flex justify-between'>
                <div>
                    <span className='text-lg font-medium text-gray-700'>{data.title}</span>
                    <span className=' text-gray-600 block'>{data.role}</span>
                </div>
                <div className='bg-blue-100 h-max px-3 mt-5'>
                    <span className='text-blue-500 text-sm'>{data.year}</span>
                </div>
            </div>
            
            <p className='text-gray-400'> {data.description}</p>
        </div>
        <div className='absolute top-0 right-2 rounded-full h-20 w-20 border-[1px] p-2'>
            <div className='bg-blue-100 h-full w-full rounded-full flex justify-center items-center'>
                <span class="material-symbols-outlined text-blue-500 text-3xl">
                    work_history
                </span>
            </div>
        </div>
        
    
    </div>
  )
}

export default ExperienceCard