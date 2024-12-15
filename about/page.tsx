import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
        <Header/>
        <section className='about' style={{backgroundImage:'url(about.jpg)'}}>
            <div className='about-content'>
                <h2 className='fade-in'>About Us</h2>
                <p>Welcome to our company, where we are dedicated to delivering exceptional products and services to our valued customers. Founded in 2015, we have built a strong reputation for quality, innovation, and customer satisfaction. Our team of passionate professionals is committed to understanding your needs and providing tailored solutions to help you achieve your goals. Whether you're looking for cutting-edge technology, reliable support, or a trusted partner, we are here to guide you every step of the way. We take pride in our commitment to excellence and are excited to embark on this journey with you.</p>
            </div>
        </section>
        <Footer/>
    </div>
    
  )
}

export default About