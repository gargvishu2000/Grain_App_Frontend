import React from 'react'
import FeaturedGrains from '../components/dashboard/FeaturedGrains'
import TradingStats from '../components/dashboard/Tradingstats'
import QualityAssurance from '../components/dashboard/QualityAssurance'
import NewsletterBox from '../components/Newsletter'
import DiscountProduct from '../components/dashboard/DiscountProduct'
import Categories from '../components/dashboard/Categories'

const Dashboard = () => {
  return (
    <div className='space-y-12'>
      {/* Market Overview Section */}
      <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-6'>Welcome to <strong>Jindal Store</strong> </h1>
          <p className='text-xl mb-8'>Your trusted B2B platform for grains</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'>
              <h3 className='font-semibold mb-2'>Total Trading Volume</h3>
              <p className='text-2xl'>₹24.5M</p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'>
              <h3 className='font-semibold mb-2'>Active Customers</h3>
              <p className='text-2xl'>250+</p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'>
              <h3 className='font-semibold mb-2'>Available Category</h3>
              <p className='text-2xl'>15 Types</p>
            </div>
          </div>
        </div>
      </div>

      {/* Showing all the categories */}
      <div className='container mx-auto px-4'> 
        <Categories />
      </div>

      {/* Featured Grains */}
      <div className='container mx-auto px-4'>
        <FeaturedGrains />
      </div>

      {/* High Discounted Products */}
      <div className='container mx-auto px-4'>
        <DiscountProduct />
      </div>

      {/* Market Trends */}
      

      {/* Trading Statistics */}
      <div className='bg-gray-50 py-12'>
        <div className='container mx-auto px-4'>
          <TradingStats />
        </div>
      </div>

      {/* Quality Assurance */}
      <div className='container mx-auto px-4'>
        <QualityAssurance />
      </div>

      {/* Newsletter */}
      <div className='container mx-auto px-4'>
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Dashboard
