// ProductCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { PiCoffeeBeanDuotone, PiStarFill, PiStarDuotone } from "react-icons/pi";

const productList = [
  { id: 1, src: "/item1.png", price: "52", title: "Bold Blend", description: "High Caffeine · Full-Bodied · Energizing", status: "early starts, workouts, deep work sessions" },
  { id: 2, src: "/IMG_20251125_232833.png", price: "52", title: "Daily Blend", description: "Balanced · Smooth · Everyday drink", status: "anytime energy, calm focus" },
  { id: 3, src: "/item3.png", price: "52", title: "Calm Blend", description: "Low Caffeine · Smooth · Mellow", status: "slow mornings, journaling, light energy" },
  { id: 4, src: "/item4.png", price: "52", title: "Bold Blend", description: "High Caffeine · Full-Bodied · Energizing", status: "deep work, morning ignition" },
  { id: 5, src: "/item2.png", price: "52", title: "Daily Blend", description: "Balanced · Smooth · Everyday drink", status: "steady focus, daily routine" },
  { id: 6, src: "/item5.png", price: "52", title: "Calm Blend", description: "Low Caffeine · Smooth · Mellow", status: "slow mornings, journaling, light energy" },
  { id: 7, src: "/item6.png", price: "52", title: "Bold Blend", description: "High Caffeine · Full-Bodied · Energizing", status: "deep work, morning ignition" },
  { id: 8, src: "/item7.png", price: "52", title: "Daily Blend", description: "Balanced · Smooth · Everyday drink", status: "steady focus, daily routine" },
  { id: 9, src: "/item8.png", price: "52", title: "Bold Blend", description: "High Caffeine · Full-Bodied · Energizing", status: "early starts, workouts, deep work sessions" },
];

const ProductCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        effect="creative"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {productList.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="pb-10 w-77">
              <div className="flex justify-center relative">
                <img className="w-50 z-10 top-5 relative" src={product.src} alt={product.title} />
              </div>

              <div className="bg-creamdark rounded-2xl relative -mt-16 pt-20 pb-6 px-4 hover:shadow-xl">
                {/* Title */}
                <p className="text-4xl font-black text-brown text-initial text-center">{product.title}</p>

                {/* Price and Discount */}
                <div className="absolute top-0 left-0 m-2 bg-creamlight rounded-xl px-2 py-0.5 text-brown text-base font-bold">
                  {product.price} $
                </div>
                <div className="absolute top-0 right-0 m-2 bg-creamdark2 rounded-xl px-2 py-0.5 text-creamdark text-base font-semibold">
                  12%
                </div>

                {/* Description */}
                <p className="text-green text-sm font-semibold text-center mt-1">{product.description}</p>

                {/* Stars and Details */}
                <div className="text-creamdark2 text-sm font-medium mt-4 border-t-2 border-black/20 pt-3 space-y-1">
                  <div className="flex justify-center text-green text-xl pb-0.5">
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarDuotone />
                  </div>
                  <p className="text-center">Crafted for slow starts and</p>
                  <p className="text-center">low caffeine experience compromising</p>
                  <p className="text-center">depth. With subtle, mellow notes</p>
                  <p className="text-center">and a clean finish. It's perfect for journaling</p>
                </div>

                {/* Status */}
                <p className="text-green text-center font-semibold text-sm border-t-2 border-black/20 pt-2 mt-3">
                  {product.status}
                </p>

                {/* Button */}
                <div className="flex justify-center">
                  <button className="bg-green font-semibold text-white px-20 py-2 rounded-2xl -mb-2 mt-3 flex items-center gap-2 transition-transform duration-300 hover:translate-y-1">
                    View Coffee <PiCoffeeBeanDuotone className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
