import React, { useContext, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import GrainCard from '../components/GrainCard';

const CategoryProduct = () => {

    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const [products, setProducts] = useState([]);
    const backendUrl = "http://localhost:3000"
    const { token } = useContext(ShopContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const resposne = await axios.get(`${backendUrl}/api/grains/`,
                    { headers: { token } });
                    
                const data = resposne.data.grains.filter((g) => g.type === type)
                setProducts(data);
            } catch (error) {
                console.log("Error fetching products: ", error);
                setProducts([]);
            }
        }
        if (type) {
            fetchProducts()
        }
    }, [type])

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
                {type ? `${type} Products` : "All Products"}
            </h2>

            <div className="flex flex-wrap gap-6">
                {products.length > 0 ? (
                    products.map((item, index) => <GrainCard key={index} grain={item} />)
                ) : (
                    <p className="text-gray-500">No products found</p>
                )}
            </div>
        </div>
    );
}

export default CategoryProduct
