import img01 from "../all-images/cars-img/fiat_ducato.png";
import img02 from "../all-images/cars-img/renault_master.png";
import img03 from "../all-images/cars-img/mercedes.png";
import img1xl from "../all-images/cars-img/fiat_ducato.webp";
import img1sm from "../all-images/cars-img/fiat_ducato_400.webp";
import img2xl from "../all-images/cars-img/ranault_master.webp";
import img2sm from "../all-images/cars-img/ranault_master_400.webp";
import img3xl from "../all-images/cars-img/mercedes.webp";
import img3sm from "../all-images/cars-img/mercedes_400.webp";

const carData = [
  {
    id: 1,
    brand: "Fiat",
    rating: 23,
    carName: "Fiat Ducato",
    imgUrl: img01,
    imgxlUrl: img1xl,
    imgsmUrl: img1sm,
    model: "Ducato",
    price: "80",
    speed: "140kmh",
    gps: "GPS Navigation",
    seatType: "Tempomat",
    automatic: "Klima",
    description: `Fiat Ducato 2.3 Multijet 150`,
    year: "Godina Proizvodnje: 2018",
    lenght: "Dužina Tovarnog Prostora: 4m",
    height: "Visina Tovarnog Prostora: 1.85m",
    radio: "USB Radio",
    dodatno: "Parking Senzori i Kamera za vožnju unatrag",
  },

  {
    id: 2,
    brand: "Renault",
    rating: 70,
    carName: "Renault Master",
    imgUrl: img02,
    imgxlUrl: img2xl,
    imgsmUrl: img2sm,
    model: "Master",
    price: "70",
    speed: "130kmh",
    gps: "GPS Navigation",
    seatType: "Tempomat",
    automatic: "Klima",
    description: `Fiat Ducato 2.3 Multijet 150`,
    lenght: "Dužina Tovarnog Prostora: 3.50m",
    height: "Visina Tovarnog Prostora: 1.80m",
    dodatno: "Centralno zaključavanje",
  },

  {
    id: 3,
    brand: "Mercedes",
    rating: 121,
    carName: "Mercedes Sprinter Maxi",
    imgUrl: img03,
    imgxlUrl: img3xl,
    imgsmUrl: img3sm,
    model: "Sprinter Maxi",
    price: "70",
    speed: "150kmh",
    gps: "Centralno Zaključavanje",
    seatType: "Kuka po potrebi",
    automatic: "Klima",
    description: `Mercedes Sprinter Maxi`,
    year: "Godina Proizvodnje: 2014",
    lenght: "Dužina Tovarnog Prostora: 4.30m",
    height: "Visina Tovarnog Prostora: 1.90m",
    radio: "Radio",
    dodatno: "Centralno Zaključavanje",
  },
];

export default carData;
