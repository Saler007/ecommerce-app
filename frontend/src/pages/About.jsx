import React from "react";
import Title from"../components/Title.jsx"
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.aboutImg} className="w-full md:max-w-112.5" alt="" />
        <div>
          
        </div>
      </div>
    </div>
  )
};

export default About;
