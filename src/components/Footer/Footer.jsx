import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logo from "../../assets/all-images/logo.png"
const quickLinks = [
  {
    path: "/about",
    display: "O nama",
  },

  {
    path: "/privacy",
    display: "Politika o Privatnosti",
  },

  {
    path: "/cars",
    display: "Ponuda vozila",
  },
   
  

  {
    path: "/contact",
    display: "Kontakt",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <img src={logo} alt="logo"/>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Auto-Auron vodeći je u industriji iznajmljivanja gospodarskih vozila za korisnike diljem zemlje. Nudimo kratkoročne i dugoročne najmove gospodarskih vozila. Ako trebate unajmiti kombi, s ponosom nudimo vozila i usluge svjetske klase po pristupačnoj cijeni. 
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Brzi Linkovi</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Lokacija</h5>
              <p className="office__info">Žitnjak II. odvojak 14, Zagreb</p>
              <p className="office__info">Phone: <a href="tel:+385995662470">+(385)99-566-2470</a></p>

              <p className="office__info">Email: infoautoauron@gmail.com</p>

              <p className="office__info">Office Time: 08:30 - 20:30</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Preplatite se na naš letak</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by
                MiInI. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
