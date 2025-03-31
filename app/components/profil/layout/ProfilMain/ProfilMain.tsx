import UserProfil from "~/components/profil/layout/ProfilMain/user/UserProfil";
import ProfilSectionList from "~/components/profil/layout/ProfilMain/ProfilSectionList/ProfilSectionList";

const ProfilMain: React.FC<{ onSelect: (href: string) => void }> = ({ onSelect }) => (
  <>
    <UserProfil />
    <ProfilSectionList onSelect={onSelect} />
  </>
);

export default ProfilMain;
