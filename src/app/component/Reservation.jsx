'use client';

import { useState } from "react";
import Image from "next/image";
import man from "@/app/assets/img/table.jpg";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "1",
    specialRequest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-blue-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Side - Image with Play Button */}
        <div className="relative md:w-1/2">
          <Image
            src={man} // Update with actual image path
            alt="Dining Experience"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-orange-400 text-white text-3xl rounded-full p-4 px-5 hover:shadow-amber-500  shadow-lg">
              ▶
            </button>
          </div>
        </div>

        {/* Right Side - Reservation Form */}
        <div className="bg-gray-900 text-white p-8 md:w-1/2">
          <h3 className="text-orange-400 font-semibold text-lg">Reservation</h3>
          <h2 className="text-2xl font-bold mt-2 mb-6">Book A Table Online</h2>

          <form className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 p-2 text-black bg-white rounded outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 p-2 text-black bg-white  rounded outline-none"
              />
            </div>

            <div className="flex space-x-2">
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-1/2 p-2 text-black bg-white  rounded outline-none"
              />
              <select
                name="people"
                value={formData.people}
                onChange={handleChange}
                className="w-1/2 p-2 text-black bg-white  rounded outline-none"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {`People ${i + 1}`}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="specialRequest"
              placeholder="Special Request"
              value={formData.specialRequest}
              onChange={handleChange}
              className="w-full p-2 text-black bg-white  rounded outline-none"
              rows="3"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-amber-500 py-2 rounded text-white font-bold"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
