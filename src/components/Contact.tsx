import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const service=import.meta.env.VITE_EMAILJS_SERVICE
const template=import.meta.env.VITE_EMAILJS_TEMPLATE
const KEY=import.meta.env.VITE_EMAILJS_KEY
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        service, // Replace with your EmailJS Service ID
        template, // Replace with your EmailJS Template ID
        formData,
        KEY // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-[#0E3343] text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-[#123848] p-6 rounded-lg shadow-lg w-full max-w-lg"
          >
            {isSubmitted && (
              <div className="text-green-500 mb-4">Message Sent Successfully!</div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0E3343] text-white focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0E3343] text-white focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-[#0E3343] text-white focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#F4A261] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e69556] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
