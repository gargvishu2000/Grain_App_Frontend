import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
import NewsletterBox from '../components/Newsletter.jsx'
import Title from '../components/Title'
import contactUs from '../assets/frontend_assets/contact.png'

const Contact = () => {
  return (
    <div>
  <div className="text-center text-2xl pt-10 border-t">
    <Title text1={'CONTACT'} text2={'US'} />
  </div>
  <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
    <img src={contactUs} className="w-full max-w-[450px]" alt="" />
    <div className="flex flex-col justify-center items-start gap-4">
      <p className="font-semibold text-xl text-gray-600">Our Store</p>
      <div className="text-gray-500">
        <p>F-347, Lado sarai</p>
        <p>New Delhi</p>
      </div>
      <div className="text-gray-500">
        <p>+91234566789</p>
        <p>Email: jindal.store@gmail.com</p>
      </div>
      <p className="text-gray-500">Learn more about us</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Contact Us
      </button>
    </div>
  </div>
  <NewsletterBox />
</div>
  )
}

export default Contact
