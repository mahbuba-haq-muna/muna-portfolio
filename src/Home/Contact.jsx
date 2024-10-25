import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cfwq4qg', 'template_pyes2sc', form.current, 'A4SVt-MTqUVf-OyoA')
      .then((result) => {
        console.log(result.text);
        toast.success("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send email. Try again!");
      });
  };

  return (
    <div className="lg:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg mt-10">
      
      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        
        <div>
          <label className="block text-sm text-start font-medium text-gray-200 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none transition duration-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-start font-medium text-gray-200 mb-1">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none transition duration-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-start font-medium text-gray-200 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full h-32 px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none transition duration-200"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="hover:shadow-lg hover:shadow-emerald-500 w-full py-2 mt-4 bg-emerald-500 rounded-md text-white font-semibold hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
