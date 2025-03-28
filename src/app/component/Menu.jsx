import React from 'react'

import about1 from "@/app/assets/img/pizza1.jpg";
import about2 from "@/app/assets/img/biryani.jpg";
import about3 from "@/app/assets/img/bbq.png";
import about4 from "@/app/assets/img/sand.png";
import Image from 'next/image';
import { Lobster, Lora } from 'next/font/google';
const poppins = Lobster({ subsets: ["latin"], weight: "400" });
const lora = Lora({ subsets: ["latin"], weight: "700" });

const data = [
    { img: about1, name: "Pizza", price: 1500 },
    { img: about2, name: "Biryani", price: 400 },
    { img: about3, name: "BBQ", price: 600 },
    { img: about4, name: "SandWhich", price: 200 }
]
function Menu() {
    return (
        <section>
            <div className=' flex-col justify-center text-center m-7'>
                <span className={`${poppins.className} text-orange-400 font-bold text-4xl  border-b-4 border-amber-400 mb-6`}>
                    Food Menu 
                </span>
                <h1 className={`${lora.className} font-extrabold text-4xl mt-7`}>Most Popular Items</h1>
            </div>

            {/* =========================================================================== */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-4 p-5  ease-in-out bg-white"
                    >
                        {/* Image Section */}
                        <div className="w-28 h-28  flex justify-center items-center">
                            <Image src={item.img} alt="food" height={110} width={110} className="object-cover" priority />
                        </div>

                        {/* Details Section */}
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between items-center">
                                <h1 className="font-extrabold text-xl text-gray-800">{item.name}</h1>
                                <h2 className="font-bold  text-xl text-amber-500">PKR {item.price}</h2>
                            </div>

                            {/* Separator Line */}
                            <hr className="my-2 border-gray-300" />

                            {/* Button Section */}
                            <div className='flex justify-between'>
                                <p>Good </p>
                                <div className="flex justify-end y gap-3">
                                    <button className="bg-amber-500 text-white hover:bg-amber-400 px-2 py-1 md:py-2 md:px-6 rounded-lg font-semibold transition-transform transform hover:scale-105">
                                        Buy Now
                                    </button>
                                    <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-3 md:py-2 md:px-6 rounded-lg font-semibold transition-transform transform hover:scale-105">
                                        Add to Cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center text-center mb-8'>
                <button className="bg-amber-500 text-white hover:bg-amber-400 px-6 py-2 md:py-3 md:px-16 rounded-lg font-semibold transition-transform transform hover:scale-105">
                    More Items
                </button>
            </div>

            {/* ==================================================================================== */}


        </section>
    )
}

export default Menu