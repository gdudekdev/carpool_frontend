import React, { useState } from 'react';

const Historique = () => {
  const [activeTab, setActiveTab] = useState('passager');

  const getContent = () => {
    if (activeTab === 'passager') {
      return 'Historique des trajets pour le passager.';
    }
    return 'Historique des trajets pour le conducteur.';
  };

  return (
    <div>
      <div className="historique">
        <div className="historique__navbar-tab">
          <div
            className={`historique__navbar-tab-passager ${activeTab === 'passager' ? 'active' : ''}`}
            onClick={() => setActiveTab('passager')}
          >
            <span>Passager</span>
          </div>
          <div
            className={`historique__navbar-tab-conducteur ${activeTab === 'conducteur' ? 'active' : ''}`}
            onClick={() => setActiveTab('conducteur')}
          >
            <span>Conducteur</span>
          </div>
        </div>

        <div className="historique__content">
          <p>{getContent()}</p>
        </div>
      </div>
    </div>
  );
};

export default Historique;
