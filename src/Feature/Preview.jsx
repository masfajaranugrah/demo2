import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Preview = () => {
  const swiperRef = useRef(null);
  const testimonials = [
    {
      quote: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. Lorem Ipsum has only limited suitability as a visual ",
      name: "Smith Vodka",
      role: "Manager",
      image: "https://shreethemes.in/upcover/layouts/assets/images/team/03.jpg",
    },
    {
      quote: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. only fragments of the original text remain in ",
      name: "Smith Vodka",
      role: "Manager",
      image: "https://shreethemes.in/upcover/layouts/assets/images/team/04.jpg",
    },
    {
      quote: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time",
      name: "Smith Vodka",
      role: "Manager",
      image: "https://shreethemes.in/upcover/layouts/assets/images/team/04.jpg",
    },
  ];

  return (
    <div>
      <section className="relative md:py-24 py-16" id="testimoni">
        <div className="container relative">
          <div className="pb-6 text-center">
            <h3 className="font-semibold text-2xl leading-normal mb-4">
              What Our Users Say
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              This is just a simple text made for this unique and awesome template, you can replace it with any text.
            </p>
          </div>

          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
             className="mySwiper2"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="text-center">
        <div className="content relative rounded shadow-lg my-20 p-6 bg-white dark:bg-slate-900 card">
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-quote-right text-[40px] text-[#2a52c3]"></i>
          </div>
          <p className="text-slate-400">"{testimonial.quote}"</p>
          <ul className="list-none mb-0 text-amber-400 mt-3 flex justify-center items-center">
            <li className="inline"><i className="fa-solid fa-star"></i></li>
            <li className="inline"><i className="fa-solid fa-star"></i></li>
            <li className="inline"><i className="fa-solid fa-star"></i></li>
            <li className="inline"><i className="fa-solid fa-star"></i></li>
            <li className="inline"><i className="fa-solid fa-star"></i></li>
          </ul>
          <div className="text-center mt-5">
            <img src={testimonial.image} className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
            <h6 className="mt-2 font-semibold">{testimonial.name}</h6>
            <span className="text-slate-400 text-sm">{testimonial.role}</span>
          </div>
        </div>
       </SwiperSlide>
      
            ))}
          </Swiper>

      
        </div>
      </section>
    </div>
  );
};

export default Preview;
