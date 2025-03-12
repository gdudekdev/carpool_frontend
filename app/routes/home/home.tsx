import { useState } from "react";
import { Link } from "react-router-dom";
import BtnPrimary from "~/components/button/BtnPrimary/BtnPrimary";
import HomeOverlayChoice from "~/components/home/HomeOverlayChoice/HomeOverlayChoice";
import HomeOverlayTrajet from "~/components/home/HomeOverlayTrajet/HomeOverlayTrajet";
import CtaVerticalDots from "~/src/assets/icon/cta/CtaVerticalDots";
import CtaCalendar from "~/src/assets/icon/home/CtaCalendar";

const sections = [
  {
    className: "home__friend",
    title: "Inviter un ami ou un collègue à covoiturer",
    description:
      "Envoyez une demande de covoiturage à vos contacts, comme vos amis ou collègues.",
    link: {
      href: "/home/relatives",
      text: "Covoiturer avec une connaissance",
    },
    icon: "fa-user-friends", // Ajouter une icône
  },
  {
    className: "home__newride",
    title: "Publier un trajet domicile-travail",
    description:
      "Partagez votre trajet pour trouver des covoitureurs sur votre route.",
    link: {
      href: "#",
      text: "Publier votre trajet",
    },
    icon: "fa-route", // Icône représentant un trajet
  },
];

const Home = () => {
  const [isOverlayTrajetVisible, setIsOverlayTrajetVisible] = useState(false);
  const [isOverlayChoiceVisible, setIsOverlayChoiceVisible] = useState(false);

  const handleClickTrajet = () => {
    setIsOverlayTrajetVisible(!isOverlayTrajetVisible); // Affiche le composant
  };
  const handleClickChoice = () => {
    setIsOverlayChoiceVisible(!isOverlayChoiceVisible); // Affiche le composant
  };
  return (
    <div className="home">
      {sections.map((section, index) => (
        <section key={`section-${index}`} className={section.className}>
          <div className={`${section.className}-content`}>
            {section.icon && <i className={`fa ${section.icon}`}></i>}{" "}
            {/* Icône */}
            {section.title && <h2>{section.title}</h2>}
            {section.description && <p>{section.description}</p>}
          </div>
          {section.link && section.link.href && section.link.text && (
            <Link to={section.link.href} className={`${section.className}-cta`}>
              <button>{section.link.text}</button>
            </Link>
          )}
        </section>
      ))}
      <div className="home__planning-header">
        <h2>Je recherche un covoitureur</h2>
        <div className="home__planning-header-cta" onClick={handleClickTrajet}>
          <CtaCalendar />
        </div>
      </div>
      <div className="home__planning">
        <div className="home__planning-item">
          <div className="home__planning-item-date">
            <h3>Lundi 10 mars</h3>
          </div>
          <div className="home__item domicile">
            <div className="home__item-main">
              <div className="home__item-main-container">
                <div className="home__item-departure">
                  <p>7:00</p>
                </div>
                <div className="home__item-direction">
                  <p>domicile travail(à changer)</p>
                </div>
              </div>
              <div className="home__item-option">
                <CtaVerticalDots />
              </div>
            </div>

            <div className="home__item-cta" onClick={handleClickChoice}>
              <BtnPrimary txt="Voir le conducteur disponible" path="#" />
            </div>
          </div>
          <div className="home__item travail">
            <div className="home__item-main">
              <div className="home__item-main-container">
                <div className="home__item-departure">
                  <p>17:00</p>
                </div>
                <div className="home__item-direction">
                  <p>domicile travail(à changer)</p>
                </div>
              </div>
              <div className="home__item-option">
                <CtaVerticalDots />
              </div>
            </div>

            <div className="home__item-cta" onClick={handleClickChoice}>
              <BtnPrimary txt="Voir le conducteur disponible" path="#" />
            </div>
          </div>
        </div>
        {isOverlayTrajetVisible && (
          <HomeOverlayTrajet
            isVisibleCalendar={isOverlayTrajetVisible}
            onCloseCalendar={() => setIsOverlayTrajetVisible(false)}
          />
        )}
        {isOverlayChoiceVisible && (
          <HomeOverlayChoice
            isVisibleChoice={isOverlayChoiceVisible}
            onCloseChoice={() => setIsOverlayChoiceVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
