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

function HomePage() {
  return (
    <div>
      <h1>Welcome to Lumière Salon</h1>
      <p>Premium hair and beauty services</p>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
        Book via WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <Navbar setPage={setPage} NAV_LINKS={NAV_LINKS} />
      <main>
        {page === "Home" && <HomePage />}
      </main>
      
    </div>
    
  );
}