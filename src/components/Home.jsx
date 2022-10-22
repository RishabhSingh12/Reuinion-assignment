import React from "react";
import FilterComponent from "./FilterComponent";
import Header from "./Header";
import Navbar from "./Navbar";
// import DataArr from "../data/RealEstate.json";
import Card from "./Card";

const Home = (props) => {
  return (
    <>
      <div className="bg-[#f3f3f6] pb-5  ">
        <Navbar />
        <Header filterArr={props.filterArr} setFilterArr={props.setFilterArr} />
        <FilterComponent
          filterArr={props.filterArr}
          setFilterArr={props.setFilterArr}
        />

        {/* Card component section  */}
        <div className="w-[88%] mx-auto my-10 flex flex-wrap justify-center items-center lg:items-start gap-x-[9px] md:gap-x-8 gap-y-[50px]">
          {props.filterArr.length > 0 ? (
            props.filterArr.map((ele, idx) => <Card props={ele} key={idx} />)
          ) : (
            <div className="h-[45vh] pt-10 text-2xl">
              <p>No results to display</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
