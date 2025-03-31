import UserProfil from "~/components/profil/layout/ProfilLayout/user/UserProfil";
import ProfilSectionList from "~/components/profil/layout/ProfilLayout/ProfilSectionList/ProfilSectionList";

const ProfilLayout: React.FC<{ onSelect: (href: string) => void }> = ({ onSelect }) => (
  <>
    <UserProfil />
    <ProfilSectionList onSelect={onSelect} />
  </>
);

export default ProfilLayout;
