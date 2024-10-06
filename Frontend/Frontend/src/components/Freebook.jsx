import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
import useBook from "../../hooks/useBook";


function Freebook() {
  const {getBook, book} = useBook();

  const filteredItems = book.filter((data) => {
    return data.category === "Free"
  })

  useEffect(() => {
    getBook();
  }, []);

  // const [book, setBook] = useState([]);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4000/getBook");
  //       console.log(res.data);
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl text-white container mx-auto md:px-20 px-4">
        <div className="text-black">
          <h1 className="font-semibold text-2xl pb-2">Free Offered Courses</h1>
          <p>
          Explore our diverse range of free courses designed to enhance your skills and knowledge across various subjects. Enroll today and take the first step towards achieving your educational goals at no cost!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filteredItems.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
