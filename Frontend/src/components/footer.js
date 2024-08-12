import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 mx-16">
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">RECENT POSTS</h2>
          <ul className="flex flex-col space-y-2 pt-5">
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">FAQ's</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Pricing Plans</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Order Tracking</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Returns</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">CUSTOMER</h2>
          <ul className="flex flex-col space-y-2 pt-5">
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Touch of uniqueness</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Offices you won't forget</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Cicilan</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">PROFILE</h2>
          <ul className="flex flex-col space-y-2 pt-5">
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Help & Contact Us</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Return</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Online stores</a></li>
            <li><a href="/" className="relative inline-block py-1 px-2 hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 pb-8">
          <h2 className="font-bold">CONTACT</h2>
          <div className="flex justify-center space-x-6 text-2xl pt-5">
            <a href="/"><FaInstagram /></a>
            <a href='/'><FaTwitter /></a>
            <a href="/"><IoLogoFacebook /></a>
          </div>
        </div>
      </div>
      <div className="px-16">
    <div className="w-full border-t-2 border-gray-800"></div>
  </div>

  <div className="w-full text-left py-4 px-16 bg-gray-100">
    <p>@ Nizami cinema. All Rights Reserved</p>
  </div>

    </div>
  );
};

export default Footer;
