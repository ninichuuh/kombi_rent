import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/booking-form.css";
import { FormGroup, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_REZERVACIJA_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const BookingForm = () => {
  const form = useRef();
  const navigate = useNavigate();
 const navigateHome = () => {
    navigate("/", { replace: false });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        navigateHome();
        alert(
          "Zahvaljujemo na vašoj rezervaciji! Javiti ćemo Vam se u najkraćem mogućem roku"
        );
      },
      (error) => {
    
        alert("FAILED...", error);
      }
    );
  };
 
  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <label for="user_name">Ime</label>
        <Input type="text" id="user_name" placeholder="Ime" name="user_name" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <label for="user_prezime">Prezime</label>
        <Input type="text" id="user_prezime" placeholder="Prezime" name="user_prezime" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <label for="user_email">Elektronska pošta</label>
        <Input type="email" id="user_email" placeholder="Elektrosnka Pošta" name="user_email" required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <label for="user_number">Tel.broj</label>
      <Input type="number" id="user_number" placeholder="Telefonski Broj" name="user_phone"  required/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <label for="from_date">Od dana</label>
        <Input type="date" id="from_date" name="from_date" required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <label for="to_date">Do dana</label>
        <Input type="date" id="to_date" placeholder="Do Dana" name="to_date"  />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={4}
          type="textarea"
          className="textarea"
          placeholder="Napomena"
          name="message"
          required
        ></textarea>
      </FormGroup>
      <FormGroup>
        <div className="payment text-center">
          <button className=" contact__btn" type="submit">
            Rezervirajte
          </button>
        </div>
      </FormGroup>
    </form>
  );
};

export default BookingForm;
