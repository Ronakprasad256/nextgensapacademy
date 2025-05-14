import { useState } from "react";

export default function QuickConnect() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Quick Connect Button */}
      <div
        onClick={toggleForm}
        className="hidden sm:block fixed top-1/2 left-0 transform -translate-y-1/2 z-10 bg-teal-900 text-white py-2 px-4 rounded-r-md rotate-90 origin-top-left shadow-lg cursor-pointer"
      >
        Quick Connect
      </div>

      {/* Contact Form Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg p-6 transition-transform duration-300 ease-in-out z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input type="text" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input type="email" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Mobile</label>
            <div className="flex border rounded-md">
              <span className="px-2 flex items-center bg-gray-100 border-r">🇮🇳 +91</span>
              <input type="tel" className="flex-1 p-2 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Preferred Location</label>
            <select className="w-full border rounded-md p-2">
              <option>Select</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea className="w-full border rounded-md p-2" rows="3"></textarea>
          </div>
          <button type="submit" className="w-full bg-teal-900 text-white py-2 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
