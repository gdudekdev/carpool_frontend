import profilSections from "./profilSections";
import FSOverlay from "~/layouts/FSOverlay/FSOverlay";

interface ProfilActiveSectionProps {
  activeComponent: string | null;
  onClose: () => void;
}
const ProfilActiveSection =({ activeComponent, onClose } : ProfilActiveSectionProps) => {
  if (!activeComponent) return null;

  const Component = profilSections[activeComponent];

  return <FSOverlay onClose={onClose} children={<Component />} />;
};
export default ProfilActiveSection;
