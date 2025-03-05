import React, { useState } from "react";

// Composants à afficher
import Historique from "app/components/profil/Historique";
import Attestation from "app/components/profil/Attestation";
import Vehicule from "app/components/profil/Vehicule";
import Info from "app/components/profil/Info";
import Stats from "app/components/profil/Stats";
import Block from "app/components/profil/Block";
import Faq from "app/components/profil/Faq";
import Cgu from "app/components/profil/Cgu";
import Privacy from "app/components/profil/Privacy";
import Cookies from "app/components/profil/Cookies";

// Composant pour afficher un item de la section
const SectionItem = ({ item, onClick }) => (
  <div className="profil__item" onClick={() => onClick(item.href)}>
    <div className="profil__item-icon">
      <img src={item.icon} alt={item.alt} />
    </div>
    <div className="profil__item-content">
      <h5>{item.title}</h5>
      {item.description && <p>{item.description}</p>}
    </div>
    <div className="profil__item-cta">
      {item.cta ? <span>{item.cta}</span> : <img src="img/profil/cta/right-arrow.svg" alt="Flèche vers la droite" />}
    </div>
  </div>
);

const Profil = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  // Fonction pour afficher le composant actif
  const renderComponent = () => {
    switch (activeComponent) {
      case "historique": return <Historique />;
      case "attestation": return <Attestation />;
      case "vehicule": return <Vehicule />;
      case "info": return <Info />;
      case "stats": return <Stats />;
      case "block": return <Block />;
      case "faq": return <Faq />;
      case "cgu": return <Cgu />;
      case "privacy": return <Privacy />;
      case "cookies": return <Cookies />;
      default: return null;
    }
  };

  // Sections et liens
  const sections = [
    {
      title: "Vos trajets",
      items: [
        { href: "historique", icon: "img/profil/icon/clock-three-svgrepo-com.svg", alt: "Horloge", title: "Historique de covoiturage" },
        { href: "attestation", icon: "img/profil/icon/leaf-ui-svgrepo-com.svg", alt: "Feuille", title: "Attestation de covoiturage" },
        { href: "vehicule", icon: "img/profil/icon/car-side-svgrepo-com.svg", alt: "Voiture", title: "Véhicule", description: "Ajoutez-le pour faciliter la rencontre avec vos passagers", cta: "Ajouter" },
      ],
    },
    {
      title: "Préférences",
      items: [
        { href: "info", icon: "img/profil/icon/person-svgrepo-com.svg", alt: "Personne", title: "Infos personnelles" },
        { href: "stats", icon: "img/profil/icon/stats-svgrepo-com.svg", alt: "Statistiques", title: "Vos statistiques" },
        { href: "block", icon: "img/profil/icon/stop-svgrepo-com.svg", alt: "Stop", title: "Membres bloqués" },
      ],
    },
    {
      title: "Aide",
      items: [
        { href: "faq", icon: "img/profil/icon/question-mark-circle-svgrepo-com.svg", alt: "Questions", title: "Questions fréquentes" },
        { href: "cgu", icon: "img/profil/icon/form-one-svgrepo-com.svg", alt: "Formulaire", title: "Conditions Générales" },
        { href: "privacy", icon: "img/profil/icon/lock-alt-svgrepo-com.svg", alt: "Cadenas", title: "Protection des Données" },
        { href: "cookies", icon: "img/profil/icon/cookie-svgrepo-com.svg", alt: "Cookie", title: "Paramètre des cookies" },
      ],
    },
  ];

  return (
    <main>
      <div className="profil">
        <section className="profil__user">
          <div className="profil__user-img">
            <img src="#" alt="" />
          </div>
          <div className="profil__user-info">
            <p>Gauthier, 23 ans</p>
          </div>
        </section>

        {/* Rendu des sections */}
        {sections.map((section, index) => (
          <section key={index} className="profil__section">
            <h3 className="profil__section-title">{section.title}</h3>
            <div className="profil__section-content">
              {section.items.map((item, idx) => (
                <SectionItem key={idx} item={item} onClick={setActiveComponent} />
              ))}
            </div>
          </section>
        ))}

        {/* Affiche le composant actif ici */}
        <div className="profil__content">
          {renderComponent()}
        </div>
      </div>
    </main>
  );
};

export default Profil;