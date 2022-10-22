import React, { useState } from "react";
import DataArr from "../data/RealEstate.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterComponent = ({ filterArr, setFilterArr }) => {
  let typeArr = DataArr.map((ele) => ele.prop_type);
  let arr = [...new Set(typeArr)];

  const [filter, setFilter] = useState({
    address: "",
    prop_type: "",
    price: "",
    move_in_date: "",
  });

  const onLocationHandler = (e) => {
    setFilter({ ...filter, address: e.target.value });
  };

  const onDateHandler = (date) => {
    setFilter({ ...filter, move_in_date: date });
  };

  const onPriceHandler = (e) => {
    setFilter({ ...filter, price: e.target.value });
  };

  const onPropertyTypeHandler = (e) => {
    setFilter({ ...filter, prop_type: e.target.value });
  };

  let newarr = DataArr;

  for (let i in filter) {
    if (filter[i]) {
      // filter logic for property types
      if (i === "prop_type") {
        newarr = newarr.filter((ele) => ele[i] === filter[i]);
      }

      //   filter logic for dates
      if (i === "move_in_date") {
        // filter[i].getMonth();
        let formatteddate =
          (filter[i].getMonth() < 9
            ? "0" + (filter[i].getMonth() + 1)
            : filter[i].getMonth() + 1) +
          "/" +
          filter[i].getDate() +
          "/" +
          filter[i].getFullYear();

        // console.log(formatteddate);

        newarr = newarr.filter((ele) => {
          return ele[i] === formatteddate;
        });
      }

      //filter logic for price
      if (i === "price") {
        let pricearr = filter[i].split("-");
        newarr = newarr.filter(
          (ele) =>
            ele[i] > JSON.parse(pricearr[0]) && ele[i] < JSON.parse(pricearr[1])
        );
      }

      //   filter logic for address
      if (i === "address") {
        newarr = DataArr.filter((ele) =>
          ele[i].state_code
            .toLowerCase()
            .trim()
            .includes(filter[i].toLowerCase())
        );

        let newarr2 = DataArr.filter((ele) =>
          ele[i].line.toLowerCase().trim().includes(filter[i].toLowerCase())
        );

        let newarr3 = DataArr.filter((ele) =>
          ele[i].neighbourhood_name
            .trim()
            .toLowerCase()
            .includes(filter[i].toLowerCase())
        );

        if (newarr2.length > 0) {
          newarr = newarr.length > 0 ? [...newarr, ...newarr2] : [...newarr2];
        }
        if (newarr3.length > 0) {
          newarr = newarr.length > 0 ? [...newarr, ...newarr3] : [...newarr3];
        }

        // logic for when user types/pastes the full address with the exact matching format
        if (newarr.length < 1 && newarr2.length < 1 && newarr3.length < 1) {
          newarr = DataArr.filter((ele) => {
            let concatvalue = `${ele[i].line.trim().toLowerCase()} ,${ele[
              i
            ].neighbourhood_name
              .trim()
              .toLowerCase()} ,${ele[i].state_code.trim().toLowerCase()}`;

            return concatvalue.includes(filter[i].trim().toLowerCase());
          });
        }
      }
    }
  }

  const clickHandler = () => {
    setFilterArr(newarr);
  };

  const clearHandler = () => {
    setFilter({
      ...filter,
      address: "",
      prop_type: "",
      price: "",
      move_in_date: "",
    });

    setFilterArr(DataArr);
  };

  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row md:flex-wrap lg:justify-around items-start gap-x-4 gap-y-4 bg-white py-4 px-4 my-3 rounded-lg">
      <div className="flex flex-col gap-y-1">
        <p>Location</p>
        <input
          type="search"
          value={filter.address}
          placeholder="Enter location"
          className="text-black rounded border-2 outline-none placeholder:text-black placeholder:font-semibold p-1"
          onChange={onLocationHandler}
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <p>When</p>
        <div className="date-container text-black font-semibold">
          <DatePicker
            className="bg-transparent w-[200px] p-1 placeholder:text-black  cursor-pointer"
            placeholderText="Please select a date   📅"
            selected={filter.move_in_date}
            onChange={onDateHandler}
            isClearable={filter.move_in_date}
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-1">
        <p>Price</p>
        <select
          className="p-1 filter-select bg-white text-black font-semibold "
          value={filter.price}
          onChange={onPriceHandler}
        >
          <option value="">Select a price</option>
          <option value="500-1500">$500-$1500</option>
          <option value="1500-3000">$1500-$3000</option>
          <option value="3000-5000">$3000-$5000</option>
        </select>
      </div>

      <div className="flex flex-col gap-y-1">
        <p>Property Type</p>
        <select
          name="select property"
          id=""
          className="p-1 bg-white text-black font-semibold "
          value={filter.prop_type}
          onChange={onPropertyTypeHandler}
        >
          <option value="">Select a property</option>
          {arr.map((ele, id) => (
            <option key={id}>{ele}</option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-x-4 text-white mt-4 md:ml-4">
        <button
          className="text-black flex flex-col items-center justify-start"
          onClick={clearHandler}
        >
          <i className="fa-regular fa-circle-xmark"></i>
          <p>Clear filters</p>
        </button>

        <button
          className="rounded-lg bg-[#664de5] py-2 px-8"
          onClick={clickHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
