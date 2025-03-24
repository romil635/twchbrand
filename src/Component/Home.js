import React, { useEffect } from 'react';
import {data, Link} from "react-router-dom" 
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Home() {
  useEffect(() => {
    AOS.init({ duration:1000, easing: 'ease-in-out', once: false });
  }, []);
  return (
    <>
    
      <body className="bg-black text-white">
  
  {/* <!-- Sections --> */}
  <div className="h-auto mb-4">
    {/* <!-- Welcome Section --> */}
    <div className="flex flex-col items-center justify-center text-center w-full " >
        <div classNameName="sectin" style={{marginTop: "130px"}}>

      <span className="absolute py-4 flex bg-gradient-to-r blur-xl from-blue-400 via-teal-400 to-pink-400 bg-clip-text text-4xl md:text-6xl font-extrabold text-transparent select-none" data-aos="fade-down">
        WELCOME TO THE TECHBRAND!
      </span>
      <h1 className="relative py-4 bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl md:text-6xl font-extrabold text-transparent select-auto" data-aos="zoom-in">
        WELCOME TO THE TECHBRAND! 
      </h1>
    </div>
  
      {/* <!-- Description Section --> */}
    <h1 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500 text-center mb-10 mx-4 md:mx-20" data-aos="fade-up">
      "Discover Timeless Elegance – Where Precision Meets Style."
    </h1>

    <div className="text-center " data-aos="zoom-in-up">
    <Link to="WatchAccessories"> <a href="accesory" className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 text-black font-semibold shadow-lg transition hover:scale-105">Accesory</a></Link>
    <Link to="Smartwatch"> <a href="accesory" className="bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 text-black hover:bg-teal-600 font-semibold transition ml-4 hover:scale-105">Smart Watches</a></Link>
    </div>
        </div>
  
    {/* <!-- Image Section --> */}
    <div className="flex justify-center mt-2" data-aos="zoom-in">
      <img className="max-w-full h-auto" src="https://cdn.mos.cms.futurecdn.net/uy3F3b9saJSyYyL6a237qd.gif" alt="TechBrand Graphic"/>
    </div>
  </div>
                        
  <div className="bg-black text-white min-h-screen flex items-center justify-center" data-aos="fade-up">
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto fade-in">
      {/* <!-- Left Section --> */}
      <div className="flex-1 flex flex-col justify-center items-start p-8" data-aos="fade-right">
        <h1 className="text-5xl font-bold text-pink-500 mb-4">MASTER <span className="text-white">THE SKILLS</span></h1>
        <p className="text-gray-400 font-bold mb-6">"Smart technology on your wrist—track fitness, monitor health, and stay connected in style.</p>
     <div classNameName="flex space-x-4">
                <Link to="LoginPage">
                
                 <a href="accesory" className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 mr-4 text-black font-semibold shadow-lg transition hover:scale-105">Login</a></Link>

                <Link to="LoginPage">
                   
                 <a href="accesory" className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 text-black font-semibold shadow-lg transition hover:scale-105">Register</a></Link>
                   
            </div>
      </div>
  
      {/* <!-- Center Section --> */}
      <div className="flex-1 relative p-8" data-aos="fade-up">
        <img 
          src="https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-duotone-style-pink-smart-watch-with-strap-3d-rendered-on-blue-image_3728239.jpg" 
          alt="Gamer" 
          className="rounded-lg shadow-lg object-cover w-full h-auto" 
        />
      </div>

      {/* <!-- Right Section --> */}
      <div className="flex-1 flex justify-center items-center mt-0 bg-black" data-aos="fade-left">

        <img src="https://i.pinimg.com/originals/66/8b/10/668b10cdb594043dcc4d0297afc3c8e5.gif" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-auto h-auto"/>
 
    </div>
  </div>
</div>

        <section className=" text-white min-h-auto flex items-center justify-center" data-aos="fade-up">
          <div className="max-w-7xl mx-auto p-8">

            <h1
            className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent text-center select-auto">
           | Round shape
          </h1>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* <!-- Product 1 --> */}
              <div className="backdrop-blur-sm p-4 flex flex-col items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPXYZv4C_qP53tvGEVGMN6_mMl6JcVfsvorNVpSB2eteDcPra9Ig9nMf0Jdbu-9qwcIc&usqp=CAU" alt="Echo Headset" className="mb-4" />
                <h2 className="text-lg font-semibold text-white">TechB Humble 1</h2>
                <p className="text-gray-400 mb-4">$39.99</p>
                <Link to="Product"><button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 hover:scale-105 hover:shadow-lg text-black font-semibold py-2 px-6 transition-transform duration-300">
                  Add to Cart
                </button> </Link>
              </div>
              {/* <!-- Product 2 --> */}
              <div className="backdrop-blur-sm p-4 flex flex-col items-center">
                <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbdd2cef8/images/Fastrack/Catalog/38077AP03_1.jpg?sw=600&sh=600" alt="Impact Gaming Chair" className="mb-4" />
                <h2 className="text-lg font-semibold text-white">TechB BT-Calling</h2>
                <p className="text-gray-400 mb-4">$59.99</p>
                <Link to="Product"> <button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 hover:scale-105 hover:shadow-lg text-black font-semibold  py-2 px-6 transition-transform duration-300">
                  Add to Cart
                </button> </Link>
              </div>
              {/* <!-- Product 3 --> */}
              <div className="backdrop-blur-sm p-4 flex flex-col items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsFm011P1uzrPC62eKJhcP277MHxEdIm2HgJsBMEoo9vjQA0fKs5stokEb2E9VNlodHY&usqp=CAU" alt="Mach Gaming Chair" className=" mb-4" />
                <h2 className="text-lg font-semibold text-white">TechB BT Pro </h2>
                <p className="text-gray-400 mb-4"><span className="line-through">$80.00</span> $74.99</p>
                <Link to="Product"> <button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 hover:scale-105 hover:shadow-lg text-black font-semibold py-2 px-6 transition-transform duration-300">
                  Add to Cart
                </button> </Link>
              </div>
              {/* <!-- Product 4 --> */}
         
              <div className="backdrop-blur-sm p-4 flex flex-col items-center">
                <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbdd2cef8/images/Fastrack/Catalog/38077AP03_1.jpg?sw=600&sh=600" alt="Impact Gaming Chair" className="mb-4" />
                <h2 className="text-lg font-semibold text-white">TechB BT-Calling</h2>
                <p className="text-gray-400 mb-4">$59.99</p>
                <Link to="Product"> <button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 hover:scale-105 hover:shadow-lg text-black font-semibold py-2 px-6 transition-transform duration-300">
                  Add to Cart
                </button> </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="relative p-8 bg-black" data-aos="zoom-in">
          <img 
            src="https://www.apple.com/v/apple-watch-ultra-2/f/images/overview/design/design__b9gbjygmamxe_large.jpg" 
            alt="Gamer" 
            className="rounded-lg shadow-lg object-cover w-full h-auto"  
          />
        </div>
    
    <div className="text-white flex items-center justify-center min-h-screen bg-teal-950">
          <div className="relative max-w-4xl w-full mx-auto p-8 bg-black shadow-lg ">
            {/* <!-- Background Blur Effect --> */}
            <div className="absolute inset-0 opacity-20 blur-xl"></div>
        
            {/* <!-- Main Content --> */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* <!-- Image Section --> */}
              <div className="relative overflow-hidden rounded-lg" data-aos="zoom-in">
                <img 
                  src="https://i.pinimg.com/originals/16/24/3c/16243c93032493d0be5a3f67d9ca1300.gif" 
                  alt="Gamer" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
        
              {/* <!-- Text and Buttons --> */}
              <div>
                <div className="text-center lg:text-left" data-aos="fade-up">
                  <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-4xl lg:text-6xl inline-block text-transparent font-bold bg-clip-text mb-4">Exclusive Deal</h1>
                  <p className="text-lg lg:text-xl mb-6 text-teal-500">Don't miss out on this limited-time offer!</p>
        
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4" data-aos="zoom-in">
                    <button className="py-2 px-6 border-blue-500 rounded border-2 text-blue-500 hover:bg-blue-500 font-semibold hover:text-black transition">Order Now</button>
                    <button className="py-2 px-6 border-teal-500 rounded border-2 text-teal-500 hover:bg-teal-500 font-semibold hover:text-black transition">View Features</button>
                    <button className="py-2 px-6 border-pink-500 rounded border-2 text-pink-500 hover:bg-pink-500 font-semibold hover:text-black transition">Read Reviews</button>
                  </div>
                </div>
        
                {/* <!-- Features Section --> */}
                <div id="features" className="mt-12 text-center lg:text-left" data-aos="zoom-in">
                  <h2 className="text-2xl lg:text-3xl font-bold text-teal-500 mb-6">Why Choose Us?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-teal-950 p-4 rounded-lg shadow-lg" data-aos="zoom-in">
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">High Performance</h3>
                      <p className="text-gray-300">Experience top-notch speed and precision for all your gaming needs.</p>
                    </div>
                     <div className="bg-teal-950 p-4 rounded-lg shadow-lg" data-aos="zoom-in">
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">Exclusive Collections</h3>
                      <p className="text-gray-300">Get premium-quality gaming gear without breaking the bank.</p>
                    </div>
                    <div className="bg-teal-950 p-4 rounded-lg shadow-lg" data-aos="zoom-in">

                      <h3 className="text-xl font-bold text-yellow-400 mb-2">Customer Support</h3>
                      <p className="text-gray-300">We provide 24/7 support to help you with all your gaming needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* <!-- Features Section --> */}
<section id="features" className="py-16 bg-black relative">
  {/* Blurry Background */}
  <div className="absolute inset-0 bg-teal-700 opacity-30 blur-sm"></div>

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-3xl font-bold text-center mb-12 text-teal-400 animate-fade-in">Our Features</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-teal-800 p-6 shadow-lg text-center rounded-xl transition transform hover:scale-105 hover:shadow-teal-700" data-aos="fade-left">
        <svg className="mx-auto h-12 w-12 text-black mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3v2.75M14.25 3v2.75M3 9.75h2.75M18.25 9.75H21M6.75 21v-2.75M17.25 21v-2.75M3 14.25h2.75M18.25 14.25H21" />
        </svg>
        <h3 className="text-xl font-bold mb-2 text-black">Cloud Integration</h3>
        <p className="text-black">Seamless integration with cloud platforms for enhanced scalability.</p>
      </div>
      {/* Feature 2 */}
      <div className="bg-teal-800 p-6 shadow-lg text-center rounded-xl transition transform hover:scale-105 hover:shadow-teal-700" data-aos="zoom-in">
        <svg className="mx-auto h-12 w-12 text-black mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3v2.75M14.25 3v2.75M3 9.75h2.75M18.25 9.75H21M6.75 21v-2.75M17.25 21v-2.75M3 14.25h2.75M18.25 14.25H21" />
        </svg>
        <h3 className="text-xl font-bold mb-2 text-black">AI-Powered Analytics</h3>
        <p className="text-black">Gain insights with our powerful AI-driven data analytics tools.</p>
      </div>
      {/* Feature 3 */}
      <div className="bg-teal-800 p-6 shadow-lg text-center rounded-xl transition transform hover:scale-105 hover:shadow-teal-700" data-aos="fade-right">
        <svg className="mx-auto h-12 w-12 text-black mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3v2.75M14.25 3v2.75M3 9.75h2.75M18.25 9.75H21M6.75 21v-2.75M17.25 21v-2.75M3 14.25h2.75M18.25 14.25H21" />
        </svg>
        <h3 className="text-xl font-bold mb-2 text-black">24/7 Support</h3>
        <p className="text-black">Our dedicated support team is available around the clock.</p>
      </div>
    </div>
  </div>
</section>

{/* <!-- Hero Section --> */}
<section className="flex items-center justify-center text-center relative py-16 bg-gradient-to-r from-gray-900 to-black">
  {/* Blurry Background */}
  <div className="absolute inset-0 bg-pink-700 opacity-25 blur-sm"></div>
  <div className="container mx-auto px-4 relative z-10" data-aos="zoom-in">
    <h1 className="py-4 bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl md:text-6xl font-extrabold text-transparent select-auto">
      Contact With Us!
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in">
      Empowering businesses with cutting-edge technology solutions.
    </p>
    <div className="text-center space-x-4" data-aos="zoom-out">
      <a href="https://wa.me/+918320450188" className="bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-3 text-black font-semibold shadow-lg transition hover:scale-110">
        WhatsApp       
      </a> 
      <a href="mailto:Dhameliya1412@gmail.com" className="bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-3 text-black font-semibold transition hover:scale-110">
        Email
      </a>
    </div>
  </div>
</section>
 
  {/* <!-- Cursor Bracket --> */}
  <div id="cursor" className="cursor-bracket"></div>

</body>

    </>
  )
}

export default Home;




        