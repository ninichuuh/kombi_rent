import React, { useEffect } from "react";
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import FormBooking from "../components/UI/FormBooking";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Autoplay } from "swiper";
import "../styles/car-details.css";
import "swiper/css";
import "swiper/css/lazy";
import {
  benz1,
  benz2,
  benz3,
  fiat1,
  fiat2,
  fiat3,
  fiat4,
  fiat5,
  fiat6,
  fiat7,
  fiat8,
  fiat9,
  renault,
} from "../assets/all-images/gallery-img/images";

const imgBenz = [benz1, benz2, benz3];
const imgFiat = [fiat1, fiat2, fiat3, fiat4, fiat5, fiat6, fiat7, fiat8, fiat9];

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  const Benz = imgBenz.map((src, index) => (
    <SwiperSlide>
      <img src={src} key={index} alt="" />
    </SwiperSlide>
  ));

  const Fiat = imgFiat.map((src, index) => (
    <SwiperSlide>
      <img src={src} key={index} alt="" />
    </SwiperSlide>
  ));

  const Renault = (
    <SwiperSlide>
      <img src={renault} alt="" />
    </SwiperSlide>
  );
  const images =
    singleCarItem.brand === "Mercedes"
      ? Benz
      : singleCarItem.brand === "Fiat"
      ? Fiat
      : Renault;

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <Swiper
                spaceBetween={50}
                lazy={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Lazy, Autoplay]}
              >
                {images}
              </Swiper>
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {singleCarItem.price} kn(€)/ Dan
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ocjena)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description} <br />
                  {singleCarItem.year}
                  <br />
                  {singleCarItem.lenght}
                  <br />
                  {singleCarItem.height}
                  <br />
                  {singleCarItem.radio}
                  <br />
                  {singleCarItem.dodatno}
                  <br />
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-map-pin-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Informacije o rezervaciji</h5>
                <FormBooking />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
