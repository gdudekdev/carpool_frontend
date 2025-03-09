import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "~/components/layout/Container";
// Composants à afficher
import Attestation from "~/components/profil/attestation/Attestation";
import Block from "~/components/profil/block/Block";
import Cgu from "~/components/profil/cgu/Cgu";
import Cookies from "~/components/profil/cookies/Cookies";
import Faq from "~/components/profil/faq/Faq";
import Historique from "~/components/profil/historique/Historique";
import Info from "~/components/profil/info/Info";
import Privacy from "~/components/profil/privacy/Privacy";
import Stats from "~/components/profil/stats/Stats";
import Vehicule from "~/components/profil/vehicule/Vehicule";

// Composant pour afficher un item de la section
interface SectionItemProps {
  item: {
    href: string;
    icon: string;
    alt: string;
    title: string;
    description?: string;
    cta?: string;
  };
  onClick: (href: string) => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ item, onClick }) => (
  <div className="profil__item" onClick={() => onClick(item.href)}>
    <div className="profil__item-icon">
      <img src={item.icon} alt={item.alt} />
    </div>
    <div className="profil__item-content">
      <h5>{item.title}</h5>
      {item.description && <p>{item.description}</p>}
    </div>
    <div className="profil__item-cta">
      {item.cta ? (
        <span>{item.cta}</span>
      ) : (
        <img src="img/profil/cta/right-arrow.svg" alt="Flèche vers la droite" />
      )}
    </div>
  </div>
);

const Profil = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const user = {
    name: "Gauthier",
    age: 23,
    imageUrl: "path/to/user/image.jpg", // Update with the actual path to the user's image
  };

  // Close the active tab when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveComponent(null);
        setIsVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Fonction pour afficher le composant actif
  const renderComponent = () => {
    if (typeof activeComponent !== "string") return null;

    return (
      <Container>
        {(() => {
          switch (activeComponent) {
            case "historique":
              return <Historique />;
            case "attestation":
              return <Attestation />;
            case "vehicule":
              return <Vehicule />;
            case "info":
              return <Info />;
            case "stats":
              return <Stats />;
            case "block":
              return <Block />;
            case "faq":
              return <Faq />;
            case "cgu":
              return <Cgu />;
            case "privacy":
              return <Privacy />;
            case "cookies":
              return <Cookies />;
            default:
              return null;
          }
        })()}
      </Container>
    );
  };

  // Sections et liens
  const sections = [
    {
      title: "Vos trajets",
      items: [
        {
          href: "historique",
          icon: "img/profil/icon/clock-three-svgrepo-com.svg",
          alt: "Horloge",
          title: "Historique de covoiturage",
        },
        {
          href: "attestation",
          icon: "img/profil/icon/leaf-ui-svgrepo-com.svg",
          alt: "Feuille",
          title: "Attestation de covoiturage",
        },
        {
          href: "vehicule",
          icon: "img/profil/icon/car-side-svgrepo-com.svg",
          alt: "Voiture",
          title: "Véhicule",
          description:
            "Ajoutez-le pour faciliter la rencontre avec vos passagers",
          cta: "Ajouter",
        },
      ],
    },
    {
      title: "Préférences",
      items: [
        {
          href: "info",
          icon: "img/profil/icon/person-svgrepo-com.svg",
          alt: "Personne",
          title: "Infos personnelles",
        },
        {
          href: "stats",
          icon: "img/profil/icon/stats-svgrepo-com.svg",
          alt: "Statistiques",
          title: "Vos statistiques",
        },
        {
          href: "block",
          icon: "img/profil/icon/stop-svgrepo-com.svg",
          alt: "Stop",
          title: "Membres bloqués",
        },
      ],
    },
    {
      title: "Aide",
      items: [
        {
          href: "faq",
          icon: "img/profil/icon/question-mark-circle-svgrepo-com.svg",
          alt: "Questions",
          title: "Questions fréquentes",
        },
        {
          href: "cgu",
          icon: "img/profil/icon/form-one-svgrepo-com.svg",
          alt: "Formulaire",
          title: "Conditions Générales",
        },
        {
          href: "privacy",
          icon: "img/profil/icon/lock-alt-svgrepo-com.svg",
          alt: "Cadenas",
          title: "Protection des Données",
        },
        {
          href: "cookies",
          icon: "img/profil/icon/cookie-svgrepo-com.svg",
          alt: "Cookie",
          title: "Paramètre des cookies",
        },
      ],
    },
  ];
  console.log("Rendering Profil");
  return (
    <main>
      <div className="profil">
        {/* Affichage de la liste des onglets si aucun composant n'est actif */}
        {!activeComponent ? (
          <>
            <section className="profil__user">
              <div className="profil__user-img">
                <img src="path/to/user/image.jpg" alt="Profil" />
              </div>
              <div className="profil__user-info">
                <p>Gauthier, 23 ans</p>
              </div>
            </section>

            {/* Sections et liens */}
            {sections.map((section, index) => (
              <section key={index} className="profil__section">
                <h2 className="profil__section-title">{section.title}</h2>
                <div className="profil__section-content">
                  {section.items.map((item, idx) => (
                    <SectionItem
                      key={idx}
                      item={item}
                      onClick={setActiveComponent}
                    />
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          // Overlay plein écran
          <div className="profil__fullscreen-overlay">
            <div
              className="profil__close-button"
              onClick={() => { setActiveComponent(null); setIsVisible(false); }}
            >
              ✖ Fermer
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="profil__fullscreen-content">
                {renderComponent()}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Profil;
