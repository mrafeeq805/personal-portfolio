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
import ContactForm from './ContactForm'
import SocialInfo from './SocialInfo'
import Footer from './Footer'

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
        <ContactForm/>
        <SocialInfo/>
        <Footer/>
    </div>
  )
}

export default Home