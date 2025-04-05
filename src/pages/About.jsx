import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
import NewsletterBox from '../components/Newsletter.jsx'
import Title from '../components/Title'
import contactUs from '../assets/frontend_assets/contact.png';

const About = () => {
  return (
    <div className='text-xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={contactUs} className='w-full max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
          <p className='text-md'>Real Grain Trader was established with a vision to modernize and streamline the grain trading industry. Our platform bridges the gap between grain producers, traders, and buyers, creating an efficient marketplace for bulk grain transactions.</p>
          <p className='text-md'>Since our inception, we've facilitated countless successful trades, connecting farmers and suppliers with food manufacturers, livestock feed producers, and other bulk grain buyers. Our platform handles various grain types including wheat, corn, soybeans, barley, and more, ensuring quality and transparency in every transaction.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className='text-md'>Our mission at Real Grain Trader is to revolutionize the grain trading industry by providing a secure, transparent, and efficient platform for B2B transactions. We're committed to empowering businesses with real-time market insights, quality assurance, and seamless trading operations.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
         <b>Quality Verification</b>
         <p className='text-gray-600'>Every grain listing undergoes thorough quality checks and certification before being approved for trade.</p>
        </div>
        <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
         <b>Market Intelligence</b>
         <p className='text-gray-600'>Access real-time market prices, trends, and analytics to make informed trading decisions.</p>
        </div>
        <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
         <b>Secure Trading</b>
         <p className='text-gray-600'>Our platform ensures secure transactions with escrow services and verified business partners.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About