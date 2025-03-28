"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full text-white p-3 px-6 md:px-16 shadow-md transition-all duration-300 ${scroll ? "bg-black bg-opacity-90" : "bg-black"}`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-amber-500 text-3xl font-bold tracking-wide"><FontAwesomeIcon icon={faUtensils} className="text-amber-500 text-3xl" /> Restaurant</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={"/"} className="hover:text-amber-400 transition">Home</Link>
          <Link href={"/menu"} className="hover:text-amber-400 transition">Menu</Link>
          <Link href={"/about"} className="hover:text-amber-400 transition">About</Link>
          <Link href={"/services"} className="hover:text-amber-400 transition">Services</Link>
          <Link href={"#"} className="hover:text-amber-400 transition">Contact</Link>
          <Link href={"#"} className="hover:text-amber-400 transition">Pages</Link>

          {/* Book Table Button */}
          <Link href={"/table"}>
            <button className="text-white font-bold px-6 py-2 rounded-md bg-amber-500 hover:bg-amber-600 transition">
              Book Table
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
        <div className="flex flex-col items-center gap-4">
          <Link href={"#"} className="hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href={"#"} className="hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href={"#"} className="hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href={"#"} className="hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href={"#"} className="hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href={"#"} className="hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Pages</Link>

          {/* Mobile Book Table Button */}
          <Link href={"#"} onClick={() => setIsOpen(false)}>
            <button className="text-white font-bold px-6 py-2 rounded-md bg-amber-500 hover:bg-amber-600 transition">
              Book Table
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
