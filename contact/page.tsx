import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
    <Header/>
<section className='contact-form'>
  <h2 className='fade-in'>Contact Us</h2>
  <form>
<input type="text" placeholder='Full Name' />
<input type="email" placeholder='Email Address' required/>
<input type="text" placeholder='Phione Number' required/>
<textarea placeholder='Your Message' rows={5} required></textarea>
<button type='submit'>Send Message</button>
  </form>
</section>
<Footer/>
    </div>
  )
}

export default Contact