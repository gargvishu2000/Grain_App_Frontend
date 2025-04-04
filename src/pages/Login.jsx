import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    businessType: 'Buyer',
    phoneNumber: '',
  });

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backendUrl}/api/users/register`, formData);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Registration successful!');
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/users/login`, {
          email: formData.email,
          password: formData.password
        });
        if (response.data.success) {
          
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Login successful!');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-400">
      <div className="inline-flex items-center gap-4 mb-2 mt-10">
        <p className="prata-regular text-3xl text-gray-700">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-400" />
      </div>

      {currentState === 'Sign Up' && (
        <>
          <input 
            type="text" 
            name="name"
            onChange={handleInputChange} 
            value={formData.name} 
            className="w-full px-3 py-2 border border-gray-800" 
            placeholder="Full Name" 
            required
          />
          <input 
            type="text" 
            name="companyName"
            onChange={handleInputChange} 
            value={formData.companyName} 
            className="w-full px-3 py-2 border border-gray-800" 
            placeholder="Company Name" 
            required
          />
          {/* Business Type Dropdown */}
          <select
            name="businessType"
            onChange={handleInputChange}
            value={formData.businessType}
            className="w-full px-3 py-2 border border-gray-800 text-gray-600"
            required
          >
            <option value="Buyer">Grain Buyer</option>
            <option value="Supplier">Grain Supplier</option>
          </select>

          <input 
            type="tel" 
            name="phoneNumber"
            onChange={handleInputChange} 
            value={formData.phoneNumber} 
            className="w-full px-3 py-2 border border-gray-800" 
            placeholder="Phone Number" 
            required
          />
        </>
      )}

      <input 
        type="email" 
        name="email"
        onChange={handleInputChange} 
        value={formData.email} 
        className="w-full px-3 py-2 border border-gray-800" 
        placeholder="Business Email" 
        required
      />
      <input 
        type="password" 
        name="password"
        onChange={handleInputChange} 
        value={formData.password} 
        className="w-full px-3 py-2 border border-gray-800" 
        placeholder="Password" 
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-gray-700">Forgot Your Password?</p>
        {currentState === 'Login' ? (
          <p className="cursor-pointer text-blue-600" onClick={() => setCurrentState('Sign Up')}>
            Create Business Account
          </p>
        ) : (
          <p className="cursor-pointer text-blue-600" onClick={() => setCurrentState('Login')}>
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white px-12 py-2 mt-4 font-light hover:bg-gray-800 transition">
        {currentState === 'Login' ? 'Login' : 'Sign Up'}
      </button>

      {currentState === 'Sign Up' && (
        <p className="text-xs text-center text-gray-500 mt-2">
          By creating an account, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
          Your business information will be verified before activation.
        </p>
      )}
    </form>
  );
};

export default Login;
