import React from "react";
import banner from "../../public/banner.png";
import GsButton from "../assets/button.jsx";
import toast from "react-hot-toast";
function Banner() {
  const handleClick = () => {
    toast.success("Succesfully Subscribed!!");
  }
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-5 ">
        <div className="w-full text-black order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl dark:text-orange-400  md:text-4xl font-bold">
              Welcome to{" "}
              <span className="text-orange-400 dark:text-orange-700">UNLIMITED DIGITAL STORIES </span>
              – Where Minds Meet Souls!
            </h1>
            <p className="text-sm md:text-xl dark:text-white">
            A space where creativity and imagination come to life. Explore captivating narratives that bridge the mind and soul, offering endless inspiration. Join us in a journey where every story ignites a deeper connection.
            </p>
            <label className="input input-bordered bg-orange-950 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="white"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow text-white placeholder-white" placeholder="Email"></input>
              <button className="text-white" onClick={handleClick}>Subscribe</button>
            </label>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className=" md:w-[500px] md:h-[500px] md:ml-20"
            alt=""
          />
        </div>
      </div>
      <div className="my-3 flex justify-center">{GsButton('Get Started' )}</div>
    </>
  );
}

export default Banner;
