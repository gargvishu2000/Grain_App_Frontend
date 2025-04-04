import React, { useContext, useEffect, useState } from "react";
import Title from "../Title";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedGrains = () => {
  const navigate = useNavigate();
  const { grains } = useContext(ShopContext);
  const [featuredGrains, setFeaturedGrains] = useState([]);

  useEffect(() => {
    setFeaturedGrains(grains);
  }, [grains]);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
    desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <div className="mb-12">
      <Title text1="FEATURED" text2="GRAINS" />

      {/* Carousel Container */}
      <div className="relative mt-8">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* Grain Cards */}
          {featuredGrains.map((grain) => (
            <div
              key={grain._id}
              className="flex-none w-[280px] border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/grains/${grain._id}`)}
            >
              <img
                src={grain.image[0]}
                alt={grain.name}
                className="w-full h-48 object-cover border-b"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{grain.name}</h3>
                <p className="text-sm text-gray-600">{grain.quality}</p>
                <div className="mt-2 flex justify-between items-center">
                  <p className="font-medium text-gray-800">₹{grain.price}/ton</p>
                  <span
                    className={`text-sm font-semibold ${
                      grain.trend === "up"
                        ? "text-green-600"
                        : grain.trend === "down"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {grain.trend === "up"
                      ? "↑"
                      : grain.trend === "down"
                      ? "↓"
                      : "→"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedGrains;
