import React, { useState, useEffect } from 'react';

const Vehicule = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const forms = ['marque', 'modele', 'recap'];

  const choices: { [key: string]: string[] } = {
    marque: ['CITROEN', 'PEUGEOT', 'RENAULT'],
    modele: ['MODEL1', 'MODEL2', 'MODEL3'],
  };

  useEffect(() => {
    const backButton = document.querySelector('.navbar__back-cta');
    const handleBackClickEvent = (event: Event) => handleBackClick(event as unknown as React.MouseEvent<HTMLButtonElement>);
    
    backButton?.addEventListener('click', handleBackClickEvent);
    return () => {
      backButton?.removeEventListener('click', handleBackClickEvent);
    };
  }, [currentStepIndex]);

  const handleChoiceClick = (formId: string, choiceValue: string) => {
    setFormData((prevData) => ({ ...prevData, [formId]: choiceValue }));
    if (currentStepIndex < forms.length - 2) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setCurrentStepIndex(forms.length - 1);
    }
  };

  const handleBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = '/profil';
  };

  const renderRecap = () => {
    return Object.entries(formData).map(([key, value]) => (
      <p key={key}>
        <strong>{key} :</strong> {value}
      </p>
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {forms.map((form, index) => (
          <div
            key={form}
            className="vehicule__form-etape"
            id={form}
            style={{ display: currentStepIndex === index ? 'block' : 'none' }}
          >
            {form !== 'recap' ? (
              <>
                <h2>Quelle est la {form} de votre véhicule?</h2>
                <div className="vehicule__form-etape-choix">
                  {choices[form]?.map((choice) => (
                    <div
                      key={choice}
                      className="vehicule__form-choix"
                      onClick={() => handleChoiceClick(form, choice)}
                    >
                      <div className="vehicule__form-choix-item">
                        <div className="vehicule__form-choix-img">
                          <img src="#" alt="" />
                        </div>
                        <div className="vehicule__form-choix-libelle">
                          <p>{choice}</p>
                        </div>
                      </div>
                      <div className="vehicule__form-choix-cta">
                        <img
                          src="/img/profil/cta/right-arrow.svg"
                          alt="Fleche vers la droite"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {currentStepIndex > 0 && (
                  <button type="button" onClick={handleBackClick} className="vehicule__form-back-cta">
                    Précédent
                  </button>
                )}
              </>
            ) : (
              <>
                <h2>Récapitulatif</h2>
                <div className="vehicule__form-recap-content">{renderRecap()}</div>
                <button type="button" onClick={handleBackClick} className="vehicule__form-back-cta">
                  Précédent
                </button>
                <button type="submit" className="vehicule__form-submit">
                  Valider
                </button>
              </>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default Vehicule;
