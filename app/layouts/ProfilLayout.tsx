import UserProfil from "~/components/profil/sections/component/user/UserProfil";
import ProfilSectionList from "~/components/profil/sections/layout/ProfilSectionList";

const ProfilLayout: React.FC<{ onSelect: (href: string) => void }> = ({ onSelect }) => (
  <>
    <UserProfil />
    <ProfilSectionList onSelect={onSelect} />
  </>
);

export default ProfilLayout;
