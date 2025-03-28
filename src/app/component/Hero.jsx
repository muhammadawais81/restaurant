"use client";
import { motion } from "framer-motion";
import React from "react";
import bg from "@/app/assets/img/bg.jpg";
import pizza from "@/app/assets/img/hero.png";

function Hero() {
  return (
    <div
      className="relative w-full h-auto min-h-[700px] flex flex-col md:flex-row justify-center items-center px-6 md:px-16 text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-20 md:mt-0">
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-5xl mb-4 mt-16 leading-tight">
          Enjoy Our <br className="hidden sm:block" /> Delicious Meal
        </h1>
        <p className="text-base sm:text-lg md:text-lg mb-6 max-w-[500px] ">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit.
        </p>
        <button className="bg-amber-500 px-6 py-3 text-lg font-bold rounded-lg hover:bg-amber-600 transition">
          Book a Table
        </button>
      </div>

      {/* Right Image */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <motion.img
          src={pizza.src}
          alt="Food"
          className="w-9/12 max-w-[300px] md:max-w-[400px] rounded-full shadow-xl border-4 border-amber-500"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
      </div>
    </div>
  );
}

export default Hero;