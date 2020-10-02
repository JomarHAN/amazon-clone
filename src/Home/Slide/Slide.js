import React, { useEffect } from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import "./Slide.css";

function Slide() {
  // const [{ slideState }] = useStateValue();
  // useEffect(() => {
  //   const list = document.querySelectorAll(".slide ul li");
  //   const autoSlide = setInterval(function () {
  //     var currentIndex = 0;
  //     var currentSlide = document.querySelector(".view");
  //     for (
  //       currentIndex = 0;
  //       (currentSlide = currentSlide.previousElementSibling);
  //       currentIndex++
  //     ) {}
  //     for (let i = 0; i < list.length; i++) {
  //       list[i].classList.remove("view");
  //     }
  //     if (currentIndex < list.length - 1) {
  //       list[currentIndex].nextElementSibling.classList.add("view");
  //     } else {
  //       list[0].classList.add("view");
  //     }
  //   }, 5000);
  // }, []);

  // if (!slideState) {
  //   console.log("yes");
  // }
  // console.log(slideState);
  return (
    <div className="slide">
      <ul>
        <li>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MmUwZWEyOWUt/MmUwZWEyOWUt-OTM5MWYyNDgt-w3000._CB404706413_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </li>
        <li className="view">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/DER_BestSellersReading_DesktopHero_3000x1200_EN._CB404812456_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </li>
        <li>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/twilight/GW_DHERO_Twilight_3000x1200_EN-US_8546_v12x._CB404978515_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </li>
        <li>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-NDM2ZjFjNDEt-w3000._CB404804088_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
