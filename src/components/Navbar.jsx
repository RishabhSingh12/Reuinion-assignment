import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-2 bg-[#faf9fe] py-3">
        <div className="flex items-center">
          <img
            src={require("../assets/logo.jpg")}
            alt="logo"
            className="w-[28px] ml-4 mr-2 "
          />
          <p className=" normal-case text-black font-semibold text-xl">
            Estatery
          </p>
        </div>
        <div className="flex-none ">
          <ul className=" hidden sm:flex  p-0 gap-x-4 ">
            <li className="bg-white rounded-lg text-[#664de5] border-2 font-semibold py-2 px-4 cursor-pointer">
              <p>Login</p>
            </li>
            <li className="bg-[#664de5] rounded-lg  text-white font-semibold py-2 px-4 cursor-pointer">
              <p>Signup</p>
            </li>
          </ul>

          {/* toggle view */}
          <div className="flex items-center pr-2 text-gray-800 text-lg sm:hidden">
            <label htmlFor="my-modal-3">
              <i className="fa-solid fa-bars cursor-pointer"></i>
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative w-[98%] bg-violet-300 text-white bottom-[250px] ">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle text-white bg-violet-600 absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg  font-bold">
                  <p className="bg-white rounded-lg text-[#664de5] border-2 mt-4 font-semibold py-2 px-4 cursor-pointer">
                    <span>Login</span>
                  </p>
                </h3>
                <h3 className="py-4">
                  <p className="bg-[#664de5] rounded-lg  text-white font-semibold py-2 px-4 cursor-pointer">
                    <span>Signup</span>
                  </p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
