import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Hvala Vam što ste olakšali proces najma kombija. Od vašeg prvog
          odgovora na moj upit do našeg vraćanja nakon što smo vratili kombi,
          bili ste tako brzi, profesionalni, uslužni i nevjerojatno prijateljski
          nastrojeni. Već sam vas preporučio svima s kojima sam razgovarao i
          nastavit ću to činiti!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <div>
            <h6 className="mb-0 mt-3">Mirko</h6>
            <p className="section__description">Selidba</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Hvala još jednom, vozilo je bilo veoma čisto i savršeno za naše
          potrebe.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <div>
            <h6 className="mb-0 mt-3">Irena</h6>
            <p className="section__description">Gospodarski Korisnik</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Odličan kombi i usluga. Konkretno u objašnjavanju protokola i
          potrebnih informacija potrebnih za najam. Ponovno ću iznajmiti.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <div>
            <h6 className="mb-0 mt-3">Ivan</h6>
            <p className="section__description">Korisnik</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
