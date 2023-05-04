import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigationButtons></NavigationButtons>
      <Products></Products>
      <Footer></Footer>
    </>
  );
};

export default Main;
