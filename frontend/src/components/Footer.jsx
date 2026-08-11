import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-gray-100 p-4">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
        </div>

        <div>
          <p className="text-xl font-medium mb-5 "> COMPANY </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5"> GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>(+855) 086-833-936</li>
            <ul className="flex flex-row gap-4">
              <li>
                <img src={assets.fbIcon} className="mb-4 w-6" alt="" />
              </li>
              <li>
                <img src={assets.tiktokIcon} className="mb-4 w-6" alt="" />
              </li>
              <li>
                <img src={assets.telegramIcon} className="mb-4 w-6" alt="" />
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          © 2025 VB STORE RC. All right reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
