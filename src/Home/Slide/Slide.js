import React, { useEffect } from "react";
import "./Slide.css";

function Slide() {
  useEffect(() => {
    const autoSlide = () => {
      const list = document.querySelectorAll(".slide ul li");
      setInterval(() => {
        var currentIndex = 0;
        var currentSlide = document.querySelector(".view");
        for (
          currentIndex = 0;
          (currentSlide = currentSlide.previousElementSibling);
          currentIndex++
        ) {}
      }, 3000);
    };
    autoSlide();
  });
  return (
    <div className="slide">
      <ul>
        <li>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MmUwZWEyOWUt/MmUwZWEyOWUt-OTM5MWYyNDgt-w3000._CB404706413_.jpg"
            alt=""
          />
        </li>
        <li className="view">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/DER_BestSellersReading_DesktopHero_3000x1200_EN._CB404812456_.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/twilight/GW_DHERO_Twilight_3000x1200_EN-US_8546_v12x._CB404978515_.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-NDM2ZjFjNDEt-w3000._CB404804088_.jpg"
            alt=""
          />
        </li>
      </ul>
      <div className="slide__fade"></div>
    </div>
  );
}

export default Slide;
