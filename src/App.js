import { useState } from "react";

import Header from "./components/Header";
import Filters from "./components/Filters";
import PropertyList from "./components/PropertyList";
import Pagination from "./components/Pagination";
import ContactModal from "./components/ContactModal";

import { PropertyProvider } from "./context/PropertyContext";

import "./App.css";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [selectedProperty, setSelectedProperty] =
    useState(null);

  const openContactForm = (property) => {
    setSelectedProperty(property);
    setShowContact(true);
  };

  const closeContactForm = () => {
    setShowContact(false);
    setSelectedProperty(null);
  };

  return (
    <PropertyProvider>

      <Header onContact={() => openContactForm(null)} />

      <main className="container py-5">

        <div className="page-heading">

          <h2>Discover the Best Properties</h2>

        </div>

        <Filters />

        <PropertyList
          onContact={openContactForm}
        />

        <Pagination />

      </main>

      {showContact && (
        <ContactModal
          property={selectedProperty}
          onClose={closeContactForm}
        />
      )}

    </PropertyProvider>
  );
}

export default App;