import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Quiz App. All rights reserved.

      </p>
      <div className=" flex gap-4 items-center mb-4 md:mb-0">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Faq
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>

    </footer>
  );
}
export default Footer;