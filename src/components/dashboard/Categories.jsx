import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import { assets } from "./images/assets.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {
  const navigate = useNavigate();
  
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const categories = [
    { id: 1, name: "Rice", image: assets.rice_img },
    { id: 2, name: "Atta", image: assets.aashirvad_img },
    { id: 3, name: "Dals", image: assets.dal_img },
    { id: 4, name: "Oil", image: assets.oil_img },
    { id: 5, name: "Sugar", image: assets.sugar_img },
  ];

  const handleTypeClick = (typeName) => {
    navigate(`/products?type=${typeName}`);
  };

  return (
    <div className="container mx-auto px-4">
      <Title text1="CATEGORIES" text2="AVAILABLE" />

      <div className="mt-8">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {categories.map((category) => (
            <div key={category.id} className="px-2">
              <div
                className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleTypeClick(category.name)}
              >
                {/* Image */}
                <div className="h-48 border-b-2 border-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Category Name */}
                <div className="p-4 bg-gray-50">
                  <h3 className="text-xl text-center font-semibold text-gray-800">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
