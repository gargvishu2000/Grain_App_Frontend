import React, { useEffect, useState, useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { grains, cart, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    // Remove the grains.length check since we want to update cartData
    // whenever cart items change
    const temp = []
    cart.items.forEach((item)=> {
      temp.push({
        _id: item.grainId,
        quantity: item.quantity
      })
    })
    setCartData(temp)
  }, [cart,updateQuantity])

  // useEffect(()=> {
  //   console.log(cartData);
  // }, [cartData])

  const calculateSubtotal = (price, quantity) => {
    return price * quantity
  }

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-6'>
        <Title text1={'BULK'} text2={'ORDER CART'} />
      </div>

      {cartData.length === 0 ? (
        <div className='text-center py-16'>
          <img src={assets.empty_cart} alt="Empty Cart" className='w-32 mx-auto mb-4 opacity-50' />
          <p className='text-gray-500 mb-6'>Your bulk order cart is empty</p>
          <button 
            onClick={() => navigate('/grains')}
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors'
          >
            Browse Grains
          </button>
        </div>
      ) : (
        <div>
          {/* Cart Headers */}
          <div className='hidden md:grid grid-cols-[3fr_1fr_1fr_1fr_0.5fr] gap-4 pb-4 border-b text-sm text-gray-600'>
            <div>Product</div>
            <div>Price/Ton</div>
            <div>Quantity (Tons)</div>
            <div>Subtotal</div>
            <div></div>
          </div>

          {/* Cart Items */}
          {cartData.map((item, index) => {
            const productData = grains.find((grain) => grain._id === item._id)
            if (!productData) return null

            return (
              <div key={index} className='py-6 border-b text-gray-700'>
                <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr_0.5fr] gap-4 items-center'>
                  {/* Product Info */}
                  <div className='flex items-start gap-4'>
                    <img 
                      src={productData.image} 
                      className='w-24 h-24 object-cover rounded' 
                      alt={productData.name}
                    />
                    <div>
                      <h3 className='font-medium'>{productData.name}</h3>
                      <div className='text-sm text-gray-500 mt-1'>
                        {/* <p>Quality: {productData.quality}</p>
                        <p>Origin: {productData.supp}</p> */}
                      </div>
                    </div>
                  </div>

                  {/* Price per Ton */}
                  <div className='md:text-center'>
                    <span className='md:hidden text-gray-500 mr-2'>Price/Ton: </span>
                    ₹{productData.price.toLocaleString()}
                  </div>

                  {/* Quantity Input */}
                  <div className='flex items-center'>
                    <span className='md:hidden text-gray-500 mr-2'>Quantity: </span>
                    <div className='flex items-center'>
                      <button 
                        onClick={() => updateQuantity(item._id, Math.max(productData.quantity, item.quantity - 1))}
                        className='px-3 py-1 border rounded-l hover:bg-gray-50'
                      >
                        -
                      </button>
                      <input 
                        type="number"
                        min={1}
                        max={productData.quantity}
                        value={item.quantity}
                        onChange={(e) => {
                          const value = Number(e.target.value)
                          if (value >= 1 && value <= productData.quantity) {
                            updateQuantity(item._id, value)
                          }
                        }}
                        className='w-20 px-2 py-1 border-y text-center focus:outline-none'
                      />
                      <button 
                        onClick={() => updateQuantity(item._id, Math.min(productData.quantity, item.quantity + 1))}
                        className='px-3 py-1 border rounded-r hover:bg-gray-50'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className='md:text-center'>
                    <span className='md:hidden text-gray-500 mr-2'>Subtotal: </span>
                    ₹{calculateSubtotal(productData.price, item.quantity).toLocaleString()}
                  </div>

                  {/* Remove Button */}
                  <div className='flex justify-end'>
                    <button
                      onClick={() => updateQuantity(item._id, 0)}
                      className='text-red-500 hover:text-red-600'
                    >
                      <img src={assets.bin_icon} className='w-5 h-5 cursor-pointer' alt="X"/>
                    </button>
                  </div>
                </div>

                {/* Mobile Quantity Limits */}
                <div className='md:hidden text-sm text-gray-500 mt-2'>
                  <p>Minimum Order: {productData.quantity} tons</p>
                  <p>Available: {productData.quantity} tons</p>
                </div>
              </div>
            )
          })}

          {/* Cart Summary and Actions */}
          <div className='flex flex-col md:flex-row justify-between gap-8 mt-8'>
            <div className='md:w-1/2'>
              <h3 className='font-medium mb-2'>Special Instructions</h3>
              <textarea 
                className='w-full border rounded p-2'
                rows="4"
                placeholder="Add any special requirements or notes for your order"
              ></textarea>
            </div>

            <div className='md:w-1/2'>
              <CartTotal />
              <div className='flex flex-col gap-3 mt-6'>
                <button 
                  onClick={() => navigate('/grains')}
                  className='w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors'
                >
                  Continue Shopping
                </button>
                <button 
                  onClick={() => navigate('/place-order')}
                  className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors'
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart