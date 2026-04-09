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
function Footer({ setPage }) {
  return (
    <footer style={{
      marginTop: "40px",
      padding: "20px",
      borderTop: "1px solid #ccc",
      textAlign: "center"
    }}>
      <p>© 2025 Lumière Salon</p>

      <div style={{ marginTop: "10px" }}>
        {NAV_LINKS.map(link => (
          <button
            key={link}
            onClick={() => setPage(link)}
            style={{ margin: "5px", padding: "6px 10px" }}
          >
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
}
function AboutPage() {
return (
  <div style={{ fontFamily: "Arial", minHeight: "100vh" }}>
    <Navbar setPage={setPage} NAV_LINKS={NAV_LINKS} activePage={page} />

    <main style={{ padding: "20px" }}>
      {page === "Home" && <HomePage />}
      {page === "About" && <AboutPage />}
      {page === "Services" && <ServicesPage />}
      {page === "Contact" && <ContactPage />}
    </main>

    <Footer setPage={setPage} />
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
const handleSend = () => {
  const text = encodeURIComponent(`Hi, I'm ${name}. ${message}`);
  window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank");
};
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
      <Footer setPage={setPage} />
    </main>
    <button onClick={handleSend}>Send via WhatsApp</button>
    <div style={{ padding: "20px" }}>
  <h1>Contact Us</h1>

  <input
    style={{ display: "block", marginBottom: "10px", padding: "8px" }}
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <textarea
    style={{ display: "block", marginBottom: "10px", padding: "8px" }}
    placeholder="Your Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />

  <button onClick={handleSend}>Send via WhatsApp</button>
</div>
  </div>
);
}