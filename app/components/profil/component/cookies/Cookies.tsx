import { useEffect, useState } from "react";

const cookieOptions = [
  {
    id: "performance",
    title: "Cookies de Performance",
    description: "Ces cookies nous permettent d’analyser le trafic et d'améliorer votre expérience."
  },
  {
    id: "functionality",
    title: "Cookies de Fonctionnalité",
    description: "Ces cookies permettent d’enregistrer vos préférences."
  },
  {
    id: "advertising",
    title: "Cookies Publicitaires",
    description: "Nous n'affichons pas de publicités, mais certains cookies peuvent être utilisés pour des analyses anonymes."
  }
];

const Cookies = () => {
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  const [cookies, setCookies] = useState<{ [key: string]: boolean }>({
    performance: false,
    functionality: false,
    advertising: false,
  });

  useEffect(() => {
    const storedCookies = cookieOptions.reduce((acc, { id }) => {
      acc[id] = document.cookie.includes(`${id}Cookies=true`);
      return acc;
    }, {} as Record<string, boolean>);
    setCookies(storedCookies);
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setCookies((prev) => ({ ...prev, [id]: checked }));
    setShowUpdateButton(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    cookieOptions.forEach(({ id }) => {
      document.cookie = `${id}Cookies=${cookies[id]}; path=/;`;
    });
    setShowUpdateButton(false);
  };

  return (
    <div className="cookies">
      <h2>Paramètres des Cookies</h2>
      <p>Gérez vos préférences en matière de cookies ici.</p>
      <form onSubmit={handleSubmit} className="cookies__form">
        <div className="cookies__main">
          <label className="cookies__main-item">
            <div className="cookies__main-item-desc">
              <h5>Cookies Essentiels</h5>
              <p>Ces cookies sont nécessaires au bon fonctionnement du site.</p>
            </div>
            <div className="cookies__main-item-submit">
              <input type="checkbox" checked disabled />
            </div>
          </label>
          {cookieOptions.map(({ id, title, description }) => (
            <label key={id} className="cookies__main-item">
              <div className="cookies__main-item-desc">
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
              <div className="cookies__main-item-submit">
                <input
                  type="checkbox"
                  id={id}
                  checked={cookies[id]}
                  onChange={handleCheckboxChange}
                />
              </div>
            </label>
          ))}
        </div>
        {showUpdateButton && <input type="submit" value="Mettre à jour" />}
      </form>
    </div>
  );
};

export default Cookies;
