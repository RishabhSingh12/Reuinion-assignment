import React from "react";

const Card = ({ props }) => {
  const { name, image, price, beds, baths_full, building_size, address } =
    props;

  return (
    <div className="md:w-[45%] sm:w-[65%] lg:w-[31%] w-[95%] p-1 rounded shadow-lg font-sans cursor-pointer">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-60 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2 pl-2 lg:pl-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="py-4 text-2xl text-[#664de5] font-bold">
            ${price}
            <span className="text-gray-400 font-normal">/month</span>
          </span>
          <span className="py-1 px-2 bg-white border-gray-300 border-2 rounded-full mr-3">
            <i className="fa-regular fa-heart text-violet-500  "></i>
          </span>
        </div>
        <span className="block text-lg font-semibold  uppercase text-black">
          {name}
        </span>
        <h2 className="text-[17px] text-gray-400 font-semibold">
          <span>{address.line} ,</span>
          <span>{address.neighbourhood_name} ,</span>
          <span>{address.state_code}</span>
        </h2>
      </div>

      <hr className="md:mt-[30px] mt-[27px] sm:mt-[25px]  text-black" />
      <div className="flex justify-evenly py-3 font-semibold">
        <span className="text-gray-500">
          <i className="fa-solid fa-bed pr-2 text-violet-500"></i>
          {beds} {beds > 1 ? "beds" : "bed"}
        </span>
        <span className="text-gray-500">
          <i className="fa-solid fa-bath pr-2 text-violet-500"></i>
          {baths_full} {baths_full > 1 ? "bathrooms" : "bathroom"}
        </span>
        <span className="text-gray-500">
          <i className="fa-solid fa-vector-square pr-2 text-violet-500"></i>
          {building_size.size}
        </span>
      </div>
    </div>
  );
};

export default Card;
