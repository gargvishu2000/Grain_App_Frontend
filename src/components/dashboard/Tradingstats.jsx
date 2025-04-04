import React from 'react'
import Title from '../Title'

const TradingStats = () => {
  const stats = [
    {
      label: 'Total Trades',
      value: '1,234',
      change: '+12%',
      trend: 'up'
    },
    {
      label: 'Trading Volume',
      value: '₹24.5M',
      change: '+8%',
      trend: 'up'
    },
    {
      label: 'Active Orders',
      value: '156',
      change: '-3%',
      trend: 'down'
    },
    {
      label: 'New Suppliers',
      value: '45',
      change: '+15%',
      trend: 'up'
    }
  ]

  return (
    <div className='mb-12'>
      <Title text1={'TRADING'} text2={'STATISTICS'} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
        {stats.map((stat, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='text-gray-600 text-sm mb-2'>{stat.label}</h3>
            <p className='text-3xl font-semibold'>{stat.value}</p>
            <p className={`text-sm mt-2 ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TradingStats