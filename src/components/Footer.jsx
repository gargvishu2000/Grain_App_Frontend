import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-50 border-t'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='col-span-1 md:col-span-2'>
            <img src='logo.png' className='h-8 mb-4' alt="GrainTrade" />
            <p className='text-gray-600 text-sm mb-4'>
              India's trusted B2B platform for grain trading, connecting farmers and buyers nationwide.
            </p>
            <div className='flex gap-4'>
              <img src="/certifications/fssai.png" alt="FSSAI" className='h-8' />
              <img src="/certifications/agmark.png" alt="Agmark" className='h-8' />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-medium mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li><Link to="/grains">Browse Grains</Link></li>
              <li><Link to="/market-prices">Market Prices</Link></li>
              <li><Link to="/become-supplier">Become a Supplier</Link></li>
              <li><Link to="/trade-guide">Trading Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-medium mb-4'>Contact Us</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>📞 1800-123-4567 (Toll Free)</li>
              <li>📧 trade@graintrade.com</li>
              <li>🕒 Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600'>
          <p>© 2024 GrainTrade. All rights reserved</p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Trade</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
