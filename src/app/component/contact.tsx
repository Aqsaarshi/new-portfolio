"use client";
import React, { useState } from "react";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true); // Show confirmation message
  };
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative bg-white ">
        <div className="container px-8 py-30 mx-auto flex sm:flex-nowrap flex-wrap ">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="Google Map Location"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.142545871!2d66.49599056601762!3d25.191740544180128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729428400509!5m2!1sen!2s"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6 ">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Karachi , Pakistan </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  aqsaarshi5@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">03xxxxxxxxx</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/2 bg-white shadow-2xl shadow-purple-700 rounded-2xl p-8 md:ml-auto w-full mt-8 md:mt-0 transition-all duration-500  ">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 ">Contact</h2>
            <p className="text-lg text-gray-600 mb-6">Feel free to contact</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-600 block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-200"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-600 block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-200"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-600 block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-400 transition duration-300 text-lg font-medium"
              >
                Send Message
              </button>
            </form>

            {messageSent && (
              <p className="mt-4 text-green-500 font-medium text-center">
                Your message has been sent!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
