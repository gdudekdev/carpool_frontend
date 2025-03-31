const articles = [
  { title: "Article 1 - Objet", content: "Les présentes conditions générales ont pour objet de définir les règles d'utilisation du service de covoiturage participatif." },
  { title: "Article 2 - Inscription", content: "L'inscription est gratuite et ouverte à toute personne majeure souhaitant proposer ou rechercher un trajet en covoiturage." },
  { title: "Article 3 - Engagement des utilisateurs", content: "Les utilisateurs s'engagent à fournir des informations exactes et à respecter les autres membres de la communauté." },
  { title: "Article 4 - Responsabilités", content: "Le site n'est qu'un intermédiaire et décline toute responsabilité en cas de litige entre conducteurs et passagers." },
  { title: "Article 5 - Annulation", content: "En cas d'annulation d'un trajet, l'utilisateur doit prévenir les autres participants dès que possible." },
  { title: "Article 6 - Données personnelles", content: "Les données personnelles des utilisateurs sont protégées conformément à la réglementation en vigueur." },
  { title: "Article 7 - Modification des CGU", content: "Les conditions générales peuvent être mises à jour à tout moment. Les utilisateurs seront informés des modifications." },
];

const Cgu = () => {
  return (
    <div className="cgu">
      <h2>Conditions Générales</h2>
      <div className="cgu__content">
        <p>Retrouvez ici les conditions générales d'utilisation.</p>
        <div className="cgu__main">
          {articles.map((article, index) => (
            <div className="cgu__main-item" key={index}>
              <div className="cgu__item-content">
                <h5>{article.title}</h5>
                <p>{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cgu;
