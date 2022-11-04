import React from "react";
import { Helmet } from "react-helmet";
import HeroSlider from "../components/UI/HeroSlider";
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Najam Kombija | Rent-a Kombi | Najam Gospodarskih Vozila</title>
        <link rel="canonical" href="https://auto-auron.hr/" />
        <meta
          name="description"
          content="Najam Kombija | Rent-a Kombi | Najam Gospodarskih Vozila"
        />
        <meta
          name="keywords"
          content="Kombi, Najam Kombija, Najam Gospodarskih Vozila, Rent-a Kombi, Kombi Rent, Najam Gospodarskih vozila"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Najam Kombija | Rent-a Kombi | Najam Gospodarskih Vozila"
        />
        <meta
          name="twitter:description"
          content="Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih vozila za korisnike diljem zemlje. Nudimo kratkoročne i dugoročne najmove gospodarskih vozila."
        />

        <meta
          name="og:title"
          content="Najam Kombija | Rent-a Kombi | Najam Gospodarskih Vozila"
        />
        <meta
          name="og:description"
          content="Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih vozila za korisnike diljem zemlje. Nudimo kratkoročne i dugoročne najmove gospodarskih vozila."
        />
        <meta name="og:url" content="https://auto-auron.hr/" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="hr_HR" />
      </Helmet>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Pogledajte ponudu</h6>
              <h2 className="section__title">Naših vozila</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Naša ponuda</h6>
              <h2 className="section__title">
                Pouzdano, sigurno i fleksibilno
              </h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
