import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vozila | Najam Kombija | Rent-a Kombi</title>
        <link rel="canonical" href="https://auto-auron.hr/cars" />
        <meta
          name="description"
          content="Naša su vozila sigurna, pouzdana te redovno oržavana za vaš bezbrižan put"
        />
        <meta
          name="keywords"
          content="Kombi, Najam Kombija, Najam Gospodarskih Vozila, Rent-a Kombi, Kombi Rent, Najam Gospodarskih vozila"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Naša vozila | Najam Kombija | Rent-a-Kombi"
        />
        <meta
          name="twitter:description"
          content="Naša su vozila sigurna, pouzdana te redovno oržavana za vaš bezbrižan put"
        />

        <meta
          name="og:title"
          content="Naša vozila | Najam Kombija | Rent-a-Kombi"
        />
        <meta
          name="og:description"
          content="Naša su vozila sigurna, pouzdana te redovno oržavana za vaš bezbrižan put"
        />
        <meta name="og:url" content="https://auto-auron.hr/cars" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="hr_HR" />
      </Helmet>
      <CommonSection title="Ponuda vozila" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sortiraj
                </span>

                <select>
                  <option>Izaberi</option>
                  <option value="low">Manja k većoj</option>
                  <option value="high">Veća k manjoj</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CarListing;
