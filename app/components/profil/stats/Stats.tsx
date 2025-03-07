const Stats = () => {
  document.addEventListener('DOMContentLoaded', function () {
    // Example data, replace with actual data fetching logic
    const stats = {
        totalTrips: 25,
        totalDistance: 1500,
        totalPassengers: 75,
        totalSavings: 300
    };

    const totalTripsElement = document.getElementById('total-trips');
    if (totalTripsElement) totalTripsElement.textContent = stats.totalTrips.toString();

    const totalDistanceElement = document.getElementById('total-distance');
    if (totalDistanceElement) totalDistanceElement.textContent = stats.totalDistance + ' km';

    const totalPassengersElement = document.getElementById('total-passengers');
    if (totalPassengersElement) totalPassengersElement.textContent = stats.totalPassengers.toString();

    const totalSavingsElement = document.getElementById('total-savings');
    if (totalSavingsElement) totalSavingsElement.textContent = stats.totalSavings + ' €';
});

  return (
    <div>
      <div className="stats">
        <h2>Vos Statistiques de Covoiturage</h2>
        <div className="stats__content">
          <p>Consultez vos statistiques personnelles de covoiturage.</p>
          <div className="stats__main">
            <div className="stats__main-item">
              <h5>Nombre de trajets effectués</h5>
              <p id="total-trips">0</p>
            </div>
            <div className="stats__main-item">
              <h5>Distance totale parcourue</h5>
              <p id="total-distance">0 km</p>
            </div>
            <div className="stats__main-item">
              <h5>Nombre de passagers transportés</h5>
              <p id="total-passengers">0</p>
            </div>
            <div className="stats__main-item">
              <h5>Économies réalisées</h5>
              <p id="total-savings">0 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
