import { useState } from "react";

const PHONE = "94760733708";
const WA_LINK = `https://wa.me/${PHONE}`;

const NAV_LINKS = ["Home", "About", "Services", "Contact"];

function Navbar({ setPage, NAV_LINKS, activePage }) {
  return (
    <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {NAV_LINKS.map(link => (
        <button
          key={link}
          onClick={() => setPage(link)}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            background: activePage === link ? "#ddd" : "#fff"
          }}
        >
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

function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Explore what we offer</p>
    </div>
  );
}
function AboutPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Lumière Salon</h1>
      <p style={{ lineHeight: "1.6" }}>
        Lumière Salon is dedicated to delivering high-quality beauty services 
        with a focus on customer satisfaction and style.
      </p>
    </div>
  );
}
function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Contact Us</h1>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
export default function App() {
  const [page, setPage] = useState("Home");

return (
  <div style={{ padding: "20px", fontFamily: "Arial" }}>
     <Navbar setPage={setPage} NAV_LINKS={NAV_LINKS} activePage={page} />


    <main>
      {page === "Home" && <HomePage />}
      {page === "Services" && <ServicesPage />}
      {page === "About" && <AboutPage />}
      {page === "Contact" && <ContactPage />}
    </main>
  </div>
);
}