import React from 'react'
import Header from './Header'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Services from './Services'
import Experience from './Experience'
import CountSection from './CountSection'

const Home = () => {
  return (
    <div className='bg-slate-50'>
        <Header/>
        <Intro/>
        <AboutMe/>
        <Services/>
        <Experience/>
        <CountSection/>
    </div>
  )
}

export default Home