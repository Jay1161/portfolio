import React, { useState } from "react";
// import "../styles/Contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbymXBidWxlOaQsJL-Bnqbfd4v83i0GtP055b71ujFznhCeFItYUzJ7uiVOpz_GZVzu9BQ/exec", {
      method: "POST",
      body: JSON.stringify(formData)
    })
      .then(response => response.text())
      .then(data => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <section 
      id="contact" 
      className="py-8 px-5 text-center scroll-mt-16 pt-16"
    >
      <div className="max-w-3xl mx-auto w-full font-poppins">
        <h2 className="text-3xl mb-6 text-gray-800">
          Contact Me
        </h2>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col items-center space-y-3 w-full"
        >
          <div className="w-full max-w-md">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"  
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"  
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300 resize-y"  // Reduced padding
            ></textarea>
          </div>

          <div className="w-full max-w-md mt-2">
            <button 
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"  // Reduced padding
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;