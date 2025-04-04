import React from 'react'
import Title from '../Title'

const QualityAssurance = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Quality Testing',
      description: 'Rigorous quality testing for all grain products'
    },
    {
      icon: '📜',
      title: 'Certifications',
      description: 'International quality certifications and standards'
    },
    {
      icon: '🔒',
      title: 'Secure Storage',
      description: 'Temperature controlled warehousing facilities'
    }
  ]

  return (
    <div className='mb-12'>
      <Title text1={'QUALITY'} text2={'ASSURANCE'} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
        {features.map((feature, index) => (
          <div key={index} className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>{feature.icon}</span>
            </div>
            <h3 className='font-semibold mb-2'>{feature.title}</h3>
            <p className='text-gray-600'>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Certification Badges */}
      <div className='mt-12 bg-gray-50 rounded-lg p-8'>
        <h3 className='text-center font-semibold mb-6'>Our Certifications</h3>
        <div className='flex flex-wrap justify-center gap-8'>
          <img src="/certifications/iso.png" alt="ISO" className='h-16' />
          <img src="/certifications/fssai.png" alt="FSSAI" className='h-16' />
          <img src="/certifications/agmark.png" alt="Agmark" className='h-16' />
        </div>
      </div>
    </div>
  )
}

export default QualityAssurance