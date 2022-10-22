import React from "react";
import DataArr from "../data/RealEstate.json";

const Header = ({ filterArr, setFilterArr }) => {
  const searchHandler = (e) => {
    let value = e.target.value;

    let newArr = filterArr.filter((ele) =>
      ele["name"].toLowerCase().trim().includes(value.toLowerCase())
    );
    setFilterArr(newArr);

    if (value.length < 1) {
      setFilterArr(DataArr);
    }
  };

  return (
    <div className=" lg:w-[90%] lg:mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-4 pt-[60px] pb-5 ">
      <h1 className="md:text-[33px] text-[30px] text-black font-semibold">
        Search properties to rent
      </h1>
      <input
        type="text"
        onChange={searchHandler}
        placeholder="Search with names of properties"
        className="p-1 px-2 border-2 rounded-lg pl-4 text-black placeholder:text-gray-800 placeholder:font-medium w-[260px]"
      />
    </div>
  );
};

export default Header;
