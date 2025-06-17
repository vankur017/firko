import React from "react";
import Logo from "../assets/firko.png";
import RighPhone from "../assets/RightPhone.png";
import Categories from "../assets/Categories.png";
import PlayStore from "../assets/PlayStore.png";
import IOS from "../assets/AppleStore.png";
import UsePuslyIcon from "../assets/usefirko.png";
import FooterPhone from "../assets/FooterPhone.png";
import { Camera, Smartphone, Handshake, Wallet, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

import HowItWorks from "./HowItWorks";
import FaqSection from "./FaqSection";

const Body = () => {
  return (
    <div className="font-sans text-[#092C4C] bg-white">

      {/* Hero Section */}
     <section className="w-full bg-white">
  <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto">

    {/* Left Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 text-center lg:text-left">
      <img src={Logo} alt="logo" className="w-40 sm:w-52 lg:w-64 mx-auto lg:mx-0 mb-4" />
      <p className="tracking-wide text-sm sm:text-base text-[#4C565F]">Chat karo, deal fix karo simple!</p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 leading-tight text-[#092C4C]">
        Manpower & Products: <br className="hidden sm:inline" /> Buy, Sell, Hire, Serve
      </h1>
      <p className="text-base sm:text-lg text-[#4C565F] mt-4 max-w-md mx-auto lg:mx-0">
        Start earning by offering services, selling items, or discovering amazing bargains nearby.
      </p>
      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
        <img className="w-28 sm:w-36 transition hover:scale-105" src={PlayStore} alt="Play Store" />
        <img className="w-28 sm:w-36 transition hover:scale-105" src={IOS} alt="App Store" />
      </div>
    </div>

    {/* Right Image with Dynamic Background */}
    <div className="w-full lg:w-1/2 bg-[#3C71F0] flex items-center justify-center py-16 px-6 lg:px-0 relative overflow-hidden">
      <div className="relative z-10">
        <img
          src={RighPhone}
          alt="App Preview"
          className="w-72 sm:w-80 lg:w-[360px] transform transition duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Optional background gradient/shape effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3C71F0] to-[#3C71F0]/80 z-0 rounded-bl-[100px] lg:rounded-bl-[160px]"></div>
    </div>

  </div>
</section>

      {/* Categories Section */}
      <section className="py-10 px-4 sm:px-10 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <img className="w-full rounded-xl shadow-md" src={Categories} alt="Categories" />
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Use FIRKO Section */}
     <section className="py-20 px-4 sm:px-10 lg:px-24 xl:px-40 bg-gray-50">
  <div className="max-w-6xl mx-auto flex justify-center items-center">
    <div className="w-full">
      <img
        className="w-full max-w-5xl mx-auto rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        src={UsePuslyIcon}
        alt="Use FIRKO"
      />
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer Section */}
      <footer className="bg-white px-4 sm:px-10 lg:px-24 xl:px-32 py-16 border-t">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img className="w-56 sm:w-72 md:w-80" src={FooterPhone} alt="Footer Phone" />
          </div>

          {/* Text and Links */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Download the <br className="hidden sm:inline" /> Classified App Now
            </h2>
            <p className="text-sm text-[#092C4C]">
              Be the first one to explore one of the best classified applications.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <img className="w-28 sm:w-36" src={PlayStore} alt="Play Store" />
              <img className="w-28 sm:w-36" src={IOS} alt="App Store" />
            </div>
            <hr className="my-6 border-[#EAEAEA]" />
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-xs">
              <span>Home</span>
              <span>Categories</span>
              <span>How It Works</span>
              <span>Screens</span>
              <span>User Reviews</span>
            </div>
            <p className="text-xs mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>

            <div className="flex gap-3 justify-center lg:justify-start mt-4">
              {[Youtube, Facebook, Instagram, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="rounded-full border border-[#758FA4] w-10 h-10 flex justify-center items-center hover:bg-[#3C71F0] transition"
                >
                  <Icon size={20} color="#758FA4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Body;
