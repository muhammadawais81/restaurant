"use client"; // Required for animations in Next.js

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faUtensils,
  faCartPlus,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

// New Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 }, // Start smaller and lower
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 },
  }, // Scale up with bounce effect
};

function Services() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-10 lg:m-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.8 } } }} // Faster stagger effect
    >
      {/* Service Cards */}
      {[
        { icon: faUserTie, title: "Professional Staff" },
        { icon: faUtensils, title: "Delicious Food" },
        { icon: faCartPlus, title: "Easy Ordering" },
        { icon: faHeadset, title: "24/7 Support" },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-start w-full bg-white hover:bg-amber-500  text-black hover:text-white p-12 shadow-md shadow-gray-400 rounded-lg"
          variants={cardVariants}
        >
          <FontAwesomeIcon icon={service.icon} className="text-amber-500 text-4xl hover:text-white  mb-4" />
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className=" mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Services;
