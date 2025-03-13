import React, { useEffect, useState } from 'react';

// Fonction pour ajouter une animation de compteur
const AnimatedNumber: React.FC<{ value: number; label: string; unit: string }> = ({ value, label, unit }) => {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const increment = () => {
      if (displayedValue < value) {
        setDisplayedValue((prev) => Math.min(prev + Math.ceil(value / 40), value)); // Animation progress
      }
    };
    const interval = setInterval(increment, 30);
    return () => clearInterval(interval);
  }, [displayedValue, value]);

  return (
    <div className="stat-item">
      <div className="stat-item__label">{label}</div>
      <div className="stat-item__value">
        {displayedValue}
        {unit}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const [stats, setStats] = useState({
    totalTrips: 25,
    totalDistance: 1500,
    totalPassengers: 75,
    totalSavings: 300,
  });

  useEffect(() => {
    // Simuler une récupération des données
    const timeout = setTimeout(() => {
      setStats({
        totalTrips: 30,
        totalDistance: 1800,
        totalPassengers: 100,
        totalSavings: 350,
      });
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="stats">
      <h2>Vos Statistiques de Covoiturage</h2>
      <div className="stats__content">
        <p className="stats__description">Voici vos statistiques de covoiturage avec des animations ludiques !</p>
        <div className="stats__main">
          <div className="stats__main-item">
            <i className="fas fa-car-side"></i>
            <AnimatedNumber value={stats.totalTrips} label="Trajets effectués" unit="" />
          </div>
          <div className="stats__main-item">
            <i className="fas fa-road"></i>
            <AnimatedNumber value={stats.totalDistance} label="Distance parcourue" unit=" km" />
          </div>
          <div className="stats__main-item">
            <i className="fas fa-users"></i>
            <AnimatedNumber value={stats.totalPassengers} label="Passagers transportés" unit="" />
          </div>
          <div className="stats__main-item">
            <i className="fas fa-euro-sign"></i>
            <AnimatedNumber value={stats.totalSavings} label="Économies réalisées" unit=" €" />
          </div>
        </div>

        <div className="stats__progress">
          <h4>Progression des objectifs :</h4>
          <div className="progress-bar">
            <label>Trajets réalisés</label>
            <div className="progress-bar__container">
              <div
                className="progress-bar__fill"
                style={{ width: `${(stats.totalTrips / 100) * 100}%`, backgroundColor: '#4CAF50' }}
              ></div>
            </div>
          </div>
          <div className="progress-bar">
            <label>Distance parcourue</label>
            <div className="progress-bar__container">
              <div
                className="progress-bar__fill"
                style={{ width: `${(stats.totalDistance / 2000) * 100}%`, backgroundColor: '#FF9800' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
