'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Lobster, Lora } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const lora = Lora({ subsets: ["latin"], weight: "700" });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h1 className={`${lobster.className} text-orange-400 font-bold text-lg mb-4`}>
            Company
          </h1>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact Us</Link></li>
            <li><Link href="/reservation" className="hover:text-orange-400">Reservation</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className={`${lobster.className} text-orange-400 font-bold text-lg mb-4`}>
            Contact
          </h1>
          <p className="text-gray-400">123 Street, New York, USA</p>
          <p className="text-gray-400">+012 345 67890</p>
          <p className="text-gray-400">info@example.com</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://twitter.com" target="_blank"><FaTwitter className="text-xl cursor-pointer hover:text-orange-400" /></Link>
            <Link href="https://facebook.com" target="_blank"><FaFacebookF className="text-xl cursor-pointer hover:text-orange-400" /></Link>
            <Link href="https://youtube.com" target="_blank"><FaYoutube className="text-xl cursor-pointer hover:text-orange-400" /></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedinIn className="text-xl cursor-pointer hover:text-orange-400" /></Link>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h1 className={`${lobster.className} text-orange-400 font-semibold text-lg mb-4`}>
            Opening
          </h1>
          <p className="text-gray-400">Monday - Saturday: 09AM - 09PM</p>
          <p className="text-gray-400">Sunday: 10AM - 08PM</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className={`${lobster.className} text-orange-400 font-bold text-lg mb-4`}>
            Newsletter
          </h1>
          <p className="text-gray-400 mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="flex bg-white p-2 rounded-lg">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow p-2 text-gray-900 w-full outline-none"
            />
            <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">SIGNUP</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>&copy; Muhammad Awais, All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/cookies" className="hover:text-orange-400">Cookies</Link>
          <Link href="/help" className="hover:text-orange-400">Help</Link>
          <Link href="/faqs" className="hover:text-orange-400">FAQs</Link>
        </div>
      </div>
    </footer>
  );
}
