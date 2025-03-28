"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import team1 from "@/app/assets/img/team-1.jpg";
import team3 from "@/app/assets/img/team-3.jpg";

import { Lobster, Lora } from "next/font/google";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const lora = Lora({ subsets: ["latin"], weight: "700" });

const data = [
  { img: team1, name: "Zufran", des: "Master Chef" },
  { img: team3, name: "Zufran", des: "Master Chef" },
  { img: team1, name: "Zufran", des: "Master Chef" },
  { img: team3, name: "Zufran", des: "Master Chef" },
];

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="team-section" className="py-16 bg-gray-100">
      <div className=' flex-col justify-center text-center m-12'>
                <span className={`${lobster.className} text-orange-400 font-bold text-4xl  border-b-4 border-amber-400 mb-6`}>
                    Team Member
                </span>
        <h1 className={`${lora.className} font-extrabold text-4xl mt-4`}>
          Our Master Chefs
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
        {data.map((team, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-1000 ease-in-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <Image
              src={team.img}
              alt="Team Member"
              height={280}
              width={280}
              priority
              className="rounded-full mx-auto transition-transform transform hover:scale-105"
            />
            <h1 className="font-bold text-2xl mt-6">{team.name}</h1>
            <h2 className="text-gray-500">{team.des}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
