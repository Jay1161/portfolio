import React, { useState } from "react";
import ScrollAnimationWrapper, {
  staggerChildrenVariants,
  childVariants,
} from "./ScrollAnimationWrapper";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbymXBidWxlOaQsJL-Bnqbfd4v83i0GtP055b71ujFznhCeFItYUzJ7uiVOpz_GZVzu9BQ/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.text())
      .then((data) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 scroll-mt-16 font-poppins"
    >
      <ScrollAnimationWrapper>
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a project, a question, or
          just want to say hello, let’s start a conversation and bring your
          ideas to life.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4 w-full"
        >
          <div className="w-full max-w-md">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
            />
          </div>

          <div className="w-full max-w-md">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
            />
          </div>

          <div className="w-full max-w-md">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-300 resize-y"
            ></textarea>
          </div>
          <div className="w-full max-w-md">
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 dark:bg-blue-500 text-white rounded-lg hover:bg-orange-600 dark:hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default ContactForm;
