import React from 'react';
import images1 from '@/assets/images/blog/01.jpg';
import images2 from '@/assets/images/blog/02.jpg';

const Process = () => {
  return (
    <div id='visi&misi'>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="font-semibold text-2xl leading-normal mb-4">Our Vision and Mission</h3>
            <p className="text-slate-400 max-w-xl mx-auto">Committed to making a lasting impact, driven by innovation and dedication to excellence.</p>
          </div>

          {/* Vision and Mission Cards */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
            
            {/* Vision Card */}
            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src={images1} className="shadow dark:shadow-gray-700 rounded-md w-full" alt="Vision" />
              <div className="mt-6">
                <h5 className="text-lg font-medium">Vision: Innovating for the Future</h5>
                <p className="text-slate-400 mt-4">
                  Our vision is to lead with creativity, technology, and strategic insight, driving the next wave of innovation to unlock new opportunities for growth.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-teal-500">
                    Learn More <i className="mdi mdi-chevron-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src={images2} className="shadow dark:shadow-gray-700 rounded-md w-full" alt="Mission" />
              <div className="mt-6">
                <h5 className="text-lg font-medium">Mission: Empowering Success</h5>
                <p className="text-slate-400 mt-4">
                  Our mission is to equip businesses with the tools and strategies needed to thrive in an ever-evolving digital landscape, empowering them to achieve their goals.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-teal-500">
                    Discover More <i className="mdi mdi-chevron-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
