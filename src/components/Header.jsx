

import React from "react";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";

export default function Header() {
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 text-center">
          <div className="col mb-3">
            <img className="img-fluid" alt="Image 1" src={img1} />
          </div>
          <div className="col mb-3">
            <h1 className="display-1 fw-bold ">ULTIMATE</h1>
            <h2 className="display-4 fw-bold">SALE</h2>
            <p className="lead fw-bold">NEW COLLECTION</p>
            <button className="btn btn-dark p-2 fs-4" onClick={(e)=>{
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#ProductHome").offsetTop, 
                behavior :"smooth",
              });
            }} >
              SHOP NOW
            </button>
          </div>
          <div className="col mb-3">
            <img className="img-fluid" alt="Image 2" src={img3} />
          </div>
        </div>
      </div>
      <div className="headertwo bg-light">
        <div className="brands justify-content-center d-flex p-5 shadow mb-1 bg-body-tertiary rounded">
          <img className="p-3" alt="brand1" src={brand1} />
          <img className="p-3" alt="brand2" src={brand2} />
          <img className="p-3" alt="brand3" src={brand3} />
          <img className="p-3" alt="brand4" src={brand4} />
          <img className="p-3" alt="brand5" src={brand5} />
        </div>
      </div>
    </>
  );
}
