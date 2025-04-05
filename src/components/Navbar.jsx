import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { 
        setShowSearch, 
        getCartCount, 
        setToken, 
        navigate, 
        token, 
        setCart,
        userInfo 
    } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCart({})
    }

    return (
        <nav className='bg-white border-b'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <Link to='/' className='flex items-center'>
                        <img src={logo} className='h-8' alt="GrainTrade" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-6'>
                        <NavLink 
                            to='/grains' 
                            className={({ isActive }) => 
                                `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                            }
                        >
                            Browse Grains 
                        </NavLink>
                        <NavLink 
                            to='/about' 
                            className={({ isActive }) => 
                                `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink 
                            to='/contact' 
                            className={({ isActive }) => 
                                `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                            }
                        >
                            Contact Us 
                        </NavLink>
                    </div>

                    {/* Right Side Icons/Buttons */}
                    <div className='flex items-center gap-4'>
                        {/* Search */}
                        <button 
                            onClick={() => setShowSearch(true)}
                            className='p-2 text-gray-600 hover:text-blue-600'
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Cart */}
                        <Link to='/cart' className='relative p-2 text-gray-600 hover:text-blue-600'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {getCartCount() > 0 && (
                                <span className='absolute top-0 right-0 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>

                        {/* User Menu */}
                        {token ? (
                            <div className='relative group'>
                                <button className='flex items-center gap-2 p-2 text-sm font-medium text-gray-700 hover:text-blue-600'>
                                    <span>{userInfo?.companyName || 'My Account'}</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className='absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all'>
                                    <Link to='/dashboard' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                        Dashboard
                                    </Link>
                                    <Link to='/orders' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                        Orders
                                    </Link>
                                    <Link to='/profile' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                        Company Profile
                                    </Link>
                                    <hr className='my-2' />
                                    <button 
                                        onClick={logout}
                                        className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link 
                                to='/login'
                                className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700'
                            >
                                Login / Register
                            </Link>
                        )}

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setVisible(true)}
                            className='p-2 text-gray-600 md:hidden'
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {visible && (
                <div className='fixed inset-0 z-50 bg-black bg-opacity-50' onClick={() => setVisible(false)}>
                    <div className='fixed inset-y-0 right-0 w-64 bg-white' onClick={e => e.stopPropagation()}>
                        <div className='p-4'>
                            <button 
                                onClick={() => setVisible(false)}
                                className='absolute top-4 right-4 text-gray-600'
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className='mt-8 space-y-4'>
                                <NavLink 
                                    to='/market'
                                    className='block py-2 text-gray-700 hover:text-blue-600'
                                    onClick={() => setVisible(false)}
                                >
                                    Market Prices
                                </NavLink>
                                <NavLink 
                                    to='/grains'
                                    className='block py-2 text-gray-700 hover:text-blue-600'
                                    onClick={() => setVisible(false)}
                                >
                                    Browse Grains
                                </NavLink>
                                <NavLink 
                                    to='/suppliers'
                                    className='block py-2 text-gray-700 hover:text-blue-600'
                                    onClick={() => setVisible(false)}
                                >
                                    Suppliers
                                </NavLink>
                                <NavLink 
                                    to='/trade-guide'
                                    className='block py-2 text-gray-700 hover:text-blue-600'
                                    onClick={() => setVisible(false)}
                                >
                                    Trading Guide
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar