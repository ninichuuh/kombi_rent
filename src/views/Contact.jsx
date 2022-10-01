import { Container, Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";

import CommonSection from "../components/UI/CommonSection";
import FormContact from "../components/UI/FormContact";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kontakt | Najam Kombija | Rent-a Kombi</title>
        <link rel="canonical" href="https://auto-auron.hr/contact" />
        <meta
          name="description"
          content="Kontaktirajte nas te ćemo Vam se javiti u najkraćem mogućem roku"
        />
        <meta
          name="keywords"
          content="Kombi, Najam Kombija, Najam Gospodarskih Vozila, Rent-a Kombi, Kombi Rent, Najam Gospodarskih vozila"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Kontakt | Najam Kombija | Rent-a-Kombi"
        />
        <meta
          name="twitter:description"
          content="Kontaktirajte nas te ćemo Vam se javiti u najkraćem mogućem roku"
        />

        <meta
          name="og:title"
          content="Kontakt | Najam Kombija | Rent-a-Kombi"
        />
        <meta
          name="og:description"
          content="Kontaktirajte nas te ćemo Vam se javiti u najkraćem mogućem roku"
        />
        <meta name="og:url" content="https://auto-auron.hr/contact" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="hr_HR" />
      </Helmet>
      <CommonSection title="Kontakt" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Pošaljite nam poruku </h6>
              <FormContact />
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Kontakt Informacije</h6>
                <p className="section__description mb-0">
                  Žitnjak II. odvojak 14, Zagreb, Hrvatska
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefon:</h6>
                  <p className="section__description mb-0">
                    <a href="tel:+385995662470">+(385)99-566-2470</a>
                  </p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    infoautoauron@gmail.com
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
