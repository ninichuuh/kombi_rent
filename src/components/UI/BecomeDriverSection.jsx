import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import driverImg from "../../assets/all-images/drive_offer.png";
const BecomeDriverSection = () => {
  const navigate = useNavigate();
  const navigateContact = () => {
    navigate("/contact", { replace: false });
  };
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Želiš se pridružiti našem brzorastućem timu? <br/> Javi nam se!
            </h2>

            <button className="btn become__driver-btn mt-4" onClick={navigateContact}>
              Prijava
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
