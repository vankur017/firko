import React from 'react';

export default function HowItWorks() {


//  const CameraIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="40"
//     height="40"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="mx-auto text-white"
//   >
//     <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
//     <circle cx="12" cy="13" r="3" />
//   </svg>
// );
const steps = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto text-white"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    title: "Take Picture",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto text-white"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Post Your Ad",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto text-white"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
    title: "Meet Interest Person",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto text-white"
      >
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
    title: "Earn Money",
  },
];


  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>

        {/* Desktop/Tablet Layout - Flex Row */}
        <div className="hidden md:flex justify-center gap-12 flex-wrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-600 text-white p-6 rounded-lg shadow-lg w-60 text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-2">{step.icon}</div>
              <p className="font-semibold">{step.title}</p>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-blue-600 text-white p-6 rounded-md shadow-md w-48 text-center">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <p className="font-semibold">{step.title}</p>
                </div>

                {/* Vertical arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center my-6">
                    <div className="w-px h-8 bg-[#3C71F0]"></div>
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-[#3C71F0]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
