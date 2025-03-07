const Historique = () => {
  const passagerTab = document.querySelector(".navbar__tab-passager");
  const conducteurTab = document.querySelector(".navbar__tab-conducteur");
  const historiqueContent = document.querySelector(".historique__content p");

  if(!passagerTab || !conducteurTab || !historiqueContent) {
    return null;
  };
  passagerTab.addEventListener("click", () => {
    // Vérifie si l'onglet Passager n'est pas déjà actif
    if (!passagerTab.classList.contains("active")) {
      // Change la classe active
      passagerTab.classList.add("active");
      conducteurTab.classList.remove("active");
      // Met à jour le contenu
      historiqueContent.textContent =
        "Historique des trajets pour le passager.";
    }
  });

  conducteurTab.addEventListener("click", () => {
    // Vérifie si l'onglet Conducteur n'est pas déjà actif
    if (!conducteurTab.classList.contains("active")) {
      // Change la classe active
      conducteurTab.classList.add("active");
      passagerTab.classList.remove("active");
      // Met à jour le contenu
      historiqueContent.textContent =
        "Historique des trajets pour le conducteur.";
    }
  });

  console.log("Rendering Historique");
  return (
    <div>
      <div className="historique">
        <div className="navbar__tab">
          <div className="navbar__tab-passager active">
            <span>Passager</span>
          </div>
          <div className="navbar__tab-conducteur">
            <span>Conducteur</span>
          </div>
        </div>

        <div className="historique__content">
          <p>Historique des trajets pour le passager.</p>
        </div>
      </div>
    </div>
  );
};

export default Historique;
