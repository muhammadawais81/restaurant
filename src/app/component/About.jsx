"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Lobster, Lora } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

// ===========================Import Google Fonts======================
const poppins = Lobster({ subsets: ["latin"], weight: "400" });
const lora = Lora({ subsets: ["latin"], weight: "700" });

import about1 from "@/app/assets/img/pic1.jpg";
import about2 from "@/app/assets/img/pic2.jpg";
import about3 from "@/app/assets/img/pic3.jpg";
import about4 from "@/app/assets/img/pic4.jpg";

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/*===================================== Images Section============================== */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { img: about3, height: 400 },
            { img: about4, height: 140 },
            { img: about2, height: 160 },
            { img: about1, height: 180 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <Image
                src={item.img}
                alt={`about-pic${index + 1}`}
                height={item.height}
                width={200}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>

        {/*======================================= Text Section ===============================*/}
        <div className="w-full md:w-1/2">
          <h2 className={`${poppins.className} text-orange-400 font-bold text-4xl`}>
            About us <hr className="w-20  border-orange-400 border-t-2 mt-3" />
          </h2>
          <h1 className={`${lora.className} text-3xl md:text-4xl mt-2 font-extrabold text-black mb-4 flex items-center gap-2`}>
            Welcome <FontAwesomeIcon icon={faUtensils} className="text-amber-500 text-3xl" /> to Restaurant
          </h1>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, saepe sunt quasi provident voluptate ullam eveniet, ut possimus perspiciatis, eius facere architecto delectus ab ratione fugit animi laudantium temporibus. Tenetur.
          </p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, saepe sunt quasi provident voluptate ullam eveniet, ut possimus perspiciatis, eius facere architecto delectus ab ratione fugit animi laudantium temporibus. Tenetur.
          </p>

          {/*================================= Experience & Chefs====================================== */}
          <div className="grid grid-cols-2 gap-6">
            {[{ number: "15", label: "EXPERIENCE" }, { number: "16", label: "MASTER CHEFS" }].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-amber-500 w-2 h-20"></div>
                <div className="ml-4">
                  <h1 className="text-amber-500 text-5xl font-extrabold">{item.number}</h1>
                  <p className="text-gray-700">Years Of</p>
                  <h2 className="text-black font-bold">{item.label}</h2>
                </div>
              </div>
            ))}
          </div>

          {/*================================= Read More Button============================================= */}
          <button className="uppercase mt-6 px-8 py-3 bg-amber-500 text-white font-bold  hover:bg-amber-600 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
