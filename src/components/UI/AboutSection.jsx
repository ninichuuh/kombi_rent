import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/About_img.png";

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
              <h4 className="section__subtitle">O nama</h4>
              <h2 className="section__title">Ukratko o nama Auto-Auron</h2>
              <p className="section__description">
              Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih vozila za korisnike diljem zemlje. Nudimo kratkoročne i dugoročne najmove gospodarskih vozila. Ako trebate unajmiti kombi, s ponosom nudimo vozila i usluge svjetske klase po pristupačnoj cijeni. Usredotočeni smo na to da vam pomognemo da stignete tamo gdje trebate biti, stoga uživajte u pogodnostima koje pružaju naša vozila..
               {/* Naša misija je učiniti vaše iskustvo najma gospodarskih vozila brzim, lako i pristupačno. Sva naša vozila su stručno održavana. Kada unajmite kombi od Auto-Aurona, sigurni ste da da dobivate vozila vrhunske kvalitete te uslugu posvećenu Vama po najnižim mogućim cijenama. Jednostavno smo predani zadovoljstvu kupaca. Zašto plaćati više kada možete dobiti najbolje za manje? */}
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Stručno održavana vozila
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Vozila vrhunske kvalitete
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Usluga posvećena Vama
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Najniže cijene
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
