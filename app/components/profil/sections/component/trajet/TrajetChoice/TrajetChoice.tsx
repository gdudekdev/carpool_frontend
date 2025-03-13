import IconLocation from "~/src/assets/icon/general/IconLocation";

const TrajetChoice = () => {
  return (
    <div className="trajet__choice">
      <form action="#" method="post" className="trajet__choice-form">
        <div className="trajet__choice-header">
          <h2>Choisissez des conducteurs</h2>
          <p>Trouvez des covoitureurs qui partagent votre trajet</p>
        </div>
        <div className="trajet__choice-main">
          <div className="trajet__choice-main-header">
            <h3>Meilleurs résultats</h3>
          </div>
          <div className="trajet__choice-main-content">
            <div className="trajet__choice-main-content-item">
              <div className="trajet__choice-item-desc">
                <div className="trajet__choice-item-desc-img">
                  <img
                    src="app\src\assets\img\chat\dummyChatProfil.png"
                    alt=""
                  />
                </div>
                <div className="trajet__choice-item-desc-main">
                  <div className="trajet__choice-item-desc-main-contact">
                    <h4>John</h4>
                    <p>Entreprise</p>
                    <h5>RDV à 8h00</h5>
                  </div>
                  <div className="trajet__choice-item-desc-main-info">
                    <IconLocation />
                    <p>16 min à pied</p>
                  </div>
                </div>
              </div>
              <div className="trajet__choice-item-checkbox">
                <label htmlFor="choiceCheckbox">
                  <input
                    type="checkbox"
                    id="choiceCheckbox"
                    name="choiceCheckBox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="trajet__choice-main-content-item">
              <div className="trajet__choice-item-desc">
                <div className="trajet__choice-item-desc-img">
                  <img
                    src="app\src\assets\img\chat\dummyChatProfil.png"
                    alt=""
                  />
                </div>
                <div className="trajet__choice-item-desc-main">
                  <div className="trajet__choice-item-desc-main-contact">
                    <h4>John</h4>
                    <p>Entreprise</p>
                    <h5>RDV à 8h00</h5>
                  </div>
                  <div className="trajet__choice-item-desc-main-info">
                    <IconLocation />
                    <p>16 min à pied</p>
                  </div>
                </div>
              </div>
              <div className="trajet__choice-item-checkbox">
                <label htmlFor="choiceCheckbox">
                  <input
                    type="checkbox"
                    id="choiceCheckbox"
                    name="choiceCheckBox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="trajet__choice-main-content-item">
              <div className="trajet__choice-item-desc">
                <div className="trajet__choice-item-desc-img">
                  <img
                    src="app\src\assets\img\chat\dummyChatProfil.png"
                    alt=""
                  />
                </div>
                <div className="trajet__choice-item-desc-main">
                  <div className="trajet__choice-item-desc-main-contact">
                    <h4>John</h4>
                    <p>Entreprise</p>
                    <h5>RDV à 8h00</h5>
                  </div>
                  <div className="trajet__choice-item-desc-main-info">
                    <IconLocation />
                    <p>16 min à pied</p>
                  </div>
                </div>
              </div>
              <div className="trajet__choice-item-checkbox">
                <label htmlFor="choiceCheckbox">
                  <input
                    type="checkbox"
                    id="choiceCheckbox"
                    name="choiceCheckBox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="trajet__choice-main-content-item">
              <div className="trajet__choice-item-desc">
                <div className="trajet__choice-item-desc-img">
                  <img
                    src="app\src\assets\img\chat\dummyChatProfil.png"
                    alt=""
                  />
                </div>
                <div className="trajet__choice-item-desc-main">
                  <div className="trajet__choice-item-desc-main-contact">
                    <h4>John</h4>
                    <p>Entreprise</p>
                    <h5>RDV à 8h00</h5>
                  </div>
                  <div className="trajet__choice-item-desc-main-info">
                    <IconLocation />
                    <p>16 min à pied</p>
                  </div>
                </div>
              </div>
              <div className="trajet__choice-item-checkbox">
                <label htmlFor="choiceCheckbox">
                  <input
                    type="checkbox"
                    id="choiceCheckbox"
                    name="choiceCheckBox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="trajet__choice-main-content-item">
              <div className="trajet__choice-item-desc">
                <div className="trajet__choice-item-desc-img">
                  <img
                    src="app\src\assets\img\chat\dummyChatProfil.png"
                    alt=""
                  />
                </div>
                <div className="trajet__choice-item-desc-main">
                  <div className="trajet__choice-item-desc-main-contact">
                    <h4>John</h4>
                    <p>Entreprise</p>
                    <h5>RDV à 8h00</h5>
                  </div>
                  <div className="trajet__choice-item-desc-main-info">
                    <IconLocation />
                    <p>16 min à pied</p>
                  </div>
                </div>
              </div>
              <div className="trajet__choice-item-checkbox">
                <label htmlFor="choiceCheckbox">
                  <input
                    type="checkbox"
                    id="choiceCheckbox"
                    name="choiceCheckBox"
                    value="1"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="trajet__choice-form-submit">
          <input type="submit" value="Envoyer ma demande" />
        </div>
      </form>
    </div>
  );
};
export default TrajetChoice;
