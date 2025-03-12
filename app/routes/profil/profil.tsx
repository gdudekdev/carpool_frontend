import React, { useState, useEffect, type JSX } from "react";
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
import Trajet from "~/components/profil/trajet/Trajet";
import Vehicule from "~/components/profil/vehicule/Vehicule";

// Import des svg
import * as IconProfil from "./svgImportProfil";
import CtaRightArrow from "~/src/assets/icon/cta/CtaRightArrow";
import BtnPrimary from "~/components/button/BtnPrimary/BtnPrimary";
// Composant pour afficher un item de la section
interface SectionItemProps {
  item: {
    href: string;
    icon: string | JSX.Element;
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
      {typeof item.icon === "string" ? (
        <img src={item.icon} alt={item.alt} />
      ) : (
        item.icon
      )}
    </div>
    <div className="profil__item-content">
      <h5>{item.title}</h5>
      {item.description && <p>{item.description}</p>}
    </div>
    <div className="profil__item-cta">
      {item.cta ? <span>{item.cta}</span> : <CtaRightArrow />}
    </div>
  </div>
);

const Profil = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
  // Prevent body scroll when an active component is open
  useEffect(() => {
    if (activeComponent) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [activeComponent]);

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
            case "trajet":
              return <Trajet />;
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
          href: "trajet",
          icon: <IconProfil.IconProfilTrajet />,
          alt: "Horloge",
          title: "Trajet de covoiturage",
        },
        {
          href: "historique",
          icon: <IconProfil.IconProfilHistorique />,
          alt: "Horloge",
          title: "Historique de covoiturage",
        },
        {
          href: "attestation",
          icon: <IconProfil.IconProfilAttestation />,
          alt: "Feuille",
          title: "Attestation de covoiturage",
        },
        {
          href: "vehicule",
          icon: <IconProfil.IconProfilVehicule />,
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
          icon: <IconProfil.IconProfilInfo />,
          alt: "Personne",
          title: "Infos personnelles",
        },
        {
          href: "stats",
          icon: <IconProfil.IconProfilStats />,
          alt: "Statistiques",
          title: "Vos statistiques",
        },
        {
          href: "block",
          icon: <IconProfil.IconProfilBlock />,
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
          icon: <IconProfil.IconProfilFaq />,
          alt: "Questions",
          title: "Questions fréquentes",
        },
        {
          href: "cgu",
          icon: <IconProfil.IconProfilCgu />,
          alt: "Formulaire",
          title: "Conditions Générales",
        },
        {
          href: "privacy",
          icon: <IconProfil.IconProfilPrivacy />,
          alt: "Cadenas",
          title: "Protection des Données",
        },
        {
          href: "cookies",
          icon: <IconProfil.IconProfilCookies />,
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
              <div className="profil__user-img-container">
                <div className="profil__user-img">
                  <img
                    src="app\src\assets\img\chat\dummyChatProfil.png"
                    alt="Profil"
                  />
                </div>
              </div>

              <div className="profil__user-info">
                <p>Gauthier, 23 ans</p>
              </div>
              <form
                action="#"
                method="post"
                encType="multipart/form-data"
                className="profil__user-img-form"
              >
                <input type="file" name="user_img-form" id="user_img-form" />
              </form>
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
              onClick={() => {
                setActiveComponent(null);
                setIsVisible(false);
              }}
            >
              <CtaRightArrow />
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
