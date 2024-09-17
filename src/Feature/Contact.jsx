import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="contact">
        <div className="container">
          {/* Section Title */}
          <div className="text-center pb-6">
            <h3 className="font-semibold text-2xl leading-normal mb-4">Get in touch</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              This is just a simple text made for this unique and awesome template, you can replace it with any text.
            </p>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            {/* Google Maps Embed */}
            <div className="md:col-span-7 col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013852.0350409407!2d109.46407639364377!3d-6.966846447807808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65759b9cd518dd%3A0xc377d19d8fedbc46!2sJawa%20Tengah!5e0!3m2!1sid!2sid!4v1726556117886!5m2!1sid!2sid"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-5 col-span-1">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                <h4 className="font-semibold text-xl mb-4">Contact Information</h4>
                <div className="grid gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="font-semibold">Phone Number:</label>
                    <p className="text-slate-600 dark:text-slate-300">+082363826388</p>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="font-semibold">Address:</label>
                    <p className="text-slate-600 dark:text-slate-300">Jawa Tengah</p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-semibold">Email:</label>
                    <p className="text-slate-600 dark:text-slate-300">info@demo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
