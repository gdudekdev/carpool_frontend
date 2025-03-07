import { useEffect, useState } from 'react';

const Cookies = () => {
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  useEffect(() => {
    const form = document.getElementById('cookie-settings-form');
    form?.addEventListener('submit', function(event) {
      event.preventDefault();
      const performanceCookies = (document.getElementById('performance-cookies') as HTMLInputElement)?.checked;
      const functionalityCookies = (document.getElementById('functionality-cookies') as HTMLInputElement)?.checked;
      const advertisingCookies = (document.getElementById('advertising-cookies') as HTMLInputElement)?.checked;

      document.cookie = `performanceCookies=${performanceCookies}; path=/;`;
      document.cookie = `functionalityCookies=${functionalityCookies}; path=/;`;
      document.cookie = `advertisingCookies=${advertisingCookies}; path=/;`;

      setShowUpdateButton(false);
    });

    const checkboxes = document.querySelectorAll('#performance-cookies, #functionality-cookies, #advertising-cookies');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => setShowUpdateButton(true));
    });

    return () => {
      checkboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', () => setShowUpdateButton(true));
      });
    };
  }, []);

  return (
    <div>
      <h2>Paramètres des Cookies</h2>
      <p>Gérez vos préférences en matière de cookies ici.</p>
      <form id="cookie-settings-form" className="cookies__form">
        <div className="cookies__main">
          <label className="cookies__item">
            <h5>Cookies Essentiels</h5>
            <p>Ces cookies sont nécessaires au bon fonctionnement du site.</p>
            <input type="checkbox" checked disabled />
          </label>
          <label className="cookies__item">
            <h5>Cookies de Performance</h5>
            <p>
              Ces cookies nous permettent d’analyser le trafic et d'améliorer
              votre expérience.
            </p>
            <input type="checkbox" id="performance-cookies" />
          </label>
          <label className="cookies__item">
            <h5>Cookies de Fonctionnalité</h5>
            <p>Ces cookies permettent d’enregistrer vos préférences.</p>
            <input type="checkbox" id="functionality-cookies" />
          </label>
          <label className="cookies__item">
            <h5>Cookies Publicitaires</h5>
            <p>
              Nous n'affichons pas de publicités, mais certains cookies peuvent
              être utilisés pour des analyses anonymes.
            </p>
            <input type="checkbox" id="advertising-cookies" />
          </label>
        </div>
        {showUpdateButton && <button type="submit">Mettre à jour</button>}
      </form>
    </div>
  );
};

export default Cookies;
