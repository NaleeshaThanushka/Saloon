import { useState } from "react";

const PHONE = "94760733708";
const WA_LINK = `https://wa.me/${PHONE}`;

const NAV_LINKS = ["Home", "About", "Services", "Contact"];

function Navbar({ setPage, NAV_LINKS }) {
  return (
    <nav>
      {NAV_LINKS.map(link => (
        <button key={link} onClick={() => setPage(link)}>
          {link}
        </button>
      ))}
    </nav>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <Navbar setPage={setPage} NAV_LINKS={NAV_LINKS} />
    </div>
  );
}