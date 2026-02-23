"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#1a0005] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

            <p className="mb-4 text-gray-300">
              📍 Sharaqpur Shareef, Punjab, Pakistan
            </p>

            <p className="mb-4 text-gray-300">
              📞 +92 300 1234567
            </p>

            <p className="mb-6 text-gray-300">
              📧 info@hajihakimali.com
            </p>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              className="inline-block bg-[#2b060d] hover:bg-black px-6 py-3 rounded-full font-semibold transition"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#2b060d] p-8 rounded-2xl shadow-lg"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-black text-white outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-black text-white outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-black text-white outline-none"
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-black text-white outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 py-3 rounded-full font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
