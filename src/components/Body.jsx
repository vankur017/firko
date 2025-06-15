
// CombinedLandingPage.tsx
import React from "react";
import Logo from "../assets/firko.png";
import RighPhone from "../assets/RightPhone.png";
import RightImage from "../assets/RightImage.png";
import UsePuslyIcon from "../assets/UsePuslyIcon.png";
import Categories from "../assets/Categories.png";
import PlayStore from "../assets/PlayStore.png";
import IOS from "../assets/AppleStore.png";
import Hand from "../assets/Hand1.png";
import FooterPhone from "../assets/FooterPhone.png";
import { Camera, Smartphone, Handshake, Wallet, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import HowItWorks from "./HowItWorks";

// Step data
const steps = [
  { label: "Take Picture", icon: <Camera size={40} /> },
  { label: "Post Your Ad", icon: <Smartphone size={40} /> },
  { label: "Meet Interest Person", icon: <Handshake size={40} /> },
  { label: "Earn Money", icon: <Wallet size={40} /> },
];

const Body = () => {
  return (
    <div className="font-sans text-[#092C4C] bg-white">
      {/* Hero Section */}
      <section className="w-full flex justify-center px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between max-w-7xl w-full">
          <div className="lg:w-1/2 text-center lg:text-left">
            <img src={Logo} alt="logo" className="w-64 mx-auto lg:mx-0" />
            <p className="tracking-widest text-sm mt-2">Chat  karo, deal fix karo simple!</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-8">
              Manpower & Products: Buy, Sell, Hire, Serve
            </h1>
            <p className="text-base text-[#4C565F] mt-4 max-w-md mx-auto lg:mx-0">
              Start earning by offering services, selling items, or discovering amazing bargains nearby.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <img className="w-28 h-auto sm:w-36 sm:h-10" src={PlayStore} alt="Play Store" />
              <img className="w-28 h-auto sm:w-36 sm:h-10" src={IOS} alt="App Store" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img src={RighPhone} alt="App Preview" className="w-80" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 px-4">
        <div className="flex justify-center">
          <img className="w-full max-w-xl" src={Categories} alt="Categories" />
        </div>
        <div className="mt-6 text-center">
          <p className="text-[#AAB0C5] text-sm">For more information</p>
          <div className="mt-2 flex gap-4 justify-center">
            <img className="w-28 h-auto sm:w-36 sm:h-10" src={PlayStore} alt="Play Store" />
            <img className="w-28 h-auto sm:w-36 sm:h-10" src={IOS} alt="App Store" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="flex flex-col lg:flex-row items-center gap-10 px-4 py-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img className="w-64 sm:w-80 md:w-96" src={Hand} alt="Illustration" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold">How it works</h2>
          <p className="text-[#4C565F] mt-4 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            Start with the essentials, no more hassle, and the ultimate goal. Powering solutions through buying, selling, hiring, and serving.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-blue-500 text-white rounded shadow-md"
              >
                {step.icon}
                <p className="mt-2 text-sm">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <HowItWorks/>

      {/* Use Pusly Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="flex justify-center">
          <img className="w-full max-w-4xl" src={UsePuslyIcon} alt="Use Pusly" />
        </div>
        <div className="text-center mt-6">
          <p className="text-[#AAB0C5] text-xs sm:text-sm">For more information</p>
          <div className="flex gap-4 justify-center mt-2">
            <img className="w-28 h-auto sm:w-36 sm:h-10" src={PlayStore} alt="Play Store" />
            <img className="w-28 h-auto sm:w-36 sm:h-10" src={IOS} alt="App Store" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img className="w-56 sm:w-72 md:w-80" src={FooterPhone} alt="Phone" />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-3xl sm:text-4xl font-bold">
              Download the <br className="hidden sm:inline" /> Classified App Now
            </p>
            <p className="text-sm text-[#092C4C] mt-2">
              Be the first one to explore one of the best classified applications
            </p>
            <div className="mt-6 flex gap-4 justify-center lg:justify-start">
              <img className="w-28 h-auto sm:w-36 sm:h-10" src={PlayStore} alt="Play Store" />
              <img className="w-28 h-auto sm:w-36 sm:h-10" src={IOS} alt="App Store" />
            </div>
            <hr className="my-6 border-[#EAEAEA]" />
            <div className="flex flex-wrap gap-x-4 justify-center lg:justify-start text-xs text-[#092C4C]">
              <p>Home</p>
              <p>Categories</p>
              <p>How It Works</p>
              <p>Screens</p>
              <p>User Reviews</p>
            </div>
            <p className="text-xs mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
            <div className="flex gap-x-2 mt-4 justify-center lg:justify-start">
              {[Youtube, Facebook, Instagram, Twitter].map((Icon, i) => (
                <div key={i} className="rounded-full border border-[#758FA4] w-10 h-10 flex justify-center items-center hover:bg-[#3C71F0]">
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
