import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Home");
  const PHONE = "94760733708";
  const WA_LINK = `https://wa.me/${PHONE}`;

  const NAV_LINKS = ["Home", "About", "Services", "Contact"];

  const SERVICES = [
    { icon: "✂️", title: "Haircut & Styling", price: "From LKR 1,500", desc: "..." },
    { icon: "👰", title: "Bridal Package", price: "From LKR 25,000", desc: "..." },
  ];

  return <div></div>;
}