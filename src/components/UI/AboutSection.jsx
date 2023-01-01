import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/About_img.png";
import aboutImgLarge from "../../assets/all-images/cars-img/About_img.webp";
import aboutImgSmall from "../../assets/all-images/cars-img/About_img_400.webp";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "80px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <span className="section__subtitle">O nama</span>
              <h2 className="section__title">Ukratko o Auto-Auron</h2>
              <p className="section__description">
                Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih
                vozila za korisnike diljem zemlje. Nudimo kratkoročne i
                dugoročne najmove gospodarskih vozila. Ako trebate unajmiti
                kombi, s ponosom nudimo vozila i usluge svjetske klase po
                pristupačnoj cijeni. Usredotočeni smo na to da vam pomognemo da
                stignete tamo gdje trebate biti, stoga uživajte u pogodnostima
                koje pružaju naša vozila.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Stručno održavana
                  vozila
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Vozila vrhunske
                  kvalitete
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Usluga posvećena
                  Vama
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Najniže cijene
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img
                className="img-fluid"
                src={aboutImg}
                srcSet={`${aboutImgSmall} 400w, ${aboutImgLarge} 700w`}
                sizes="(max-width: 600px) 400px, (min-width: 700px) 700px"
                alt="kuca"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
