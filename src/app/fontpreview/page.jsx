"use client";
import React from "react";
import { 
    Poppins, Lora, Inter, Roboto, Montserrat, 
    Playfair_Display, Oswald, Raleway, Pacifico, 
    DM_Sans, Nunito, Open_Sans, Source_Sans_3, 
    Work_Sans, Abril_Fatface, Dancing_Script, Lobster 
  } from "next/font/google";
  
  // Define fonts
  const poppins = Poppins({ subsets: ["latin"], weight: "600" });
  const lora = Lora({ subsets: ["latin"], weight: "600" });
  const inter = Inter({ subsets: ["latin"], weight: "600" });
  const roboto = Roboto({ subsets: ["latin"], weight: "600" });
  const montserrat = Montserrat({ subsets: ["latin"], weight: "600" });
  const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
  const oswald = Oswald({ subsets: ["latin"], weight: "600" });
  const raleway = Raleway({ subsets: ["latin"], weight: "600" });
  const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
  
  const dmSans = DM_Sans({ subsets: ["latin"], weight: "600" });
  const nunito = Nunito({ subsets: ["latin"], weight: "600" });
  const openSans = Open_Sans({ subsets: ["latin"], weight: "600" });
  const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: "600" });
  const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });
  const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });
  const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });
  const lobster = Lobster({ subsets: ["latin"], weight: "400" });
  
  const fonts = [
    { name: "Poppins", className: poppins.className },
    { name: "Lora", className: lora.className },
    { name: "Inter", className: inter.className },
    { name: "Roboto", className: roboto.className },
    { name: "Montserrat", className: montserrat.className },
    { name: "Playfair Display", className: playfair.className },
    { name: "Oswald", className: oswald.className },
    { name: "Raleway", className: raleway.className },
    { name: "Pacifico", className: pacifico.className },
    { name: "DM Sans", className: dmSans.className },
    { name: "Nunito", className: nunito.className },
    { name: "Open Sans", className: openSans.className },
    { name: "Source Sans 3", className: sourceSans.className },
    { name: "Work Sans", className: workSans.className },
    { name: "Abril Fatface", className: abrilFatface.className },
    { name: "Dancing Script", className: dancingScript.className },
    { name: "Lobster", className: lobster.className },
  ];
  
 
  

export default function page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Google Font Preview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fonts.map((font, index) => (
          <div key={index} className="p-4 border rounded-lg shadow">
            <h2 className={`${font.className} text-xl`}>{font.name}</h2>
            <p className={`${font.className} text-gray-700`}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
