import React from "react";
import photo from "../assets/abouts.png";

const AboutUs = () => {
  return (
    <div className=" columns-2">

<div className=" justify-center m-16">
        <h2 className=" font-bold text-2xl ">About us</h2>
        <p className=" text-gray-700 font-extralight italic mt-2 mb-11">2008-2018</p>
        <p className=" text-left"> 
          According to the State Program for the Development of Azerbaijani
          Cinema for 2008-2018, Nizami, one of the oldest cinemas in the
          country, was inaugurated on December 27, 2011 after major
          reconstruction. In addition to the current repertoire of films, which
          includes the most interesting new films, presentations of national
          films...
        </p>
      </div>

      <div>
        <img src={photo} alt="about-photo" h-15 w-15 />
      </div>
    </div>
  );
};

export default AboutUs;
