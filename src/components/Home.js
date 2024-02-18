import React from 'react'
import Header from './Header'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Services from './Services'

const Home = () => {
  return (
    <div className='bg-slate-50'>
        <Header/>
        <Intro/>
        <AboutMe/>
        <Services/>
    </div>
  )
}

export default Home