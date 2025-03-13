import { useState } from "react";
import IconLocation from "~/src/assets/icon/general/IconLocation";

const TrajetChoice = () => {
  const trajets = [
    { id: 1, name: "John", entreprise: "Entreprise", rdv: "8h00", distance: "16 min à pied" },
    { id: 2, name: "Sophie", entreprise: "StartUp", rdv: "8h15", distance: "10 min à pied" },
    { id: 3, name: "Marc", entreprise: "TechCorp", rdv: "7h45", distance: "20 min à pied" },
    { id: 4, name: "Emma", entreprise: "InnovateX", rdv: "9h00", distance: "5 min à pied" },
    { id: 5, name: "Alex", entreprise: "GreenWay", rdv: "8h30", distance: "12 min à pied" },
  ];

  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
            {trajets.map((trajet) => (
              <div
                key={trajet.id}
                className={`trajet__choice-main-content-item cursor-pointer ${
                  selected.includes(trajet.id) ? "bg-gray-200" : ""
                }`}
                onClick={() => toggleSelection(trajet.id)}
              >
                <div className="trajet__choice-item-desc">
                  <div className="trajet__choice-item-desc-img">
                    <img src="app/src/assets/img/chat/dummyChatProfil.png" alt={trajet.name} />
                  </div>
                  <div className="trajet__choice-item-desc-main">
                    <div className="trajet__choice-item-desc-main-contact">
                      <h4>{trajet.name}</h4>
                      <p>{trajet.entreprise}</p>
                      <h5>RDV à {trajet.rdv}</h5>
                    </div>
                    <div className="trajet__choice-item-desc-main-info">
                      <IconLocation />
                      <p>{trajet.distance}</p>
                    </div>
                  </div>
                </div>
                <div className="trajet__choice-item-checkbox">
                  <label htmlFor={`choiceCheckbox-${trajet.id}`}>
                    <input
                      type="checkbox"
                      id={`choiceCheckbox-${trajet.id}`}
                      name="choiceCheckBox"
                      value={trajet.id}
                      checked={selected.includes(trajet.id)}
                      readOnly
                      className="pointer-events-none"
                    />
                  </label>
                </div>
              </div>
            ))}
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
