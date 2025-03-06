const Notif = () => {
  console.log("Rendering Notif");
  return (
    <div className="notif">
      <h2>Pour quelle période souhaitez-vous recevoir une attestation?</h2>
      <div className="notif__content">
        <div className="notif__content-info">
          <div className="notif__content-info-img">
            <img src="/img/profil/icon/info.svg" alt="Info" />
          </div>
          <p>
            Les trajets effectués au cours des dernières 72 heures
            n'apparaîtront pas dans votre attestation.
          </p>
        </div>
        <div className="notif__content-form">
          <form action="#" method="get" className="notif__form">
            <label htmlFor="notif_debut">Du</label>
            <input
              type="date"
              id="notif_debut"
              name="notif_debut"
              placeholder="JJ/MM/AAAA"
              min="<?php echo date('d-m-Y'); ?>"
            />
            <label htmlFor="notif_fin">Au</label>
            <input
              type="date"
              id="notif_fin"
              name="notif_fin"
              placeholder="JJ/MM/AAAA"
              min="<?php echo date('d-m-Y'); ?>"
            />
            <input type="submit" value="Recevoir une attestation" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notif;
