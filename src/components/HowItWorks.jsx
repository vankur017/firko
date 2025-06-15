import React from 'react';

export default function HowItWorks() {
  const steps = [
    { icon: "📷", title: "Take Picture" },
    { icon: "📱", title: "Post Your Ad" },
    { icon: "🤝", title: "Meet Interest Person" },
    { icon: "👛", title: "Earn Money" }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        
        {/* Desktop/Tablet Zigzag Layout */}
     <div className="hidden md:block">
          <div className="relative max-w-4xl mx-auto" style={{ height: '500px' }}>
            {steps.map((step, index) => (
              <div key={index}>
                {/* Step Card */}
                <div 
                  className={`absolute bg-blue-600 text-white p-6 rounded-md shadow-md w-48 text-center transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 
                      ? 'left-0' 
                      : 'right-0'
                  }`}
                  style={{ 
                    top: `${index * 120}px`
                  }}
                >
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <p className="font-semibold">{step.title}</p>
                </div>

                {/* Connection Dots */}
                <div 
                  className={`absolute w-3 h-3 bg-[#3C71F0] rounded-full ${
                    index % 2 === 0 ? 'left-48' : 'right-48'
                  }`}
                  style={{ 
                    top: `${index * 120 + 50}px`
                  }}
                />

                {/* Connecting Lines */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal line from card to center */}
                    <div 
                      className={`absolute h-0.5 bg-[#3C71F0] ${
                        index % 2 === 0 ? 'left-48' : 'right-48'
                      }`}
                      style={{
                        width: 'calc(50% - 96px)',
                        top: `${index * 120 + 51}px`
                      }}
                    />
                    
                    {/* Vertical connecting line */}
                    <div 
                      className="absolute w-0.5 bg-[#3C71F0] left-1/2 transform -translate-x-0.5"
                      style={{
                        height: '120px',
                        top: `${index * 120 + 51}px`
                      }}
                    />
                    
                    {/* Horizontal line from center to next card */}
                    <div 
                      className={`absolute h-0.5 bg-[#3C71F0] ${
                        (index + 1) % 2 === 0 ? 'left-0' : 'right-0'
                      }`}
                      style={{
                        width: 'calc(50% - 96px)',
                        top: `${(index + 1) * 120 + 51}px`
                      }}
                    />

                    {/* Center connection dot */}
                    <div 
                      className="absolute w-2 h-2 bg-[#3C71F0] rounded-full left-1/2 transform -translate-x-1"
                      style={{ 
                        top: `${index * 120 + 110}px`
                      }}
                    />
                  </>
                )}

                {/* Final connection dot for last step */}
                {index === steps.length - 1 && (
                  <div 
                    className={`absolute w-3 h-3 bg-[#3C71F0] rounded-full ${
                      index % 2 === 0 ? 'left-48' : 'right-48'
                    }`}
                    style={{ 
                      top: `${index * 120 + 50}px`
                    }}
                  />
                )}
              </div>
            ))}
          </div>
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