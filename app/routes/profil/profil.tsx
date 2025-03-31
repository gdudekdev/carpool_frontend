import { useState } from "react";
import ProfilActiveSection from "~/components/profil/layout/ProfilActiveSection/ProfilActiveSection";
import ProfilLayout from "~/components/profil/layout/ProfilLayout/ProfilLayout";

const Profil = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  return (
      <div className="profil">
        {activeComponent ? (
          <ProfilActiveSection activeComponent={activeComponent} onClose={() => setActiveComponent(null)} />
        ) : (
          <ProfilLayout onSelect={setActiveComponent} />
        )}
      </div>
  );
};

export default Profil;