import React from "react";
// import {Link} from "react-router-dom" 



const WatchAccessories = () => {
  const accessories = [
    {
      id: 1,
      name: "Leather Strap",
      description: "Premium leather straps for a sophisticated look.",
      price: "$22",
      image:
        "https://cdn.shopify.com/s/files/1/1787/2693/files/3-Deck-Revix.gif?v=1681104383", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Silicone Strap",
      description: "Comfortable and waterproof silicone straps.",
      price: "$20",
      image:
        "https://cdn.shopify.com/s/files/1/1787/2693/files/3-Deck-Revix.gif?v=1681104383", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Metal Strap",
      description: "Durable stainless steel straps for a classic feel.",
      price: "$15",
      image:
        "https://cdn.shopify.com/s/files/1/1787/2693/files/3-Deck-Revix.gif?v=1681104383", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Screen Protector",
      description: "Scratch-resistant screen protectors for your watch.",
      price: "$10",
      image:
        "https://cdn.shopify.com/s/files/1/1787/2693/files/3-Deck-Revix.gif?v=1681104383", // Replace with actual image URL
    },
    {
      id: 5,
      name: "Screen Protector",
      description: "Scratch-resistant screen protectors for your watch.",
      price: "$10",
      image:
        "https://cdn.shopify.com/s/files/1/1787/2693/files/3-Deck-Revix.gif?v=1681104383", // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-black  text-gray-800 py-8 ">
      <div className="container mx-auto px-4 mt-10">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
          Watch Accessories
        </h1>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-black shadow-lg overflow-hidden"
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
                <p className="text-teal-500 font-bold mt-4">{accessory.price}</p>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-black font-bold hover:from-teal-600 hover:to-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchAccessories;
