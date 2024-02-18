import React from 'react'
import Header from './Header'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Services from './Services'
import Experience from './Experience'
import CountSection from './CountSection'
import SkillExpertise from './SkillExpertise'
import Portfolio from './Portfolio'
import ContactSection from './ContactSection'

const Home = () => {
  return (
    <div className='bg-slate-50'>
        <Header/>
        <Intro/>
        <AboutMe/>
        <Services/>
        <Experience/>
        <CountSection/>
        <SkillExpertise/>
        <Portfolio/>
        <ContactSection/>
    </div>
  )
}

export default Home