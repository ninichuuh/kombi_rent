import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "../styles/notfound.css"
export default function Errorpage() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Upssss</title>
        <link rel="canonical" href="https://auto-auron.hr/404" />
        <meta
          name="description"
          content="Pogreška | Najam Kombija | Rent a Kombi"
        />
        <meta
          name="keywords"
          content="Kombi, Najam Kombija, Najam Gospodarskih Vozila, Rent a Kombi, Kombi Rent, Najam Gospodarskih vozila"
        />
      </Helmet>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span>404 error</span>
          <p className="p-a">
            Seems like the webpage you have looked for has a problem{" "}
          </p>
          <p className="p-b">?My developer is at fault, maybe buy him a Coffee</p>
          <a href="/" className="back" onClick={navigateHome}>
            Return Home
          </a>
        </div>
      </div>
      </>
  );
}

