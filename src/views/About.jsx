import React from "react";

import CommonSection from "../components/UI/CommonSection";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>O nama | Rent a kombi | Najam Kombija</title>
        <link rel="canonical" href="https://auto-auron.hr/about" />
        <meta
          name="description"
          content="Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih vozila za korisnike diljem zemlje. Nudimo kratkoročne i dugoročne najmove gospodarskih vozila."
        />
        <meta
          name="keywords"
          content="Kombi, Najam Kombija, Najam Gospodarskih Vozila, Rent a Kombi, Kombi Rent, Najam Gospodarskih vozila"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="O nama | Najam Kombija | Rent a Kombi"
        />
        <meta
          name="twitter:description"
          content="Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih vozila za korisnike diljem zemlje. Nudimo kratkoročne i dugoročne najmove gospodarskih vozila."
        />

        <meta name="og:title" content="O nama | Najam Kombija | Rent a Kombi" />
        <meta
          name="og:description"
          content="Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih vozila za korisnike diljem zemlje. Nudimo kratkoročne i dugoročne najmove gospodarskih vozila."
        />
        <meta name="og:url" content="https://auto-auron.hr/about" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="hr_HR" />
      </Helmet>
      <CommonSection title="O nama" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Naš cilj? Pružiti pouzdan najam vozila
                </h2>

                <p className="section__description">
                  Auto-Auron predan je pružanju najviše razine usluge za naše
                  klijente, imajući na umu njihovu sigurnost. Naš moto:
                  dosljednost, čistoća i briga ostaju ne samo naše vrijednosti,
                  već i obećanje našim kupcima.
                </p>

                <p className="section__description">
                  Auto-Auron postavlja standarde i značajke industrije.
                  Poboljšali smo tehnike koje se koriste za čišćenje naših
                  vozila nakon svakog najma kako bismo održali najviše standarde
                  čistoće. Beskontaktni najam je tu da ostane, a nudi se čak i
                  najam 24 sata dnevno.Iznajmite sada i platite kasnije za
                  fleksibilno plaćanje najma. Dosljedno i redovito preventivno
                  održavanje kako bi osigurali kvalitetu vozila i bezbrižnost na
                  cesti za Vas. Fleksibilna politika otkazivanja
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Saznajte Više!</h6>
                    <h4>
                      <a href="tel:+385995662470">+(385)99-566-2470</a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriverSection />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">O nama</h6>
              <h2 className="section__title">Od Vas</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
