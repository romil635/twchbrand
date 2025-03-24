import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Smartwatch  = () => {

 useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

  const accessories = [
    {
      id: 1,
      name: "Leather Strap",
      description: "Premium leather straps for a sophisticated look.",
      price: "$22",
      image:
        "https://cdn.dribbble.com/users/717532/screenshots/3633489/iwatch_mockup2.gif", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Silicone Strap",
      description: "Comfortable and waterproof silicone straps.",
      price: "$20",
      image:
        "https://cdn.dribbble.com/users/717532/screenshots/3633489/iwatch_mockup2.gif", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Metal Strap",
      description: "Durable stainless steel straps for a classic feel.",
      price: "$15",
      image:
        "https://cdn.dribbble.com/users/717532/screenshots/3633489/iwatch_mockup2.gif", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Screen Protector",
      description: "Scratch-resistant screen protectors for your watch.",
      price: "$10",
      image:
        "https://cdn.dribbble.com/users/717532/screenshots/3633489/iwatch_mockup2.gif", // Replace with actual image URL
    },
    {
      id: 5,
      name: "Screen Protector",
      description: "Scratch-resistant screen protectors for your watch.",
      price: "$10",
      image:
        "https://cdn.dribbble.com/users/717532/screenshots/3633489/iwatch_mockup2.gif", // Replace with actual image URL
    },

    {
      id: 6,
      name: "Screen Protector",
      description: "Scratch-resistant screen protectors for your watch.",
      price: "$12",
      image:
        "https://cdn.dribbble.com/users/717532/screenshots/3633489/iwatch_mockup2.gif", // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-black  text-gray-800 py-8">
      <div className="container mx-auto px-4 mt-10">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text" data-aos="fade-down">
          Smart Watchs 
        </h1>

        {/* Accessories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-black shadow-lg overflow-hidden" data-aos="zoom-in"
            >
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-teal-500">
                  {accessory.name}
                </h2>
                <p className="text-gray-100 mt-2">{accessory.description}</p>
                <p className="font-bold mt-4">{accessory.price}</p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
      


export default Smartwatch;
