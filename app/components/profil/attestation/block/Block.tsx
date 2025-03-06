const Block = () => {
  return (
    <div>
      
      <div className="block">
            <h2>Liste des membres bloqués</h2>
            <div className="block__content">
                  <p>Vous pouvez gérer les membres que vous avez bloqués ici.</p>
                  <div className="block__main">
                        <div className="block__main-item">
                              <div className="block__item-icon">
                                    <img src="/img/profil/icon/user-block.svg" alt="Membre Bloqué">
                              </div>
                              <div className="block__item-content">
                                    <h5>Nom du membre</h5>
                                    <p>Date de blocage: 01/01/2023</p>
                              </div>
                              <div className="block__item-cta">
                                    <button className="block__unblock-button">Débloquer</button>
                              </div>
                        </div>
                  </div>
            </div>
      </div>

    </div>
  );
};

export default Block;
