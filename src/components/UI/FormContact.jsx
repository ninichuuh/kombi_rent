import { useRef } from "react";
import { FormGroup, Input } from "reactstrap";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_KONTAKT_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const FormContact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const navigateHome = () => {
     navigate("/", { replace: false });
   };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        navigateHome();
        alert(
          "Zahvaljujemo na vašoj poruci! Javiti ćemo Vam se u najkraćem mogućem roku"
        );
      },
      (error) => {
        console.log(error.text);
        alert("FAILED...", error);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormGroup className="contact__form">
      <label for="user_name">Ime</label>
        <Input placeholder="Vaše Ime" id="user_name" type="text" name="username" required/>
      </FormGroup>
      <FormGroup className="contact__form">
      <label for="user_email">Elektronska pošta</label>
        <Input placeholder="Elektronska pošta" id="user_email" type="email" name="user_email" required/>
      </FormGroup>
      <FormGroup className="contact__form">
        <textarea
          rows="5"
          placeholder="Vaša Poruka"
          className="textarea"
          name="message"
          required
        ></textarea>
      </FormGroup>

      <button className=" contact__btn" type="submit">
        Pošalji poruku
      </button>
    </form>
  );
};

export default FormContact;
