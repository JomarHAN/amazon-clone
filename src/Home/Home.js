import React from "react";
import Product from "./Product/Product";
import "./Home.css";
import Slide from "./Slide/Slide";

function Home() {
  return (
    <div className="home">
      <Slide />
      <div className="home__product">
        <div className="home__productRow">
          <Product
            image="https://m.media-amazon.com/images/I/81F-QC1N5WL._AC_UY218_.jpg"
            title="Apple iPhone 8, 64GB"
            price={254}
            rating={4}
            id={1}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/61VVYg2ur%2BL._AC_SX679_.jpg"
            title="All-new Echo (4th Gen)"
            price={99.99}
            rating={5}
            id={2}
          />
        </div>
        <div className="home__productRow">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/315Id3skKVL._AC_US218_.jpg"
            title="Certified Refurbished Ring Video Doorbell Pro"
            price={159.99}
            rating={3}
            id={3}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/61bMV3oE-8L._AC_SX679_.jpg"
            title="COWIN E7 PRO [Upgraded]"
            price={67.99}
            rating={4}
            id={4}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/612XMVMwrkL._AC_SX679_.jpg"
            title="Orangewood 6 String Acoustic Guitar Pack"
            price={155.0}
            rating={5}
            id={5}
          />
        </div>
        <div className="home__productRow">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SX679_.jpg"
            title="SAMSUNG 65-inch Class QLED Q70T Series"
            price={(1, 297.99)}
            rating={5}
            id={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
