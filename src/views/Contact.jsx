import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import FormContact from "../components/UI/FormContact";
import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];
const Contact = () => {
  return (
    <Helmet title="Kontakt">
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

                {/* <h6 className="fw-bold mt-4">Pratite nas</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
