import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_2fr_1fr] gap-14 my-10 mt-40 text-sm bg-gray-100 p-4">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
        </div>

        <div>
          <p className="text-xl font-medium mb-5"> CONTACT</p>
          <ul className="flex flex-col gap-4 text-gray-600">  
            <li><h1>Tel: (+855) 086-833-936 </h1></li>
            <ul className="flex flex-row gap-4">
              <li>
                <a
                  href="https://www.facebook.com/VB.RC.ELECTRONICSTORE  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={assets.fbIcon}
                    className="mb-4 w-8"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@vbstorerc3?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={assets.tiktokIcon}
                    className="mb-4 w-8"
                    alt="TikTok"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/virakboda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={assets.telegramIcon}
                    className="mb-4 w-8"
                    alt="Telegram"
                  />
                </a>
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5"> WE ACCEPT</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <ul className="flex flex-row gap-4">
              <li>
                <img
                  src={assets.acledaIcon} 
                  className="mb-4 w-12"
                  alt="ACLEDA"
                />
              </li>
              <li>
                <img src={assets.abaIcon} className="mb-4 w-12" alt="ABA" />
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
