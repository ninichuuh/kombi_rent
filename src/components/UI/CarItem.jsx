import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const {
    imgUrl,
    model,
    carName,
    automatic,
    speed,
    price,
    imgxlUrl,
    imgsmUrl
  } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img
            className="img-fluid"
            src={imgUrl}
            srcSet={`${imgsmUrl} 400w, ${imgxlUrl} 700w`}
            sizes="(max-width: 800px) 400px, (min-width: 800px) 700px"
            alt="kuca"
            loading="lazy"
          />
        </div>

        <div className="car__item-content mt-4">
          <h2 className="section__title text-center">{carName}</h2>
          <p className="rent__price text-center mt-">
            {price}
            <span>kn(€)/ Dan</span>
          </p>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rezerviraj</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Detalji</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
