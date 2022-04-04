import React from "react";
import { NavLink } from "react-router-dom";

const Common =  ({name ,pickupline , welcome,button ,visit , imgsrc}) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg my-3">
          <div className="row">
            <div className="col-10 mx-auto">
             <div className="row d-flex justify-content-between">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{welcome}<strong className="brand-name">{name}</strong></h1>
                <h2 className="my-3">{pickupline}</h2>
                <div className="mt-3 mb-3"><NavLink to={visit} className="btn-get-started">{button}</NavLink></div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={imgsrc} className="img-fluid animated" alt="home img" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  );
}

export default Common;