import React from "react";
import { Product } from "./Product";

export const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="/assests/bg.jpg"
            className="card-img"
            alt="Backgroud"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <p className="card-text display-3 fw-bolder mb-0">
                NEW SEASONS ARRIVAL
              </p>
              <p className="card-text">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
      <Product/>
    </>
  );
};
