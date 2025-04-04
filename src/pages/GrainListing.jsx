import React, { useState, useEffect, useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets.js';
import GrainCard from '../components/GrainCard';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const GrainListing = () => {
  const { grains, search, showSearch } = useContext(ShopContext);
  
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  
  const [grainType, setGrainType] = useState([]);
  const [quality, setQuality] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  useEffect(() => {
    applyFilter();
  }, [grainType, quality, search, showSearch, grains]);

  useEffect(() => {
    sortProduct();
  }, [sortType, filterProducts]);

  const toggleSelection = (value, setter) => {
    setter(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const applyFilter = () => {
    let filtered = grains.slice();

    if (showSearch && search) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (grainType.length > 0) {
      filtered = filtered.filter(item => grainType.includes(item.type));
    }
    if (quality.length > 0) {
      filtered = filtered.filter(item => quality.includes(item.grade));
    }

    setFilterProducts(filtered);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        return;
    }

    setFilterProducts(sorted);
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        {/* Grain Type filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-xl font-medium'>Grain Type</p>
          {['Wheat', 'Rice', 'Corn', 'Barley'].map(type => (
            <p key={type} className='flex gap-2'>
              <input type="checkbox" className='w-3' value={type} onChange={(e) => toggleSelection(e.target.value, setGrainType)} />{type}
            </p>
          ))}
        </div>

        {/* Quality Grade filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-xl font-medium'>Quality Grade</p>
          {['Premium', 'Grade1', 'Grade2'].map(grade => (
            <p key={grade} className='flex gap-2'>
              <input type="checkbox" className='w-3' value={grade} onChange={(e) => toggleSelection(e.target.value, setQuality)} />{grade}
            </p>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'AVAILABLE'} text2={'GRAINS'} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-400 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filterProducts.length > 0 ?
            filterProducts.map((grain, index) => (
              <GrainCard key={index} grain={grain} />
            ))
            : (<p>Data not found...</p>)}
        </div>
      </div>
    </div>
  );
};

export default GrainListing;
