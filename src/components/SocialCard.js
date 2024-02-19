import React from 'react'

const SocialCard = ({data}) => {
  return (
    <div>
        <a href={data.link}>
            <img className='h-10' src={data.icon} alt='link'/>
        </a>
    </div>
  )
}

export default SocialCard