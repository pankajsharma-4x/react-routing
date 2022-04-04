import React from "react";
import Common from "./common";
import Web from "../images/banner-img.png"

const Home =  () => {
  return (
  <div>
    <Common 
      welcome ="Grow your business with "
      name = "Business Digital"
      pickupline ="we are the team of talenetd Developers making websites."
      button ="Get started"
      visit = "/service"
      imgsrc ={Web}
    />
  </div>  
  );
}

export default Home;