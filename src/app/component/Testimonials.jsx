'use client';

import Image from 'next/image';
import team1 from "@/app/assets/img/team-1.jpg";
import team3 from "@/app/assets/img/team-3.jpg";
import { Lobster, Lora } from "next/font/google";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const lora = Lora({ subsets: ["latin"], weight: "700" });
const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    profession: 'Software Engineer',
    image: team1,
    feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
  },
  {
    id: 2,
    name: 'John Smith',
    profession: 'Marketing Expert',
    image: team3,
    feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
  },
  {
    id: 3,
    name: 'Jane Doe',
    profession: 'Software Engineer',
    image: team1,
    feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
  },
  {
    id: 4,
    name: 'John Smith',
    profession: 'Marketing Expert',
    image: team3,
    feedback: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      

      <div className=' flex-col justify-center text-center m-12'>
                <span className={`${lobster.className} text-orange-400 font-bold text-4xl  border-b-4 border-amber-400 mb-6`}>
                Testimonial
                </span>
        <h1 className={`${lora.className} font-extrabold text-4xl mt-4`}>
        Our Clients Say!!!
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center">
            <div className="text-orange-500 text-4xl mb-4 md:mb-0 md:mr-6">“</div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full border"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.profession}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}