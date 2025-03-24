import React, { useEffect, useRef } from 'react';
import './Product.css';
import Swiper from 'swiper';
// import 'swiper/swipḍer-bundle.min.css';
import 'swiper/css';


function Product() {
  const swiperThumbsRef = useRef(null);
  const swiperMainRef = useRef(null);

  useEffect(() => {
    const swiperThumbs = new Swiper(swiperThumbsRef.current, {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 5,
    }); 

    const swiperMain = new Swiper(swiperMainRef.current, {
      slidesPerView: 1,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
               
    // Cleanup on Component 

    return () => {
      swiperThumbs.destroy();
      swiperMain.destroy();
    };
  }, []);

  return (
    <div>
      <section ClassName="py-24 bg-black text-white">
        <div ClassName="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ClassName="grid grid-cols-1 lg:grid-cols-2">
            <div ClassName="slider-box w-full h-full max-lg:mx-auto mx-0"> 
              <div ClassName="swiper main-slide-carousel swiper-container relative mb-6" ref={swiperMainRef}>
                <div ClassName="swiper-wrapper">
                  <div ClassName="swiper-slide">
                    <div ClassName="block">
                      <img
                        src="https://media.wired.com/photos/652845a922822ecc9d50cffe/master/w_2560%2Cc_limit/Google-Pixel-Watch-2-Top-Gear.jpg"
                        alt="Summer Travel Bag image"
                        ClassName="max-lg:mx-auto object-cover"
                      />
                    </div>
                  </div>
                  <div ClassName="swiper-slide">
                    <div ClassName="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622397.png"
                        alt="Summer Travel Bag image"
                        ClassName="max-lg:mx-auto rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                  <div ClassName="swiper-slide">
                    <div ClassName="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622408.png"
                        alt="Summer Travel Bag image"
                        ClassName="max-lg:mx-auto rounded-2xl object-cover"
                      /> 
                    </div>
                  </div>
                  <div ClassName="swiper-slide">
                    <div ClassName="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622419.png"
                        alt="Summer Travel Bag image"
                        ClassName="max-lg:mx-auto rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                  <div ClassName="swiper-slide">
                    <div ClassName="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622437.png"
                        alt="Summer Travel Bag image"
                        ClassName="max-lg:mx-auto rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div ClassName="nav-for-slider" ref={swiperThumbsRef}>
                <div ClassName="swiper-wrapper"> 
                  <div ClassName="swiper-slide thumbs-slide">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSsomhMATrZPs-Ze_xZBMi-TCtRGNsfBmoLzHLv2MIJBFi0137CBUtt9XGTsJGVxkb2-4hz7OzA1m3hrtY8-0Ci91Q5_ZfEGR65-Yzj1bmEe4X6IoLWeex"
                      alt="Summer Travel Bag image"
                      ClassName="cursor-pointer rounded-xl transition-all duration-500 object-cover"
                    />
                  </div>
                  <div ClassName="swiper-slide thumbs-slide">
                    <img
                      src="https://lh3.googleusercontent.com/F8lcx76lVDoI-6VUZr7EezEC4BeepxQObnmo2M8UPNiFl3bsykUbd6OKa4HCUDkKFUIO0yqcS3TmsyfCojnxtL9bxluVsAJT7KQw=rw-e365-w3000"
                      alt="Summer Travel Bag image"
                      ClassName="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                    />
                  </div>
                  <div ClassName="swiper-slide thumbs-slide">
                    <img
                      src="https://media.wired.com/photos/652845a922822ecc9d50cffe/master/w_2560%2Cc_limit/Google-Pixel-Watch-2-Top-Gear.jpg"
                      alt="Summer Travel Bag image"
                      ClassName="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                    />
                  </div>
                  <div ClassName="swiper-slide thumbs-slide">
                    <img
                      src="https://professionalwatches.com/wp-content/uploads/2022/10/Google-Pixel-Watch-large-dial.png"
                      alt="Summer Travel Bag image"
                      ClassName="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                    />
                  </div>
                  <div ClassName="swiper-slide thumbs-slide">
                    <img
                      src="https://lh3.googleusercontent.com/iZNVALtZemoy12x6AIEcRlhUzazo9_M0uC8AozEQ8hZh4okcKkyEEP3l_tvsGAq_5cVEIS2wB6Qv3o8Mv1s3bb60nS5pAc_qw6I=rw"
                      alt="Summer Travel Bag image"
                      ClassName="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div ClassName="flex justify-center items-center">
              <div ClassName="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                <div ClassName="flex items-center justify-between gap-6 mb-6">
                  <div ClassName="text">
                    <h2 ClassName="font-manrope font-bold text-3xl leading-10 text-white mb-2">
                      TechBrand Ultra pro-4 BT Calling SmartWatch
                    </h2>
                    <p ClassName="font-normal text-base text-white">Premeum Smart Watches</p>
                  </div>
                  <button ClassName="group transition-all duration-500 p-0.5">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        ClassName="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
                        cx="30"
                        cy="30"
                        r="30"
                      />
                      <path
                        ClassName="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700"
                        d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                        stroke=""
                        strokeWidth="1.6"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div ClassName="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <div ClassName="flex items-center">
                    <h5 ClassName="font-manrope font-semibold text-2xl leading-9 text-white ">$199.00</h5>
                    <span ClassName="ml-3 font-semibold text-lg text-indigo-600">30% off</span>
                  </div>
                  <svg ClassName="mx-5 max-[400px]:hidden" xmlns="http://www.w3.org/2000/svg" width="2" height="36" viewBox="0 0 2 36" fill="none">
                    <path d="M1 0V36" stroke="#E5E7EB" />
                  </svg>
                  <button ClassName="flex items-center gap-1 rounded bg-amber-400 py-1.5 px-2.5 w-max">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_12657_16865)">
                        <path
                          d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44202 5.63332 6.5876 5.33818L8.10326 2.26718Z"
                          fill="red"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12657_16865">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span ClassName="font-manrope font-semibold text-base leading-6 text-black">Add to cart</span>
                  </button>
                </div>

                <p ClassName="text-gray-300 text-base font-normal mb-7">Price includes all taxes</p>

                <button type="button" class="text-gray-900 bg-gradient-to-r from-blue-500 to-teal-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-500 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">ORDER NOW</button>

                <div ClassName="px-4 py-3  rounded-xl">
                  <h3 ClassName="font-manrope text-lg text-teal-400 font-bold">Description</h3>
                  <p ClassName="mt-3 text-teal-600 text-base font-semibold">
                    A travel bag designed for ultimate comfort and style. Made from durable materials, it's the perfect
                    accessory for your summer travels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;

