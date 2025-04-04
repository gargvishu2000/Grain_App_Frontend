import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets.js'

const GrainProduct = () => {
  const { grainId } = useParams()
  const { addToCart, grains } = useContext(ShopContext)
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [price, setPrice] = useState(0);
  const [grainData, setGrainData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const grain = grains?.find(item => item._id === grainId)
    if (grain) {
      setGrainData(grain)
      setSelectedQuantity(grain.quantity || 1);
      setPrice(grain.price || 0);
    }
  }, [grainId, grains])


  const handleAddToCart = useCallback(() => {
    addToCart(grainId, selectedQuantity,price)
  }, [grainId, selectedQuantity, addToCart])

  if (!grainData) {
    return (
      <div className='flex justify-center items-center min-h-[60vh]'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600'></div>
      </div>
    )
  }

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value)
    if (value < grainData.minOrderQuantity || value > grainData.availableQuantity) {
      setErrorMessage(`Quantity must be between ${grainData.minOrderQuantity} and ${grainData.availableQuantity} pack.`)
    } else {
      setErrorMessage('')
      setSelectedQuantity(value)
    }
  }

  return (
    <div className='px-4 py-8'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Left Side - Images */}
        <div className='md:w-1/2'>
          <div className='border rounded-lg p-4'>
            <img 
              src={grainData.image[0] || assets.default_grain} 
              alt={grainData.name || 'Grain Product'} 
              className='w-full h-[400px] object-cover rounded-lg'
            />
          </div>
          {grainData.additionalImages?.length > 0 && (
            <div className='grid grid-cols-4 gap-2 mt-4'>
              {grainData.additionalImages.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${grainData.name || 'Grain'} view ${index + 1}`}
                  className='w-full h-20 object-cover rounded-lg cursor-pointer'
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Product Details */}
        <div className='md:w-1/2'>
          <h1 className='text-3xl font-semibold mb-4'>{grainData.name}</h1>
          
          {/* Price and Availability */}
          <div className='bg-gray-50 p-4 rounded-lg mb-6'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-2xl font-bold'>₹{grainData.price}/{grainData.unit}</span>
              <span className={`px-3 py-1 rounded-full ${
                grainData.status 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {grainData.status ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div className='grid grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='text-gray-600'>Minimum Order:</p>
                <p className='font-medium'>1{grainData.type}</p>
              </div>
              <div>
                <p className='text-gray-600'>Available Quantity:</p>
                <p className='font-medium'>{grainData.quantity} pack</p>
              </div>
              <div>
                <p className='text-gray-600'>Grade:</p>
                <p className='font-medium'>{grainData.grade}</p>
              </div>
              <div>
                <p className='text-gray-600'>Harvest Date:</p>
                <p className='font-medium'>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Supplier Info */}
          <div className='border-b pb-4 mb-4'>
            <h3 className='text-lg font-semibold mb-2'>Supplier Information</h3>
            <div className='flex items-center gap-4'>
              <div>
                <p className='font-medium'>{grainData.supplier}</p>
                <div className='flex items-center gap-2 text-sm'>
                  <span>Fatherpur, beri</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Section */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <div className='flex items-center gap-4 mb-4'>
              <label className='text-gray-600'>Quantity (pack):</label>
              <input 
                type="number" 
                min={grainData.minOrderQuantity}
                max={grainData.availableQuantity}
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className='border rounded px-3 py-2 w-24'
              />
            </div>
            {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
            <div className='flex gap-4'>
              <button 
                onClick={handleAddToCart}
                disabled={!grainData.status || errorMessage}
                className='flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400'
              >
                Add to Cart
              </button>
              <button className='flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors'>
                Contact Supplier
              </button>
            </div>
          </div>

          {/* Certifications */}
          {grainData.certifications?.length > 0 && (
            <div className='mt-6'>
              <h3 className='text-lg font-semibold mb-2'>Certifications</h3>
              <div className='flex gap-2 flex-wrap'>
                {grainData.certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className='bg-gray-100 px-3 py-1 rounded-full text-sm'
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GrainProduct
