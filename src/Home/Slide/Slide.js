import React from "react";
import "./Slide.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slide() {
  return (
    <div className="slide">
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
      >
        <div className="slide__item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MmUwZWEyOWUt/MmUwZWEyOWUt-OTM5MWYyNDgt-w3000._CB404706413_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </div>
        <div className="slide__item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/DER_BestSellersReading_DesktopHero_3000x1200_EN._CB404812456_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </div>
        <div className="slide__item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/twilight/GW_DHERO_Twilight_3000x1200_EN-US_8546_v12x._CB404978515_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </div>
        <div className="slide__item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-NDM2ZjFjNDEt-w3000._CB404804088_.jpg"
            alt=""
          />
          <div className="slide__fade"></div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slide;
