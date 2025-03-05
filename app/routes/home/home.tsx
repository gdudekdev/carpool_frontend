import { Link } from "react-router-dom";

const sections = [
  {
    className: "home__friend",
    title: "Je connais mon covoitureur",
    description:
      "Envoyez une demande de covoiturage à un ami ou un collègue depuis votre liste de contacts",
    link: {
      href: "/home/relatives", // Liens internes doivent utiliser <Link>
      text: "Covoiturer avec une connaissance",
    },
  },
  {
    className: "home__newride",
    title: "À la recherche de nouveaux covoitureurs?",
    description:
      "Publiez votre trajet domicile-travail pour voir les covoitureurs disponibles sur votre route.",
    link: {
      href: "#",
      text: "Publier votre trajet",
    },
  },
  {
    className: "home__search",
    title: "Rechercher un trajet",
    description: "Trouvez un covoiturage adapté à votre itinéraire.",
    link: {
      href: "/search", // Liens internes => <Link>
      text: "Rechercher",
    },
  },
];

const Home = () => {
  return (
    <div className="home">
      {sections.map((section, index) => (
        <section key={`section-${index}`} className={section.className}>
          <div
            className={`${section.className || "home__default"}-content`}
          >
            {section.title && <h2 className="home__section-title">{section.title}</h2>}
            {section.description && <p>{section.description}</p>}
          </div>
          {section.link &&
            section.link.href &&
            section.link.text &&
            (section.link.href.startsWith("/") ? (
              <Link
                to={section.link.href}
                className={`${section.className || "home__default"}-cta`}
              >
                <p>{section.link.text}</p>
              </Link>
            ) : (
              <a
                href={section.link.href}
                className={`${section.className || "home__default"}-cta`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{section.link.text}</p>
              </a>
            ))}
        </section>
      ))}
    </div>
  );
};

export default Home;
