const Privacy = () => {
  const sections = [
    {
      title: "Section 1 - Collecte des données",
      content:
        "Nous collectons uniquement les données nécessaires à la mise en relation des utilisateurs et à l'amélioration du service.",
    },
    {
      title: "Section 2 - Utilisation des données",
      content:
        "Vos données sont utilisées uniquement pour faciliter votre expérience sur le site et ne sont pas revendues à des tiers.",
    },
    {
      title: "Section 3 - Sécurité",
      content:
        "Nous mettons en place des mesures de sécurité pour protéger vos informations contre les accès non autorisés.",
    },
    {
      title: "Section 4 - Partage des données",
      content:
        "Vos données ne sont partagées qu'avec votre consentement ou lorsque la loi l'exige.",
    },
    {
      title: "Section 5 - Droit d'accès et de suppression",
      content:
        "Vous pouvez demander à consulter, modifier ou supprimer vos données à tout moment en nous contactant.",
    },
  ];

  return (
    <div>
      <div className="privacy">
        <h2>Protection des Données</h2>
        <div className="privacy__content">
          <p>
            Retrouvez ici les informations sur la protection de vos données
            personnelles.
          </p>
          <div className="privacy__main">
            {sections.map((section) => (
              <div className="privacy__main-item">
                <div className="privacy__item-content">
                  <h5>{section.title}</h5>
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
