
import img01 from "../all-images/cars-img/fiat_ducato.png";
import img02 from "../all-images/cars-img/renault_master.png";
import img03 from "../all-images/cars-img/mercedes.png";

const carData = [
  {
    id: 1,
    brand: "Fiat",
    rating: 12,
    carName: "Fiat Ducato",
    imgUrl: img01,
    model: "Ducato",
    price: "600(79.63)",
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
    rating: 12,
    carName: "Renault Master",
    imgUrl: img02,
    model: "Master",
    price: "500(66.44)",
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
    rating: 132,
    carName: "Mercedes Sprinter Maxi",
    imgUrl: img03,
    model: "Sprinter Maxi",
    price: "500(66.44)",
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
  }
];

export default carData;
