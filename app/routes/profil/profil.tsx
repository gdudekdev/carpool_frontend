import { useState } from "react";
import ProfilActiveSection from "~/components/profil/layout/ProfilActiveSection/ProfilActiveSection";
import ProfilMain from "~/components/profil/layout/ProfilMain/ProfilMain";

const Profil = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  return (
      <div className="profil">
        {activeComponent ? (
          <ProfilActiveSection activeComponent={activeComponent} onClose={() => setActiveComponent(null)} />
        ) : (
          <ProfilMain onSelect={setActiveComponent} />
        )}
      </div>
  );
};

export default Profil;