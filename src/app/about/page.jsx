import React from 'react'
import About from '../component/About'
import Image from 'next/image';
import bg from "@/app/assets/img/bg.jpg";
import { Lobster, Lora } from 'next/font/google';
import Team from '../component/Team';
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function page() {
  return (
    <div>
        <div
                          className="relative w-full h-auto min-h-[450px] opacity-90 flex flex-col md:flex-row justify-center items-center px-6 md:px-16 text-white"
                          style={{
                            backgroundImage: `url(${bg.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                            <h1 className={`${lobster.className} font-bold text-5xl`}>About</h1>
                        </div>
        <About/>
        <Team/>
    </div>
  )
}

export default page