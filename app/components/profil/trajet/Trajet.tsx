import React, { useState } from "react";
import ToggleBtn from "~/components/button/ToggleBtn/ToggleBtn";
import CtaRightArrow from "~/src/assets/icon/cta/CtaRightArrow";
import IconTrajetHome from "~/src/assets/icon/profil/trajet/IconTrajetHome";
import IconTrajetWork from "~/src/assets/icon/profil/trajet/IconTrajetWork";
import Container from "~/components/container/Container";

const Trajet = () => {
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  return (
    <Container>
      <div className="trajet">
        <h2>Mon Trajet</h2>
        <div className="trajet__content">
          <section className="trajet__section trajet__adress">
            <div className="trajet__adress-left">
              <div className="trajet__adress-left-from">
                <IconTrajetHome />
              </div>
              <div className="trajet__adress-left-between"></div>
              <div className="trajet__adress-left-to">
                <IconTrajetWork />
              </div>
            </div>
            <div className="trajet__adress-right">
              <div className="trajet__adress-right-from">
                <h3>Domicile</h3>
                <p>Adresse</p>
                <div className="trajet__adress-right-cta">
                  <div className="trajet__adress-right-cta-p">
                    <p>Modifier l'adresse</p>
                  </div>
                  <div className="trajet__adress-right-cta-svg">
                    <CtaRightArrow />
                  </div>
                </div>
              </div>
              <div className="trajet__adress-right-to">
                <h3>Travail</h3>
                <p>Adresse</p>
                <div className="trajet__adress-right-cta">
                  <div className="trajet__adress-right-cta-p">
                    <p>Modifier l'adresse</p>
                  </div>
                  <div className="trajet__adress-right-cta-svg">
                    <CtaRightArrow />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="trajet__section trajet__role">
            <div className="trajet__role-content">
              <h3>Je suis conducteur</h3>
              <p>Proposez moi des passagers</p>
            </div>
            <div className="trajet__role-cta">
              <ToggleBtn />
            </div>
          </section>
          <section className="trajet__section trajet__disable">
            <div className="trajet__disable-content">
              <h3>Désactiver mon trajet</h3>
            </div>
            <div className="trajet__disable-cta">
              <ToggleBtn />
            </div>
          </section>
          <section className="trajet__section trajet__planning">
            <div className="trajet__planning-title">
              <h3>Mes horaires de départs habituels</h3>
            </div>
            <div className="trajet__planning-content">
              <div className="trajet__planning-content-day">
                <div className="trajet__planning-content-day-name">
                  <h3>Chaque Lundi</h3>
                </div>
                <div className="trajet__planning-content-day-main">
                  <table className="trajet__planning-content-day-main-table">
                    <tbody>
                      <tr>
                        <td>
                          <p>Domicile</p>
                        </td>
                        <td>
                          <input
                            type="time"
                            value={departureTime}
                            onChange={(e) => setDepartureTime(e.target.value)}
                          />
                        </td>
                        <td>
                          <ToggleBtn />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Travail</p>
                        </td>
                        <td>
                          <input
                            type="time"
                            value={arrivalTime}
                            onChange={(e) => setArrivalTime(e.target.value)}
                          />
                        </td>
                        <td>
                          <ToggleBtn />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Trajet;