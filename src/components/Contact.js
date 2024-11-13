import React, { useState } from "react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { User, Mail, Text, Check } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showMessageSent, setShowMessageSent] = useState(false);

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
      setShowMessageSent(true);
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
            I'd love to hear from you! Whether you have a project, a question, or
            just want to say hello, let's start a conversation and bring your
            ideas to life.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4 w-full"
          >
            <div className="w-full max-w-md relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
              />
            </div>
            <div className="w-full max-w-md relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
              />
            </div>
            <div className="w-full max-w-md relative">
              <Text className="absolute left-4 top-3 text-gray-600 dark:text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full pl-10 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-300 resize-y"
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

      {showMessageSent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </p>
            <button
              className="mt-4 bg-orange-500 dark:bg-blue-500 text-white py-2 px-4 rounded hover:bg-orange-600 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500"
              onClick={() => setShowMessageSent(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;