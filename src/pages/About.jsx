import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
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
                  Auto-Auron predan je osiguravanju najviše razine usluge za
                  naše klijente, imajući na umu njihovu sigurnost. Naš moto:
                  dosljednost, čistoća i briga ostaju ne samo naše vrijednosti,
                  već i obećanje našim kupcima. Auto-Auron Vam uvijek čuva leđa
                  na svakom koraku putovanja kako bi zajedno stvarali nove
                  uspomene ove godine na siguran način.
                </p>

                <p className="section__description">
                  Auto-Auron postavlja standarde i značajke industrije. Poboljšali smo tehnike koje se koriste za čišćenje naših vozila nakon svakog najma kako bismo održali najviše standarde čistoće. Beskontaktni najam
                  je tu da ostane, a nudi se čak i najam 24 sata dnevno.Iznajmite sada i platite kasnije za fleksibilno plaćanje najma. Dosljedno i redovito preventivno održavanje kako bi osigurali kvalitetu vozila i bezbrižnost na cesti za Vas. Fleksibilna politika otkazivanja
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Saznajte Više!</h6>
                    <h4>+(385)91-555-0149</h4>
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
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Znalci</h6>
              <h2 className="section__title">Naš tim</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
