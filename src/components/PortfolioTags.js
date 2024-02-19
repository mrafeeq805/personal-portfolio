import React from 'react'

const PortfolioTags = ({item}) => {
    const colors = ["bg-red-500","bg-green-800","bg-blue-500","bg-blue-800","bg-green-500","bg-yellow-500"]
    const tags = ["HTML","MongoDB","React JS","Tailwind","Node JS","Javascript"]
  return (
    <div className={'px-2  w-max rounded-md '+colors[tags.indexOf(item)]}>
        <span className='text-white'>{item}</span>
    </div>
  )
}

export default PortfolioTags